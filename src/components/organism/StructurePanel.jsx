// Organismo: cómo se estructura una oración con la expresión
import Icon from '../atoms/Icon';
import AudioControls from '../molecules/AudioControls';
import ColoredSentence, { plainSentence } from '../molecules/ColoredSentence';
import FormulaChips from '../molecules/FormulaChips';
import RoleLegend from '../molecules/RoleLegend';
import { STRUCTURE_TYPES } from '../../assets/data/structureVol1';

function StructurePanel({ data }) {
  const { structure } = data;
  if (!structure) return null;
  const type = STRUCTURE_TYPES[structure.type];

  return (
    <div className="structure">
      <div className="structure__type">
        <span className={`structure__type-badge structure__type-badge--${structure.type}`}>
          <Icon name="layers" size={15} />
          {type.label}
        </span>
        <p className="structure__type-desc">{type.desc}</p>
      </div>

      <section>
        <h4 className="structure__label">Fórmula</h4>
        <FormulaChips formula={structure.formula} />
      </section>

      <section className="structure__tip">
        <Icon name="lightbulb" size={16} />
        <p>{structure.tip}</p>
      </section>

      <section className="structure__example">
        <h4 className="structure__label">Ejemplo nuevo</h4>
        <ColoredSentence text={structure.example} />
        <p className="structure__translation">{structure.es}</p>
        <RoleLegend />
      </section>

      <div className="structure__audio">
        <AudioControls text={data.speak} label={data.expression} title="Expresión" compact />
        <AudioControls text={plainSentence(structure.example)} label="la oración" title="Oración" compact />
      </div>
    </div>
  );
}

export default StructurePanel;
