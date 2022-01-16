import App from './src/App';

const root = document.getElementById('root');

App().then((html) => root.append(html));
