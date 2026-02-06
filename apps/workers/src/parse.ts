/**
 * Parse template strings using workflow execution data
 * Supports: {step0.result}, {workflowRunId}, {stage}, etc.
 */
export function parse(
  template: string,
  data: Record<string, any>,
  startDelim = "{",
  endDelim = "}",
): string {
  let startIndex = 0;
  let finalString = "";

  while (startIndex < template.length) {
    if (template[startIndex] === startDelim) {
      let endIndex = startIndex + 1;

      while (endIndex < template.length && template[endIndex] !== endDelim) {
        endIndex++;
      }

      if (endIndex < template.length) {
        const keyPath = template.slice(startIndex + 1, endIndex);
        const value = getNestedValue(data, keyPath);

        finalString += value !== undefined ? String(value) : "";
        startIndex = endIndex + 1;
      } else {
        finalString += template[startIndex];
        startIndex++;
      }
    } else {
      finalString += template[startIndex];
      startIndex++;
    }
  }

  return finalString;
}

/**
 * Navigate through nested object using dot notation
 */
function getNestedValue(obj: any, path: string): any {
  const keys = path.split(".");
  let current = obj;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (current === null || current === undefined) {
      return undefined;
    }

    if (typeof current === "string") {
      try {
        current = JSON.parse(current);
      } catch (e) {
        return undefined;
      }
    }

    current = current[key!];
  }

  return current;
}
