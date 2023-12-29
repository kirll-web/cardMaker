import "./App.css";
import { useState } from "react";

import {
  PageProps,
  TextBlockProps,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
  MenuText as MenuTextType,
} from "../models/models";
import { doc } from "../models/data";
import ButtonDownload from "../buttonDownload/buttonDownload";
import Menu from "../menu/menu";
import Page from "../page/page";
import LoadInput from "../loadInput/loadInput";
import MenuText from "../menuText/menuText";

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

  const [stateMenuText, setStateMenuText] = useState<MenuTextType>({
    color: doc.defaultMenuText.color,
    font: doc.defaultMenuText.font,
    bold: doc.defaultMenuText.bold,
    underline: doc.defaultMenuText.underline,
    italic: doc.defaultMenuText.italic,
  });

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
      <MenuText
        dataMenuText={doc.dataMenuText}
        stateMenuText={stateMenuText}
        setStateMenuText={setStateMenuText}
        setNewElement={setNewElement}
      />
    </div>
  );
};

export default App;
