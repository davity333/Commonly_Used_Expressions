// Átomo: barra de progreso
function ProgressBar({ value, max, label }) {
  const percent = max ? Math.round((value / max) * 100) : 0;
  return (
    <div className="progress-bar" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max} aria-label={label}>
      <span className="progress-bar__fill" style={{ width: `${percent}%` }} />
    </div>
  );
}

export default ProgressBar;
