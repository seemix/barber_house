import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import './i18n.js';

import { apolloClient } from './assets/index.js';
import App from './App.jsx';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <ApolloProvider client={apolloClient}>
        <App/>
    </ApolloProvider>,
)
