
import "./App.css";
import Router from "./Router";
import { RouterProvider } from "react-router-dom";
import Store from "./store/store";
function App() {

  // const [count, setCount] = useState(0);
  return (
    <div className="pagebg">
      <div className="section">
        <Store>
        <RouterProvider router={Router}/>
        </Store>
      </div>
    </div>
  );
}

export default App;
