import { default as App } from './index.jsx';
import { createRoot } from 'react-dom/client';

//window.history.scrollRestoration = "manual";
document.addEventListener( 'DOMContentLoaded', () => {
    const root= createRoot(document.getElementById("options--website--general-options"));
    root.render(<App />);
});
