// Organismo: tarjeta de una expresión
import { useCallback, useState } from 'react';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import ExpressionHeader from '../molecules/ExpressionHeader';
import Definition from '../molecules/Definition';
import Pronunciation from '../molecules/Pronunciation';
import AudioControls from '../molecules/AudioControls';
import PanelToggle from '../molecules/PanelToggle';
import Collapse from '../molecules/Collapse';
import ExampleItem from '../molecules/ExampleItem';
import StructureModal from './StructureModal';
import VerbFormsModal from './VerbFormsModal';
import { useProgress } from '../../context/ProgressContext';

function ExpressionCard({ data }) {
  const [showExamples, setShowExamples] = useState(false);
  const [showStructure, setShowStructure] = useState(false);
  const [showTenses, setShowTenses] = useState(false);
  const { isKnown } = useProgress();
  const examplesId = `examples-${data.id}`;
  const known = isKnown(data.id);
  const closeStructure = useCallback(() => setShowStructure(false), []);
  const closeTenses = useCallback(() => setShowTenses(false), []);

  return (
    <article className={`expression-card ${showExamples ? 'is-open' : ''}`}>
      {known && (
        <span className="expression-card__known" title="Marcada como dominada en la Ruleta">
          <Icon name="check" size={14} strokeWidth={3} />
          Dominada
        </span>
      )}

      <ExpressionHeader number={data.id} expression={data.expression} translation={data.translation} />

      <div className="expression-card__audio">
        <Pronunciation text={data.pronunciation} />
        <AudioControls text={data.speak} label={data.expression} />
      </div>

      <Definition text={data.definition} textEs={data.definitionEs} />

      {/* Estructura y Tiempos verbales: abren modal */}
      <div className="expression-card__toggles">
        <Button variant="structure" onClick={() => setShowStructure(true)} aria-haspopup="dialog">
          <Icon name="layers" size={17} />
          Estructura
        </Button>
        <Button variant="tenses" onClick={() => setShowTenses(true)} aria-haspopup="dialog">
          <Icon name="clock" size={17} />
          Tiempos verbales
        </Button>
      </div>

      {/* Ejemplos: se despliegan hacia abajo */}
      <PanelToggle
        isOpen={showExamples}
        onClick={() => setShowExamples(!showExamples)}
        controlsId={examplesId}
        label="Mostrar ejemplos"
        openLabel="Ocultar ejemplos"
      />

      <Collapse id={examplesId} isOpen={showExamples}>
        <ol className="example-list">
          {data.examples.map((ex, i) => (
            <ExampleItem key={i} index={i + 1} en={ex.en} es={ex.es} />
          ))}
        </ol>
      </Collapse>

      {showStructure && <StructureModal open onClose={closeStructure} data={data} />}
      {showTenses && <VerbFormsModal open onClose={closeTenses} data={data} />}
    </article>
  );
}

export default ExpressionCard;