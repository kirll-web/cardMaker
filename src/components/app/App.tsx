import "./App.css";
import Canvas from "../canvas/canvas";
import { PageProps } from "../models/models";

const App = () => {
  const page: PageProps = {
    id: "page1",
    width: 800,
    height: 600,
    yPos: 50,
    xPos: 50,
    elements: [
      {
        type: "text",
        id: "10",
        width: 100,
        height: 20,
        xPos: 20,
        yPos: 0,
        fontSize: 20,
        fontFamily: "Roboto",
        color: "#ffffff",
        bold: false,
        value: ["asddas", "asdasd", "asdasd"],
      },
      {
        type: "rectangle",
        id: "rect1",
        backgroundImage: "",
        backgroundColor: "red",
        width: 20,
        height: 20,
        xPos: 70,
        yPos: 70,
      },
      {
        type: "circle",
        id: "circle2",
        backgroundImage: "",
        backgroundColor: "red",
        width: 50,
        height: 50,
        xPos: 200,
        yPos: 200,
        borderRadius: 50,
      },
      {
        type: "circle",
        id: "circle2",
        backgroundImage: "",
        backgroundColor: "green",
        width: 50,
        height: 50,
        xPos: 140,
        yPos: 140,
        borderRadius: 50,
      },
      {
        id: "img1",
        type: "image",
        width: 400,
        height: 200,
        xPos: 300,
        yPos: 100,
        url: "https://w.forfun.com/fetch/c5/c514ddd3da0d86f1348f4b10560f7f35.jpeg",
        allowedFormat: ["JPEG", "PNG"],
      },
      {
        id: "filter1",
        type: "filter",
        width: 800,
        height: 600,
        xPos: 0,
        yPos: 0,
        opacity: 0.5,
        colorOfFilter: "#f901cd",
      },
    ],
  };

  return (
    <div className="App">
      <Canvas {...page} />
    </div>
  );
};

export default App;
