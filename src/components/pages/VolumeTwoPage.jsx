import PageHeader from '../organism/PageHeader';
import Icon from '../atoms/Icon';

function VolumeTwoPage() {
  return (
    <main className="page page--volume">
      <PageHeader title="Commonly Used Expressions" highlight="Vol 2" />
      <div className="coming-soon">
        <Icon name="clock" size={48} />
        <p>Próximamente</p>
      </div>
    </main>
  );
}

export default VolumeTwoPage;
