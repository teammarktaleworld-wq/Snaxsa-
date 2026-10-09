"use client";

interface PouchIllustrationProps {
  colorFrom: string;
  colorTo: string;
  seed?: number;
}

/** Lightweight SVG standee pouch, matching the reference mockup's packet style. */
export default function PouchIllustration({
  colorFrom,
  colorTo,
  seed = 0,
}: PouchIllustrationProps) {
  const gradientId = `pouchGrad-${colorFrom.replace("#", "")}-${seed}`;
  const dots = Array.from({ length: 10 }).map((_, i) => ({
    cx: 30 + ((i * 37 + seed * 13) % 140),
    cy: 40 + ((i * 23 + seed * 7) % 40),
    r: 5 + ((i + seed) % 3),
  }));

  return (
    <svg viewBox="0 0 200 240" className="w-full h-full drop-shadow-xl">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colorFrom} />
          <stop offset="100%" stopColor={colorTo} />
        </linearGradient>
      </defs>

      {/* pouch body */}
      <path
        d="M30 60 Q30 40 45 35 L60 20 Q100 5 140 20 L155 35 Q170 40 170 60 L172 200 Q172 220 152 220 L48 220 Q28 220 28 200 Z"
        fill={`url(#${gradientId})`}
      />
      {/* fold top */}
      <path
        d="M45 35 L60 20 Q100 5 140 20 L155 35 Q100 48 45 35 Z"
        fill="white"
        opacity="0.18"
      />
      {/* seal strip */}
      <rect x="28" y="52" width="144" height="14" fill="white" opacity="0.85" />

      {/* makhana dots peeking at top */}
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill="#FBEBD2" opacity="0.9" />
      ))}

      {/* front label plate */}
      <rect x="42" y="95" width="116" height="95" rx="14" fill="white" opacity="0.94" />
    </svg>
  );
}
