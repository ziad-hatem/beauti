export function hexToRgb(hex, opacity = 1) {
  // Remove the '#' if present
  hex = hex.replace(/^#/, "");

  // Check if the hex code is valid
  if (hex.length !== 6) {
    throw new Error("Input hex code must be a 6-character string.");
  }

  // Extract the red, green, and blue components
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
