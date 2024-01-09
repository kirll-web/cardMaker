import ReactDOM from "react-dom/client";
import App from "./components/app/App.tsx";
import "./index.css";
import "../resource/fonts/PlayfairDisplay-Italic.ttf";
import "../resource/fonts/PlayfairDisplay-Regular.ttf";
import "../resource/fonts/PlayfairDisplay-SemiBold.ttf";
import "../resource/fonts/PlayfairDisplay-SemiBoldItalic.ttf";
import "../resource/fonts/Roboto-Bold.ttf";
import "../resource/fonts/Roboto-Regular.ttf";
import "../resource/fonts/Roboto-Regular.ttf";
import "../resource/fonts/RobotoSlab-SemiBold.ttf";
import "../resource/fonts/YanoneKaffeesatz-Regular.ttf";
import "../resource/fonts/YanoneKaffeesatz-SemiBold.ttf";

import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </Provider>
);
