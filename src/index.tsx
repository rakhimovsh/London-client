import {Suspense, StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import App from './App';
import Loader from "./components/Loader";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <App />
            </Suspense>
        </BrowserRouter>
    </StrictMode>
);

