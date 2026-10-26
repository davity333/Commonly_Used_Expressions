// Molécula: un ejemplo con su traducción
function ExampleItem({ index, en, es }) {
  return (
    <li className="example-item">
      <span className="example-item__num">{index}</span>
      <div>
        <p className="example-item__en">{en}</p>
        <p className="example-item__es">{es}</p>
      </div>
    </li>
  );
}

export default ExampleItem;
