/**
 * Abstract "network" illustration for the NWCDN sections: a hub (CRH, Michigan)
 * linked to peer defense firms in other jurisdictions. Decorative only.
 */
const nodes: [number, number][] = [
  [70, 120], [150, 60], [255, 95], [95, 230], [190, 300], [300, 250],
  [415, 70], [480, 185], [440, 315], [330, 380], [120, 360], [520, 300],
];
const hub: [number, number] = [330, 175];

export default function NetworkGraphic({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 580 440" className={className} role="img" aria-label="Illustration of a national network of defense firms connected to Charfoos Reiter Hébert in Michigan">
      <g stroke="currentColor" strokeOpacity="0.22" strokeWidth="1">
        {nodes.map(([x, y], i) => (
          <line key={`h${i}`} x1={hub[0]} y1={hub[1]} x2={x} y2={y} />
        ))}
        {nodes.map(([x, y], i) => {
          const [nx, ny] = nodes[(i + 1) % nodes.length];
          return <line key={`n${i}`} x1={x} y1={y} x2={nx} y2={ny} strokeDasharray="3 5" />;
        })}
      </g>
      {nodes.map(([x, y], i) => (
        <g key={`c${i}`}>
          <circle cx={x} cy={y} r="11" fill="currentColor" fillOpacity="0.08" />
          <circle cx={x} cy={y} r="4.5" fill="currentColor" fillOpacity="0.7" />
        </g>
      ))}
      <circle cx={hub[0]} cy={hub[1]} r="58" fill="none" stroke="currentColor" strokeOpacity="0.25" />
      <circle cx={hub[0]} cy={hub[1]} r="40" fill="#ffffff" />
      <text x={hub[0]} y={hub[1] - 2} textAnchor="middle" fontFamily="var(--font-plex-serif), Georgia, serif" fontSize="20" fontWeight="600" fill="#013882">CRH</text>
      <text x={hub[0]} y={hub[1] + 16} textAnchor="middle" fontFamily="var(--font-plex-sans), sans-serif" fontSize="9" letterSpacing="1.6" fill="#013882">MICHIGAN</text>
    </svg>
  );
}
