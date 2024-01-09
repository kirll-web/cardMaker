import { useEffect } from "react";
import Menu from "../menu/menu";
import Page from "../page/page";
import MenuText from "../menuText/menuText";
import { useAppSelector } from "../../redux/hooks";
import MenuGraphicObject from "../menuGraphicObject/menuGraphicObject";
import MenuFilter from "../menuFilter/menuFilter";
import useUndoRedoListeners from "../../hooks/useUndoRedo/useUndoRedo";
import MenuSaveImage from "../menuSaveImage/menuSaveImage";
import MenuTemplates from "../menuTemplates/menuTemplates";
import styles from "./app.module.css";

const App = () => {
  const showMenuText = useAppSelector((state) => state.menuText);
  const showMenuGraphicObject = useAppSelector(
    (state) => state.menuGraphicObject
  );
  const showMenuFilter = useAppSelector((state) => state.menuFilter);
  const showMenuSaveImage = useAppSelector((state) => state.menuSaveImage);
  const showMenuTemplates = useAppSelector((state) => state.menuTemplates);
  useEffect(() => console.log(showMenuText));
  useUndoRedoListeners();

  return (
    <div className="App">
      <div className={styles.fonts}>
        <div className={styles.fontYanoneKaffeesatz}>a</div>
        <div className={styles.fontRobotoSlab}>a</div>
        <div className={styles.fontPlayfairDisplay}>a</div>
        <div className={styles.fontRoboto}>a</div>
      </div>
      <Page />
      <Menu />
      {showMenuText ? <MenuText styles={styles} /> : null}
      {showMenuGraphicObject ? <MenuGraphicObject styles={styles} /> : null}
      {showMenuFilter ? <MenuFilter styles={styles} /> : null}
      {showMenuSaveImage.show ? <MenuSaveImage styles={styles} /> : null}
      {showMenuTemplates ? <MenuTemplates styles={styles} /> : null}
    </div>
  );
};

export default App;
