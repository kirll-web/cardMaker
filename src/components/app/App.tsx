import "./App.css";
import { useEffect } from "react";

import ButtonDownload from "../buttonDownload/buttonDownload";
import Menu from "../menu/menu";
import Page from "../page/page";
import LoadInput from "../loadInput/loadInput";
import MenuText from "../menuText/menuText";
import { useAppSelector } from "../../redux/hooks";
import MenuGraphicObject from "../menuGraphicObject/menuGraphicObject";
import MenuFilter from "../menuFilter/menuFilter";
import MenuImage from "../menuImage/menuImage";
import useUndoRedoListeners from "../../hooks/useUndoRedo/useUndoRedo";
import MenuSaveImage from "../menuSaveImage/menuSaveImage";

const App = () => {
  const showMenuText = useAppSelector((state) => state.menuText);
  const showMenuGraphicObject = useAppSelector(
    (state) => state.menuGraphicObject
  );
  const showMenuFilter = useAppSelector((state) => state.menuFilter);
  const showMenuImage = useAppSelector((state) => state.menuImage);
  const showMenuSaveImage = useAppSelector((state) => state.menuSaveImage);
  useEffect(() => console.log(showMenuText));
  useUndoRedoListeners();
  return (
    <div className="App">
      <Page />
      <ButtonDownload />
      <LoadInput />
      <Menu />
      {showMenuText ? <MenuText /> : null}
      {showMenuGraphicObject ? <MenuGraphicObject /> : null}
      {showMenuFilter ? <MenuFilter /> : null}
      {showMenuImage ? <MenuImage /> : null}
      {showMenuSaveImage.show ? <MenuSaveImage /> : null}
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
