export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0select-none"
    >
      <div className="absolute inset-0 bg-black" />

      <div
        className="
        absolute
        top-0-left-8 h-60 w-60 blur-[74px]
        sm:h-55-[220px] sm:blur-[80px]
        md:-top-24 md:-left-24 md:h-75 md:w-75 md:blur-[100px]
        rounded-full bg-blue-400/8
      "
      />

      <div
        className="
        absolute
        bottom-4 left-8 h-40 w-40 blur-[98px]
        sm:top-64 sm:left-20 sm:h-50 sm:w-50 
        md:top-80 md:left-36 md:h-85 md:w-85 
        rounded-full bg-blue-400/8 md:bg-blue-400/4
      "
      />

      <div
        className="
        absolute
        bottom-84 -right-4 h-35 w-35 blur-[74px]
        sm:h-80 sm:w-[320px] sm:blur-[80px]
        md:-right-32 md:h-100 md:w-100 md:blur-[100px]
        rounded-full bg-blue-400/6
      "
      />

      <div className="absolute inset-0 mix-blend-soft-light opacity-20">
        <svg width="100%" height="100%">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </div>
  );
}
