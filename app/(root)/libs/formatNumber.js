// utils/formatNumber.js

export function formatNumberInArabic(number, options = {}) {
  try {
    return new Intl.NumberFormat("ar-EG", {
      useGrouping: false,
      ...options,
    }).format(number);
  } catch (error) {
    console.error("Error formatting number:", error);
    return number;
  }
}
