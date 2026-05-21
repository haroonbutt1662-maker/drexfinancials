export default function LogoSVG({ height = 60 }: { height?: number }) {
  const aspect = 110 / 122;
  const width = height * aspect;

  return (
    <svg
      viewBox="0 0 110 122"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="DreX CFO"
    >
      {/* ── Large serif D ── */}
      <text
        x="6"
        y="82"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="88"
        fontWeight="700"
        fill="white"
        opacity="0.95"
      >
        D
      </text>

      {/* ── Ascending bar chart (inside D bowl) ── */}
      <rect x="46" y="52" width="7" height="22" rx="1.5" fill="#C9A465" />
      <rect x="57" y="40" width="7" height="34" rx="1.5" fill="#C9A465" />
      <rect x="68" y="28" width="7" height="46" rx="1.5" fill="#C9A465" />

      {/* ── Gold swoosh arc ── */}
      <path
        d="M28,8 Q75,-4 88,52"
        fill="none"
        stroke="#C9A465"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* ── DREX wordmark ── */}
      <text
        x="55"
        y="103"
        fontFamily="'Arial Black', 'Arial', sans-serif"
        fontSize="21"
        fontWeight="900"
        fill="white"
        textAnchor="middle"
        letterSpacing="2"
      >
        DREX
      </text>

      {/* ── — CFO — ── */}
      <text
        x="55"
        y="116"
        fontFamily="Arial, sans-serif"
        fontSize="9"
        fontWeight="400"
        fill="#C9A465"
        textAnchor="middle"
        letterSpacing="3"
      >
        ── CFO ──
      </text>
    </svg>
  );
}
