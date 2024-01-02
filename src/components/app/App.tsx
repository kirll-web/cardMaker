import "./App.css";
import { useEffect } from "react";

import { doc } from "../models/data";
import ButtonDownload from "../buttonDownload/buttonDownload";
import Menu from "../menu/menu";
import Page from "../page/page";
import LoadInput from "../loadInput/loadInput";
import MenuText from "../menuText/menuText";
import { useAppSelector } from "../../redux/hooks";
import MenuGraphicObject from "../menuGraphicObject/mienuGraphicObject";

const App = () => {
  const elements = useAppSelector((state) => state.elementsPage);
  const showMenuText = useAppSelector((state) => state.menuText);
  const showMenuGraphicObject = useAppSelector(
    (state) => state.menuGraphicObject
  );
  useEffect(() => console.log(showMenuText));
  return (
    <div className="App">
      <Page />
      <ButtonDownload {...elements} />
      <LoadInput />
      <Menu />
      {showMenuText ? <MenuText /> : null}
      {showMenuGraphicObject ? <MenuGraphicObject /> : null}
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
