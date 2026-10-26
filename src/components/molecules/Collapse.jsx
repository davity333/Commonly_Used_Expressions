// Molécula: contenedor que se despliega con animación
function Collapse({ id, isOpen, children }) {
  return (
    <div id={id} className={`collapse ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen} inert={!isOpen}>
      <div className="collapse__inner">{children}</div>
    </div>
  );
}

export default Collapse;
