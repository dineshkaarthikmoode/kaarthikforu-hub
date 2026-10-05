import { AFFILIATE_DISCLOSURE } from "@/lib/site-config";

export function AffiliateDisclosure({ className }: { className?: string }) {
  return (
    <p className={`text-sm leading-relaxed text-muted ${className ?? ""}`}>
      {AFFILIATE_DISCLOSURE}
    </p>
  );
}
