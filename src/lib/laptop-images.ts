/** Local fallback when a product image URL fails or is missing. */
export const LAPTOP_IMAGE_FALLBACK = "/images/laptops/placeholder.svg";

/** Product WebPs hosted alongside Swaroop's laptop catalogue resources. */
export const LAPTOP_PRODUCT_IMAGE_CDN_BASE =
  "https://bjswaroop.github.io/codewithswaroop-resources/laptops/img";

const LOCAL_LAPTOP_IMAGE_PREFIX = "/images/laptops/";

/** Normalize image paths from product data (local paths → CDN ASIN filenames). */
export function resolvePublicImageSrc(src: string): string {
  const trimmed = src?.trim();
  if (!trimmed) return LAPTOP_IMAGE_FALLBACK;
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }
  if (
    trimmed.startsWith(LOCAL_LAPTOP_IMAGE_PREFIX) &&
    trimmed !== LAPTOP_IMAGE_FALLBACK
  ) {
    const filename = trimmed.slice(LOCAL_LAPTOP_IMAGE_PREFIX.length);
    if (filename && !filename.includes("/")) {
      return `${LAPTOP_PRODUCT_IMAGE_CDN_BASE}/${filename}`;
    }
  }
  if (trimmed.startsWith("/")) {
    return trimmed;
  }
  return trimmed;
}
