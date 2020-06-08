import ReactDOM from "react-dom";
import App from './app.js'
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
    (<CookiesProvider>
        <App/>
    </CookiesProvider>)
    ,document.getElementById('root'));