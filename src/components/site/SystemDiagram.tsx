/**
 * Abstract representation of connected business systems.
 * Decorative: hidden from assistive tech, described by adjacent copy.
 */
export function SystemDiagram() {
  const nodes = [
    { x: 60, y: 70, label: "Enquiry" },
    { x: 60, y: 200, label: "Data" },
    { x: 60, y: 330, label: "Tools" },
    { x: 250, y: 200, label: "Future212 Layer" },
    { x: 440, y: 90, label: "CRM" },
    { x: 440, y: 200, label: "Team" },
    { x: 440, y: 310, label: "Reports" },
  ];

  const edges = [
    [0, 3],
    [1, 3],
    [2, 3],
    [3, 4],
    [3, 5],
    [3, 6],
  ];

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-10 rounded-full bg-gold/10 blur-3xl" />
      <svg
        viewBox="0 0 520 400"
        role="presentation"
        aria-hidden="true"
        className="relative w-full"
      >
        <defs>
          <linearGradient id="f212-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.63 0.11 76)" stopOpacity="0.25" />
            <stop offset="50%" stopColor="oklch(0.88 0.075 88)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.63 0.11 76)" stopOpacity="0.25" />
          </linearGradient>
          <radialGradient id="f212-core">
            <stop offset="0%" stopColor="oklch(0.88 0.075 88)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="oklch(0.88 0.075 88)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g opacity="0.5">
          {[...Array(6)].map((_, i) => (
            <line
              key={`h${i}`}
              x1="0"
              x2="520"
              y1={40 + i * 64}
              y2={40 + i * 64}
              stroke="oklch(0.98 0.01 85 / 6%)"
            />
          ))}
        </g>

        <circle cx="250" cy="200" r="120" fill="url(#f212-core)" />

        {edges.map(([a, b], i) => {
          const from = nodes[a];
          const to = nodes[b];
          const mid = (from.x + to.x) / 2;
          const d = `M ${from.x} ${from.y} C ${mid} ${from.y}, ${mid} ${to.y}, ${to.x} ${to.y}`;
          return (
            <g key={i}>
              <path d={d} fill="none" stroke="url(#f212-line)" strokeWidth="1" />
              <circle r="3" fill="oklch(0.88 0.075 88)">
                <animateMotion dur={`${4 + i * 0.7}s`} repeatCount="indefinite" path={d} />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur={`${4 + i * 0.7}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}

        {nodes.map((n, i) => {
          const core = i === 3;
          return (
            <g key={n.label}>
              <rect
                x={n.x - (core ? 86 : 54)}
                y={n.y - 18}
                width={core ? 172 : 108}
                height={36}
                rx="3"
                fill="oklch(0.2 0.055 264)"
                stroke={core ? "oklch(0.79 0.115 82 / 70%)" : "oklch(0.98 0.01 85 / 14%)"}
              />
              <text
                x={n.x}
                y={n.y + 4}
                textAnchor="middle"
                fontSize={core ? "13" : "11"}
                letterSpacing="0.08em"
                fill={core ? "oklch(0.88 0.075 88)" : "oklch(0.85 0.02 262)"}
                fontFamily="Manrope, sans-serif"
              >
                {n.label.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
