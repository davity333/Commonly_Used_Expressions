import './App.css';
import AppRouter from './components/routers/AppRouter';
import { ProgressProvider } from './context/ProgressContext';

function App() {
  return (
    <ProgressProvider>
      <AppRouter />
    </ProgressProvider>
  );
}

export default App;
