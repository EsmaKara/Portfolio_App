import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Routing from './navigation/Routing.tsx';
import { Provider } from 'react-redux';
import { store } from '@contexts/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Routing />
    </Provider>
  </StrictMode>,
);
