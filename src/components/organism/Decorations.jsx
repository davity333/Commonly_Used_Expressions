// Organismo: figuras flotantes de fondo
import Shape from '../atoms/Shape';

const items = [
  { type: 'circle', color: 'var(--green-300)', size: 18, top: '8%', left: '6%', delay: '0s' },
  { type: 'star', color: 'var(--blue-300)', size: 26, top: '14%', left: '88%', delay: '1s' },
  { type: 'ring', color: 'var(--green-400)', size: 34, top: '32%', left: '93%', delay: '2s' },
  { type: 'triangle', color: 'var(--blue-200)', size: 22, top: '42%', left: '3%', delay: '.5s' },
  { type: 'plus', color: 'var(--green-300)', size: 18, top: '62%', left: '90%', delay: '1.5s' },
  { type: 'squiggle', color: 'var(--blue-300)', size: 44, top: '74%', left: '5%', delay: '2.5s' },
  { type: 'star', color: 'var(--green-400)', size: 16, top: '86%', left: '80%', delay: '.8s' },
  { type: 'circle', color: 'var(--blue-200)', size: 12, top: '22%', left: '20%', delay: '3s' },
  { type: 'ring', color: 'var(--blue-300)', size: 22, top: '90%', left: '30%', delay: '1.2s' },
];

function Decorations() {
  return (
    <div className="decorations" aria-hidden="true">
      {items.map((item, i) => (
        <Shape
          key={i}
          type={item.type}
          color={item.color}
          size={item.size}
          className="decorations__shape"
          style={{ top: item.top, left: item.left, animationDelay: item.delay }}
        />
      ))}
    </div>
  );
}

export default Decorations;
