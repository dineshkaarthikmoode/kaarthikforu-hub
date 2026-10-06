import {
  AFFILIATE_DISCLOSURE,
  FINDS_NAME,
  FINDS_TAGLINE,
} from "@/lib/site-config";

export function KaarthikFindsHero() {
  return (
    <header className="relative overflow-hidden border-b border-[#E8E8E3]">
      <div
        className="h-[2px] bg-gradient-to-r from-[#5a8f8a]/35 via-[#E8C547]/45 to-[#5a8f8a]/25"
        aria-hidden
      />

      {/* Base + soft multi-tone bands (header only) */}
      <div className="absolute inset-0 bg-[#FAFAF6]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,#F8F8F3_0%,#FAFAF6_42%,#F3F8F7_100%)] opacity-90"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-[15%] -top-[40%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,#E8C547_0%,transparent_70%)] opacity-[0.12]" />
        <div className="absolute -right-[8%] top-0 h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,#8fbdb6_0%,transparent_72%)] opacity-[0.1]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1080px] px-4 py-3.5 sm:px-6 sm:py-4">
        <h1 className="text-[20px] font-semibold leading-tight text-[#173B3B] sm:text-[22px]">
          {FINDS_NAME}
        </h1>
        <p className="mt-1 max-w-2xl text-[13px] font-normal leading-snug text-[#526565]">
          {FINDS_TAGLINE}
        </p>
      </div>

      <div className="relative border-t border-[#E8E8E3]/90 bg-[#F4F4EF]">
        <div className="mx-auto w-full max-w-[1080px] px-4 py-1.5 sm:px-6">
          <p className="text-[11px] font-normal leading-snug text-[#526565]">
            {AFFILIATE_DISCLOSURE}
          </p>
        </div>
      </div>
    </header>
  );
}
