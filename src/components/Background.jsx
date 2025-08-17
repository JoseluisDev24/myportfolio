export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-0 select-none"
    >
      <div className="absolute inset-0 bg-black" />

      <div
        className="
        absolute
        -top-0 -left-8 h-[240px] w-[240px] blur-[74px]
        sm:h-[220px] sm:w-[220px] sm:blur-[80px]
        md:-top-24 md:-left-24 md:h-[300px] md:w-[300px] md:blur-[100px]
        rounded-full bg-blue-400/8
      "
      />

      {/* Blob media (arriba-izquierda, sutil) */}
      <div
        className="
        absolute
        bottom-4 left-8 h-[160px] w-[160px] blur-[98px]
        sm:top-64 sm:left-20 sm:h-[200px] sm:w-[200px] 
        md:top-80 md:left-36 md:h-[340px] md:w-[340px] 
        rounded-full bg-blue-400/8 md:bg-blue-400/4
      "
      />

      {/* Blob inferior derecha */}
      <div
        className="
        absolute
        bottom-84 -right-4 h-[140px] w-[140px] blur-[74px]
        sm:h-[320px] sm:w-[320px] sm:blur-[80px]
        md:-right-32 md:h-[400px] md:w-[400px] md:blur-[100px]
        rounded-full bg-blue-400/6
      "
      />

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
