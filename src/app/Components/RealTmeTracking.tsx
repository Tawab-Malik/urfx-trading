'use client';

import { useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@heroui/react';
import { FiBarChart2, FiDollarSign, FiShield, FiZap } from 'react-icons/fi';
import { RiTimer2Fill } from 'react-icons/ri';
import { BsFillShieldLockFill } from 'react-icons/bs';

type RangeKey = '1W' | '1M' | '6M' | '1Y' | 'All Time';

const ranges: RangeKey[] = ['1W', '1M', '6M', '1Y', 'All Time'];

const baseHeights = [10, 14, 9, 18, 12, 22, 16, 26, 18, 30, 22, 34, 24, 38, 28, 46, 34, 58, 42, 72, 56, 84, 66, 92, 78, 96, 88, 98];

function buildBars(range: RangeKey) {
    // Hand-tuned heights to match the reference vibe (denser right side)
    const base = baseHeights;
    const scaled =
        range === '1W'
            ? base.slice(-10)
            : range === '6M'
                ? [...base, ...base.slice(10, 22)]
                : range === '1Y'
                    ? [...base, ...base, ...base.slice(0, 10)]
                    : range === 'All Time'
                        ? [...base, ...base, ...base]
                        : base;
    return scaled.map((h, i) => ({ h, i }));
}

export default function RealTmeTracking() {
    const [range, setRange] = useState<RangeKey>('1M');
    const [activeIndex, setActiveIndex] = useState(() => Math.floor(buildBars('1M').length * 0.74));
    const chartRef = useRef<HTMLDivElement | null>(null);

    const bars = useMemo(() => {
        return buildBars(range);
    }, [range]);

    const safeActiveIndex = Math.min(Math.max(0, activeIndex), Math.max(0, bars.length - 1));

    const points = useMemo(() => {
        const start = (() => {
            // Keep the reference tooltip date stable for the default (1M) view.
            if (range === '1M') return new Date(2026, 1, 27); // Feb 27, 2026 (idx 20 => Mar 19)
            const today = new Date(2026, 2, 6); // Mar 6, 2026 (matches project "today")
            const days =
                range === '1W' ? 10 : range === '6M' ? bars.length : range === '1Y' ? bars.length : range === 'All Time' ? bars.length : bars.length;
            return new Date(today.getTime() - (days - 1) * 24 * 60 * 60 * 1000);
        })();

        const fmt = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' });

        return bars.map((b, idx) => {
            const d = new Date(start);
            d.setDate(start.getDate() + idx);

            const v = 2600 + (b.h / 100) * 5200;
            const label = `$${v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

            return {
                dateLabel: fmt.format(d),
                valueLabel: label,
            };
        }).map((p, idx) => {
            // Force the exact reference tooltip for the focused index in 1M.
            if (range === '1M' && idx === Math.floor(bars.length * 0.74)) {
                return { dateLabel: 'Mar 19', valueLabel: '$6,436.44' };
            }
            return p;
        });
    }, [bars, range]);

    const cursorLeftPct = (safeActiveIndex / Math.max(1, bars.length - 1)) * 100;
    const cursorValue = points[safeActiveIndex]?.valueLabel ?? '$6,436.44';
    const cursorDate = points[safeActiveIndex]?.dateLabel ?? 'Mar 19';

    const setActiveFromClientX = (clientX: number) => {
        const el = chartRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = Math.min(Math.max(0, clientX - rect.left), rect.width);
        const idx = Math.round((x / Math.max(1, rect.width)) * Math.max(1, bars.length - 1));
        setActiveIndex(Math.min(Math.max(0, idx), Math.max(0, bars.length - 1)));
    };

    const balanceSegments = [
        { label: 'USD', value: '$12K', color: '#B14BFF', pct: 28 },
        { label: 'JPY', value: '$525', color: '#FF3B7A', pct: 10 },
        { label: 'EUR', value: '$9.2K', color: '#35A7FF', pct: 22 },
        { label: 'GBP', value: '$293', color: '#FFC12E', pct: 8 },
        { label: 'INR', value: '$881', color: '#25E28A', pct: 12 },
    ];

    return (
        <section className="relative overflow-hidden font-primary bg-linear-to-r from-[#38D6DA] via-[#8ED36E] to-[#F0DD3B]">
           <div className='bg-[url("/images/realbg.png")] bg-no-repeat bg-center bg-contain'>
           <motion.div
                className="relative z-10 max-w-[1240px] mx-auto px-4 xl:px-0 py-10 md:py-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                {/* Heading */}
                <div className="text-center mb-10 md:mb-12">
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold text-[#111111] tracking-tight"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        Real-Time Performance Tracking
                    </motion.h2>
                    <motion.p
                        className="mt-3 px-5 md:px-0 text-sm md:text-lg text-[#111111] "
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
                    >
                        Monitor your trading performance with advanced analytics and real-time statistics
                    </motion.p>
                </div>

                {/* Content */}
                <div className="grid gap-6 md:gap-7 lg:grid-cols-2 items-start">
                    {/* Left: Profit chart */}
                    <motion.div
                        className="bg-[#111111]/90 md:bg-[#111111] border border-white/5 shadow-[0_18px_70px_rgba(0,0,0,0.35)]"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <div className="px-7 pt-7 pb-3">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-white/30 text-sm md:text-lg font-medium">Profit</p>
                                    <p className="text-white text-xl md:text-3xl font-bold ">
                                        $7,223<span className='text-white/30'>.43</span>
                                    </p>
                                </div>
                                <p className="text-white/30 text-xs md:text-sm mt-1">
                                    Last Updated: 3:18:33 AM
                                </p>
                            </div>

                            {/* Range pills */}
                            <div className="flex items-center gap-2 mt-4">
                                {ranges.map((r) => {
                                    const active = r === range;
                                    return (
                                        <button
                                            key={r}
                                            type="button"
                                            onClick={() => {
                                                setRange(r);
                                                setActiveIndex(Math.floor(buildBars(r).length * 0.74));
                                            }}
                                            className={[
                                                ' text-xs md:text-base px-3 py-1 cursor-pointer font-bold rounded-full border transition-colors',
                                                active
                                                    ? 'bg-white text-[#06050B] border-white'
                                                    : 'bg-white/10 text-white/70 border-white/20 hover:bg-white/10 hover:text-white',
                                            ].join(' ')}
                                        >
                                            {r}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Chart area */}
                        <div className="relative px-7 pb-6 pt-3">
                            <div
                                ref={chartRef}
                                className="relative h-[214px] md:h-[297px] overflow-hidden touch-none select-none"
                                onPointerDown={(e) => setActiveFromClientX(e.clientX)}
                                onPointerMove={(e) => {
                                    if (e.buttons !== 1) return;
                                    setActiveFromClientX(e.clientX);
                                }}
                                onMouseMove={(e) => setActiveFromClientX(e.clientX)}
                            >
                                {/* Subtle chart haze (helps bars stay visible) */}

                                {/* Bars */}
                                <div
                                    className="absolute inset-0 flex items-end justify-between "
                                >
                                    {bars.map((b, idx) => {
                                        const dist = Math.abs(idx - safeActiveIndex);
                                        const isActive = idx === safeActiveIndex;
                                        const top = isActive ? 0.55 : dist <= 1 ? 0.24 : 0.18;
                                        const bottom = isActive ? 0.28 : dist <= 1 ? 0.14 : 0.08;
                                        const barWidthPx = isActive ? 7 : dist <= 1 ? 6 : 5;
                                        return (
                                            <div key={idx} className="h-full flex items-end justify-center shrink-0">
                                                <motion.div
                                                    className="rounded-full"
                                                    initial={{ height: 0, opacity: 0.35 }}
                                                    animate={{ height: `${b.h}%`, opacity: 1 }}
                                                    transition={{ duration: 0.7, ease: 'easeOut', delay: Math.min(0.45, idx * 0.01) }}
                                                    style={{
                                                        width: `5px`,
                                                        background: `linear-gradient(to top, rgba(255,255,255,${top}), rgba(255,255,255,${bottom}))`,
                                                        boxShadow: isActive ? '0 0 0 1px rgba(255,255,255,0.12), 0 10px 26px rgba(0,0,0,0.35)' : 'none',
                                                    }}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Cursor line + tooltip */}
                                <motion.div
                                    className="absolute bottom-0 top-0 z-10"
                                    initial={{ left: '30%', opacity: 0 }}
                                    animate={{ left: `${cursorLeftPct}%`, opacity: 1 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
                                    style={{ transform: 'translateX(-50%)' }}
                                >
                                    <div className="absolute top-[94px] left-3 -translate-x-1/2">
                                        <div className="flex items-center rounded-[10px] bg-white/10 border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.45)] overflow-hidden">
                                            <span className="px-3 py-1 text-[10px] md:text-base font-bold text-white/50 whitespace-nowrap">
                                                {cursorDate}
                                            </span>
                                            <span className="h-5 w-px bg-white/10" />
                                            <span className="px-3 py-1 text-[10px] md:text-base font-bold text-white/90 whitespace-nowrap">
                                                {cursorValue}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Focus line (lime -> white) */}
                                    <div className="absolute top-0 bottom-0 left-1/2 rounded-full -translate-x-1/2 w-[5px] bg-linear-to-b from-30% from-white/10 via-lime/90 to-white shadow-[0_0_18px_rgba(255,255,255,0.18)]" />
                                    {/* Knob centered on the line */}
                                    <div className="absolute top-[100px] -left-2 -translate-x-1/2 h-5 w-5 rounded-full bg-white shadow-[0_0_0_5px_rgba(142,211,110,0.14)]" />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Balance + stats */}
                    <div className="space-y-6">
                        <motion.div
                            className="bg-[#111111]/90 md:bg-[#111111]  shadow-[0_18px_70px_rgba(0,0,0,0.35)]"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        >
                            <div className="px-7 pt-7 pb-7">
                                <p className="text-white/30 text-sm md:text-lg">Balance</p>
                                <p className="text-white text-xl md:text-3xl font-bold  mt-2">
                                    $11,940<span className='text-white/30'>.43</span>
                                </p>

                                {/* Segmented bar */}
                                <div className="mt-6 h-[5px] w-full bg-white/10 rounded-full overflow-hidden">
                                    <div className="flex h-full w-full space-x-0.5">
                                        {balanceSegments.map((seg, i) => (
                                            <motion.div
                                                key={seg.label}
                                                className="h-full rounded-full"
                                                style={{ backgroundColor: seg.color }}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${seg.pct}%` }}
                                                viewport={{ once: true, amount: 0.2 }}
                                                transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 + i * 0.05 }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Currency labels */}
                                <div className="mt-4 grid grid-cols-5 gap-2">
                                    {balanceSegments.map((seg) => (
                                        <div key={seg.label} className="text-xs md:text-base">
                                            <p className="font-bold" style={{ color: seg.color }}>
                                                {seg.label}
                                            </p>
                                            <p className="text-white/70 mt-0.5 text-xs md:text-base font-bold">{seg.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-3"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
                        >
                            {[
                                {
                                    title: 'Success Rate',
                                    value: '92.3%',
                                    sub: '+5.2% of trades hit profit',
                                    icon: <FiBarChart2 size={20} />,
                                    accent: '#25E28A',
                                },
                                {
                                    title: 'Average profit',
                                    value: '$185.50',
                                    sub: '+12.5% per winning trade',
                                    icon: <FiDollarSign size={20}/>,
                                    accent: '#25E28A',
                                },
                                {
                                    title: 'Execution Rate',
                                    value: '0.04s',
                                    sub: '99.9% average execution time',
                                    icon: <RiTimer2Fill size={20} />,
                                    accent: '#25E28A',
                                },
                                {
                                    title: 'Risk Management',
                                    value: 'Active',
                                    sub: '99.9% advanced protection enabled',
                                    icon: <BsFillShieldLockFill size={20} />,
                                    accent: '#25E28A',
                                },
                            ].map((card, idx) => (
                                <motion.div
                                    key={card.title}
                                    className="bg-[#111111] px-4 py-3 shadow-[0_18px_70px_rgba(0,0,0,0.25)] items-center md:items-start justify-start gap-x-10 flex flex-row md:flex-col"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 + idx * 0.05 }}
                                >
                                    <div className="flex items-center justify-start gap-4">
                                        <div className="h-7 w-7 flex items-center justify-center bg-white/10 text-white/80">
                                            <span className="text-base">{card.icon}</span>
                                        </div>
                                        <div>
                                            <p className="text-white/50 leading-tight text-[10px] md:text-base">{card.title}</p>
                                            <p className="text-white leading-tight text-lg md:text-[22px] font-bold">{card.value}</p>
                                        </div>

                                    </div>
                                    <p className="flex flex-row md:flex-col gap-x-2 text-sm md:text-base leading-tight font-semibold text-white">
                                        <span style={{ color: card.accent }} className="font-semibold">
                                            {card.sub.split(' ')[0]}
                                        </span>{' '}
                                        {card.sub.replace(card.sub.split(' ')[0], '').trim()}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    className="flex justify-center mt-10 md:mt-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                >
                    <Button className="simpleblack rounded-none text-lg font-bold h-auto py-2 px-[15px]">
                        Start Challenge
                    </Button>
                </motion.div>
            </motion.div>
           </div>
        </section>
    );
}

