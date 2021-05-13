import App from './App';
import HomeController from './routes/home/home.routes';


const app = new App(
  [
    new HomeController()
  ]
);

app.listen();
