import "./App.css";
import ProductLists from "./Pages/ProductLists.js";
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <ProductLists />
    </Provider>
  );
}

export default App