import {Suspense, StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'

import App from './App';
import Loader from "./components/Loader";
import {setupStore} from "./redux/store";

const store = setupStore()

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Suspense fallback={<Loader />}>
                    <App />
                </Suspense>
            </BrowserRouter>
        </Provider>
    </StrictMode>
);

