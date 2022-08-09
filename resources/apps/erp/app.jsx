import './../shared/tools/bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap";

import {StrictMode, Suspense} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AuthRoutes} from "./modules/auth/router/AuthRoutes";

ReactDOM.render(
    <StrictMode>
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/auth/*" element={<AuthRoutes/>}></Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    </StrictMode>,
    document.getElementById('app')
);
