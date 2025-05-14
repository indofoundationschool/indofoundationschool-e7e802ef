
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Ensure console is clean in production
if (process.env.NODE_ENV === 'production') {
  console.clear();
  // Overwrite console methods in production to prevent leaking sensitive information
  const noop = () => {};
  console.log = noop;
  console.error = noop;
  console.warn = noop;
  console.debug = noop;
}

// Prevent certain browser behaviors
document.addEventListener('dragstart', e => e.preventDefault());

createRoot(document.getElementById("root")!).render(<App />);
