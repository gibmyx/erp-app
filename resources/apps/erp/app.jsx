import './../shared/tools/bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap";

import ReactDOM from 'react-dom';
import {StrictMode} from 'react';
import {Provider} from 'react-redux';
import {store} from "./store";
import {AppRouter} from "./routes/AppRouter";


ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    </StrictMode>,
    document.getElementById('app')
);
