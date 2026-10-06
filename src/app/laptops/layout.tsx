import { KaarthikFindsFooter } from "@/components/laptops/KaarthikFindsChrome";
import { KaarthikFindsHero } from "@/components/laptops/KaarthikFindsHero";

export default function LaptopsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col bg-[#FAFAF6]">
      <KaarthikFindsHero />
      <div className="flex-1">{children}</div>
      <KaarthikFindsFooter />
    </div>
  );
}
