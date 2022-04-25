import React, {useState} from 'react';

import HomeScreen from './src/screens/HomeScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';

const App = () => {
  const [isDone, setIsDone] = useState(false);

  return isDone ? (
    <HomeScreen />
  ) : (
    <OnboardingScreen onDone={() => setIsDone(true)} />
  );
};

export default App;
