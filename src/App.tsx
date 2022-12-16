import Box from '@mui/material/Box';
import { PanelContainer } from './components/PanelContainer';
import { EventPanel } from './components/Event/Content/EventPanel';
import { AgentPanel } from './components/Agent/Content/AgentPanel';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './ThemeProviderConfig';
import './css/App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '10vh', gap: 5 }}>
        <PanelContainer>
          <AgentPanel />
        </PanelContainer>

        <PanelContainer>
          <EventPanel />
        </PanelContainer>
      </Box>
    </ThemeProvider>
  );
}

export default App;
