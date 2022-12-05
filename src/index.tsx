import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from './Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <StateProvider>
      <App />
    </StateProvider>
  </BrowserRouter>,
);
