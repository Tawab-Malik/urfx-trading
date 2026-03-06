type ClassDictionary = Record<string, boolean | null | undefined>;
type ClassValue = string | number | null | false | undefined | ClassDictionary | ClassValue[];

function pushClass(classes: string[], value: ClassValue): void {
  if (!value) return;

  if (typeof value === "string" || typeof value === "number") {
    classes.push(String(value));
    return;
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      pushClass(classes, item);
    }
    return;
  }

  if (typeof value === "object") {
    for (const [key, enabled] of Object.entries(value)) {
      if (enabled) classes.push(key);
    }
  }
}

export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];
  for (const input of inputs) {
    pushClass(classes, input);
  }
  return classes.join(" ");
}

