/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import './index.css';
import App from './App';
import { app } from './cmd/appCmd';
import { addCommand } from './cmd/Command';
addCommand(app)

render(() => {
    return (
        <Router>
            <App/>
        </Router>
    )
},document.getElementById("root") as HTMLElement)
