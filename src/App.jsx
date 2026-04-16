import HomePage from './pages/HomePage';
import { useTheme } from './hooks/useTheme';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return <HomePage theme={theme} onToggleTheme={toggleTheme} />;
};

export default App;
