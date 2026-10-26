// Átomo: botón genérico
// (en React 19 "ref" se pasa como prop normal)
function Button({ children, variant = 'primary', className = '', ref, ...props }) {
  return (
    <button ref={ref} type="button" className={`btn btn--${variant} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
