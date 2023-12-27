import "./App.css";
import Page from "../page/page";
import {
  PageProps,
  TextBlockProps,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
} from "../models/models";
import { doc } from "../models/data";
import ButtonDownload from "../buttonDownload/buttonDownload";
import Menu from "../menu/menu";
import LoadInput from "../loadInput/loadInput";
import { useState } from "react";
// import { Page } from "../models/modelsOld";

const App = () => {
  const [page, setPage] = useState<PageProps>({
    id: doc.page.id,
    width: doc.page.width,
    height: doc.page.height,
    yPos: doc.page.yPos,
    xPos: doc.page.xPos,
    elements: [...doc.page.elements],
  });

  const [newElement, setNewElement] = useState<
    | TextBlockProps
    | ImageBlockProps
    | CircleProps
    | RectangleProps
    | FilterProps
  >(null!);

  const addElement = (
    elem:
      | TextBlockProps
      | ImageBlockProps
      | CircleProps
      | RectangleProps
      | FilterProps
  ) => {
    setNewElement(elem);
  };

  return (
    <div className="App">
      <Page
        page={page}
        newElement={newElement}
        setNewElement={setNewElement}
        setPage={setPage}
      />
      <ButtonDownload {...page} />
      <LoadInput setPage={setPage} />
      <Menu addElement={addElement} />
    </div>
  );
};

export default App;
