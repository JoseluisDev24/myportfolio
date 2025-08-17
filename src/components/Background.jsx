export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-0 select-none"
    >
      <div className="absolute inset-0 bg-black" />

      {/* Blob superior izquierdo (más chica en mobile, grande en desktop) */}
      <div
        className="
        absolute
        -top-20 -left-20 h-[160px] w-[160px] blur-[64px]
        sm:h-[220px] sm:w-[220px] sm:blur-[80px]
        md:-top-24 md:-left-24 md:h-[300px] md:w-[300px] md:blur-[100px]
        rounded-full bg-blue-400/10
      "
      />

      {/* Blob media (arriba-izquierda, sutil) */}
      <div
        className="
        absolute
        top-72 left-8 h-[160px] w-[160px] blur-[78px]
        sm:top-64 sm:left-20 sm:h-[150px] sm:w-[150px] sm:blur-[64px]
        md:top-80 md:left-36 md:h-[240px] md:w-[200px] md:blur-[80px]
        rounded-full bg-blue-400/10
      "
      />

      {/* Blob inferior derecha */}
      {/* <div
        className="
        absolute
        -bottom-14 -right-24 h-[240px] w-[240px] blur-[64px]
        sm:h-[320px] sm:w-[320px] sm:blur-[80px]
        md:-right-32 md:h-[400px] md:w-[400px] md:blur-[100px]
        rounded-full bg-blue-400/10
      "
      /> */}

      {/* Textura (ruido) */}
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
