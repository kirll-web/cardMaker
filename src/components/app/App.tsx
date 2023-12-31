import "./App.css";
import { SetStateAction, useState, Dispatch } from "react";

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
import { DispatchProp, useDispatch, useSelector } from "react-redux";

// import { Page } from "../models/modelsOld";

const App = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const showMenuText = useSelector((state) => state.showMenuText);

  return (
    <div className="App">
      <Page />
      <ButtonDownload {...page} />
      <LoadInput />
      <Menu />
      {showMenuText ? (
        <MenuText
          dataMenuText={doc.dataMenuText}
          defaultMenuText={doc.defaultMenuText}
        />
      ) : null}
    </div>
  );
};

export default App;

// const [page, setPage] = useState<PageProps>({
//   id: doc.page.id,
//   width: doc.page.width,
//   height: doc.page.height,
//   yPos: doc.page.yPos,
//   xPos: doc.page.xPos,
//   elements: [...doc.page.elements],
// });

// const [newElement, setNewElement] = useState<
//   | TextBlockProps
//   | ImageBlockProps
//   | CircleProps
//   | RectangleProps
//   | FilterProps
// >(null!);

// const [showMenuText, setShowMenuText] = useState<boolean>(false);

// const addElement = (
//   elem:
//     | TextBlockProps
//     | ImageBlockProps
//     | CircleProps
//     | RectangleProps
//     | FilterProps
// ) => {
//   setNewElement(elem);
// };
