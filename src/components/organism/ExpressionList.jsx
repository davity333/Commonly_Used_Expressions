// Organismo: cuadrícula de tarjetas
import ExpressionCard from './ExpressionCard';

function ExpressionList({ items }) {
  return (
    <div className="expression-list">
      {items.map((item) => (
        <ExpressionCard key={item.id} data={item} />
      ))}
    </div>
  );
}

export default ExpressionList;
