import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { StateProvider } from './Context/Context';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <StateProvider>
      <App />
    </StateProvider>
  </BrowserRouter>,
);
