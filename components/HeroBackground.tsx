type Props = {
  src: string;
  alt?: string;
  intensity?: "light" | "default" | "heavy";
};

const overlayByIntensity: Record<NonNullable<Props["intensity"]>, string> = {
  light:
    "bg-[linear-gradient(to_bottom,rgba(5,29,20,0.30),rgba(5,29,20,0.78))]",
  default:
    "bg-[linear-gradient(to_bottom,rgba(5,29,20,0.55),rgba(5,29,20,0.92))]",
  heavy:
    "bg-[linear-gradient(to_bottom,rgba(5,29,20,0.72),rgba(5,29,20,0.96))]",
};

export default function HeroBackground({
  src,
  alt = "",
  intensity = "default",
}: Props) {
  return (
    <div className="absolute inset-0 -z-10">
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        decoding="async"
      />
      <div className={`absolute inset-0 ${overlayByIntensity[intensity]}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(89,165,127,0.20),transparent_55%)] mix-blend-screen" />
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
