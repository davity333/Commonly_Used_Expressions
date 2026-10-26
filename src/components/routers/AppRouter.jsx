// Rutas de la app. Se usa createBrowserRouter para poder confirmar la salida de los juegos.
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import RootLayout from '../organism/RootLayout';
import HomePage from '../pages/HomePage';
import VolumeOnePage from '../pages/VolumeOnePage';
import VolumeTwoPage from '../pages/VolumeTwoPage';
import GamesPage from '../pages/GamesPage';
import RoulettePage from '../pages/RoulettePage';
import QuizPage from '../pages/QuizPage';
import ListenPage from '../pages/ListenPage';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/volumen-1', element: <VolumeOnePage /> },
      { path: '/volumen-2', element: <VolumeTwoPage /> },
      { path: '/juegos', element: <GamesPage /> },
      { path: '/juegos/ruleta', element: <RoulettePage /> },
      { path: '/juegos/quiz', element: <QuizPage /> },
      { path: '/juegos/escucha', element: <ListenPage /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
