// Molécula: fórmula de la estructura en piezas de colores
function FormulaChips({ formula }) {
  const pieces = formula.split('|').map((piece) => {
    const idx = piece.indexOf(':');
    return { role: piece.slice(0, idx), text: piece.slice(idx + 1) };
  });

  return (
    <div className="formula" aria-label="Fórmula">
      {pieces.map((piece, i) => (
        <span key={i} className="formula__item">
          {i > 0 && piece.role !== 'p' && pieces[i - 1].role !== 'p' && (
            <span className="formula__plus" aria-hidden="true">+</span>
          )}
          {piece.role === 'p' ? (
            <span className="formula__plain">{piece.text}</span>
          ) : (
            <span className={`formula__chip role role--${piece.role}`}>{piece.text}</span>
          )}
        </span>
      ))}
    </div>
  );
}

export default FormulaChips;
