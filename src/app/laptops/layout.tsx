import {
  KaarthikFindsFooter,
  KaarthikFindsHeader,
} from "@/components/laptops/KaarthikFindsChrome";

export default function LaptopsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col bg-surface">
      <KaarthikFindsHeader />
      <div className="flex-1">{children}</div>
      <KaarthikFindsFooter />
    </div>
  );
}
