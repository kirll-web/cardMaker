import "./App.css";
import Canvas from "../canvas/canvas";
import { PageProps } from "../models/models";
import { doc } from "../models/models";

const App = () => {
  const page: PageProps = {
    id: doc.page.id,
    width: doc.page.width,
    height: doc.page.height,
    yPos: doc.page.yPos,
    xPos: doc.page.xPos,
    elements: [...doc.page.elements],
  };

  return (
    <div className="App">
      <Canvas {...page} />
    </div>
  );
};

export default App;
