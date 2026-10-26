# Commonly Used Expressions

Creado por David Rey.

## Cómo correrlo
```bash
npm install
npm run dev
```
Abre la URL que aparece (normalmente http://localhost:5173).

## Estructura (diseño atómico)
```
src/
├── assets/data/
│   ├── expressionsVol1.js     ← las 55 expresiones (definición y 5 ejemplos)
│   ├── pronunciationVol1.js   ← cómo suena cada una
│   ├── structureVol1.js       ← estructura gramatical + ejemplo coloreado
│   └── verbFormsVol1.js       ← tiempos verbales con traducción y pronunciación
├── context/ProgressContext.jsx  ← expresiones dominadas y récords (localStorage)
├── hooks/
│   ├── useSpeech.js           ← audio con la voz del navegador
│   └── useExitGuard.js        ← confirma antes de salir de un juego
├── utils/random.js            ← azar y opciones de los juegos
├── components/
│   ├── atoms/      Icon, Button, Badge, Heading, Shape, ProgressBar
│   ├── molecules/  VolumeButton, ExpressionHeader, Definition, PanelToggle, Collapse,
│   │               ExampleItem, Pronunciation, AudioControls, ColoredSentence,
│   │               FormulaChips, RoleLegend, StatPill, OptionButton, GameCard, TenseRow
│   ├── organism/   MainMenu, PageHeader, ExpressionCard, ExpressionList, Decorations,
│   │               RootLayout, PronunciationGuide, StructurePanel, ConfirmModal,
│   │               GameShell, GameResult, RouletteWheel, RouletteChallenge, Modal, VerbFormsModal,
│   │               RouletteGame, QuizGame, ListenGame
│   ├── pages/      HomePage, VolumeOnePage, VolumeTwoPage, GamesPage,
│   │               RoulettePage, QuizPage, ListenPage
│   ├── routers/    AppRouter
│   └── styles/     atoms.css, molecules.css, organisms.css, pages.css
├── App.css / App.jsx / index.css / main.jsx
```
