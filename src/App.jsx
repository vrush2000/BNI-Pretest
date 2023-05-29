// import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Provider} from 'react-redux';
import router from './routers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/light-bootstrap-dashboard.css'
// import './assets/css/style.css'
import store from "./stores";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider  router={router}/>
    </Provider>
  );
}

export default App;
