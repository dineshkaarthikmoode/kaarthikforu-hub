import {
  FINDS_PRICES_LAST_UPDATED,
  KAARTHIKFORU_BRAND,
} from "@/lib/site-config";
import Link from "next/link";

export function KaarthikFindsFooter() {
  return (
    <footer className="mt-10 border-t border-[#E8E8E3] bg-[#FAFAF7]">
      <div className="mx-auto w-full max-w-[1240px] space-y-1 px-4 py-7 text-center sm:px-6">
        <p className="text-[12px] font-normal leading-relaxed text-[#5F6868]">
          Prices change, check on Amazon · last updated {FINDS_PRICES_LAST_UPDATED}
        </p>
        <p className="text-[12px] font-normal leading-relaxed text-[#5F6868]">
          Made by{" "}
          <Link
            href="/"
            className="font-medium text-[#172B2B] underline decoration-[#E8E8E3] underline-offset-[3px] transition-colors hover:decoration-[#172B2B]/40"
          >
            {KAARTHIKFORU_BRAND}
          </Link>
          ·
        </p>
      </div>
    </footer>
  );
}
