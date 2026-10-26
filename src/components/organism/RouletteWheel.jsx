// Organismo: rueda SVG que gira
const SIZE = 300;
const CENTER = SIZE / 2;
const RADIUS = 142;
const COLORS = ['#bff7cf', '#b9ddff', '#95eeb0', '#dceeff', '#dcfce6', '#8cc6f7'];

function polar(angleDeg, radius) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return [CENTER + radius * Math.cos(rad), CENTER + radius * Math.sin(rad)];
}

function slicePath(start, end) {
  const [x1, y1] = polar(start, RADIUS);
  const [x2, y2] = polar(end, RADIUS);
  const large = end - start > 180 ? 1 : 0;
  return `M${CENTER},${CENTER} L${x1},${y1} A${RADIUS},${RADIUS} 0 ${large} 1 ${x2},${y2} Z`;
}

const shorten = (text) => (text.length > 15 ? `${text.slice(0, 14)}…` : text);

function RouletteWheel({ segments, rotation, duration, spinning, disabled, onSpin }) {
  const angle = 360 / segments.length;

  return (
    <div className="wheel">
      <span className="wheel__pointer" aria-hidden="true" />
      <svg
        className="wheel__svg"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        style={{
          transform: `rotate(${rotation}deg)`,
          transitionDuration: `${duration}ms`,
        }}
        aria-hidden="true"
      >
        <circle cx={CENTER} cy={CENTER} r={RADIUS + 6} fill="#ffffff" />
        {segments.map((item, i) => {
          const start = i * angle;
          const mid = start + angle / 2;
          return (
            <g key={`${item.id}-${i}`}>
              <path d={slicePath(start, start + angle)} fill={COLORS[i % COLORS.length]} stroke="#ffffff" strokeWidth="2" />
              <g transform={`rotate(${mid} ${CENTER} ${CENTER})`}>
                <text
                  x={CENTER}
                  y={CENTER - 82}
                  transform={`rotate(${mid > 180 ? 90 : -90} ${CENTER} ${CENTER - 82})`}
                  className="wheel__label"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {shorten(item.expression)}
                </text>
              </g>
            </g>
          );
        })}
      </svg>
      <button
        type="button"
        className={`wheel__spin ${spinning ? 'is-spinning' : ''}`}
        onClick={onSpin}
        disabled={disabled}
        aria-label="Girar la ruleta"
      >
        {spinning ? '...' : 'GIRAR'}
      </button>
    </div>
  );
}

export default RouletteWheel;
