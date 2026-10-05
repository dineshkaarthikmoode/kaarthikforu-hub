const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function formatInr(amount: number): string {
  return inrFormatter.format(amount);
}

export function formatReviewCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  }
  return String(count);
}

/** e.g. "30 Sep" from "2025-09-01 (sample)" or ISO dates */
export function formatPriceAsOf(lastChecked: string): string {
  const isoMatch = lastChecked.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (isoMatch) {
    const d = new Date(
      Number(isoMatch[1]),
      Number(isoMatch[2]) - 1,
      Number(isoMatch[3]),
    );
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
  }
  return lastChecked.replace(/\s*\(sample\)\s*/i, "").trim();
}
