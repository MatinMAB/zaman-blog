//React
import ReactDOM from "react-dom/client";

//Components
import App from "./App.jsx";

//CSS Styles
import "./index.css";

//React-Router-DOM
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
 <BrowserRouter>
  <App />
 </BrowserRouter>
);
