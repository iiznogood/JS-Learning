import App from './src/components/App.js';

(async () => {
  const app = await App();

  const root = document.getElementById ('root');

  root.append(app);
}) ();