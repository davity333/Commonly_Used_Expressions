// Átomo: figuras decorativas pequeñas
const shapes = {
  circle: <circle cx="12" cy="12" r="10" />,
  ring: <circle cx="12" cy="12" r="9" fill="none" strokeWidth="3" />,
  star: <path d="M12 2l2.6 6.9L22 9.3l-5.6 4.6 1.9 7.1L12 17l-6.3 4 1.9-7.1L2 9.3l7.4-.4z" />,
  triangle: <path d="M12 3l9.5 17h-19z" />,
  plus: <path d="M10 2h4v8h8v4h-8v8h-4v-8H2v-4h8z" />,
  squiggle: (
    <path d="M2 14c2.5-5 5-5 7.5 0s5 5 7.5 0 3.5-4 5-2" fill="none" strokeWidth="3" strokeLinecap="round" />
  ),
};

function Shape({ type = 'circle', color = 'var(--green-300)', size = 24, style = {}, className = '' }) {
  const isStroke = type === 'ring' || type === 'squiggle';
  return (
    <svg
      className={`shape ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={style}
      fill={isStroke ? 'none' : color}
      stroke={isStroke ? color : 'none'}
      aria-hidden="true"
    >
      {shapes[type]}
    </svg>
  );
}

export default Shape;
