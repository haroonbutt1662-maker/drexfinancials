interface SectionDividerProps {
  from: string;
  layers: [string, string, string, string];
  height?: number;
  viewBoxHeight?: number;
}

export default function SectionDivider({
  from,
  layers,
  height = 32,
  viewBoxHeight = 160,
}: SectionDividerProps) {
  const h = viewBoxHeight;
  const paths = [
    `M0,${h * 0.175} C480,${h * 0.45} 960,${h * 0.45} 1440,${h * 0.175} L1440,${h} L0,${h} Z`,
    `M0,${h * 0.4375} C480,${h * 0.675} 960,${h * 0.675} 1440,${h * 0.4375} L1440,${h} L0,${h} Z`,
    `M0,${h * 0.675} C480,${h * 0.8625} 960,${h * 0.8625} 1440,${h * 0.675} L1440,${h} L0,${h} Z`,
    `M0,${h * 0.8625} C480,${h * 1.0125} 960,${h * 1.0125} 1440,${h * 0.8625} L1440,${h} L0,${h} Z`,
  ];

  return (
    <svg
      style={{ display: "block", width: "100%", height, marginTop: -1, marginBottom: -1, lineHeight: 0 }}
      viewBox={`0 0 1440 ${h}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <rect width="1440" height={h} fill={from} />
      {layers.map((fill, i) => (
        <path key={i} d={paths[i]} fill={fill} />
      ))}
    </svg>
  );
}
