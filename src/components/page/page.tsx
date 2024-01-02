import Canvas from "../canvas/canvas";
import { Dispatch, SetStateAction } from "react";
import {
  PageProps,
  TextBlockProps,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
} from "../models/models";

import SelectionArea from "../selectionArea/selectionArea";
import { doc } from "../models/data";
import style from "./page.module.css";
import { useAppSelector } from "../../redux/hooks";

type Props = {
  page: PageProps;
  newElement:
    | TextBlockProps
    | ImageBlockProps
    | CircleProps
    | RectangleProps
    | FilterProps;
  setPage: Dispatch<SetStateAction<PageProps>>;
  setNewElement: Dispatch<
    SetStateAction<
      | TextBlockProps
      | ImageBlockProps
      | CircleProps
      | RectangleProps
      | FilterProps
    >
  >;
  setShowMenuText: Dispatch<SetStateAction<boolean>>;
};

const Page = () => {
  const newElement = useAppSelector((state) => state.newElement);
  const stylePage = {
    width: `${doc.page.width}px`,
    height: `${doc.page.height}px`,
    top: `${doc.page.yPos}%`,
    left: `${doc.page.xPos}%`,
  };

  return (
    <div className={style.page} style={stylePage}>
      <Canvas />
      {newElement != null ? <SelectionArea /> : null}
    </div>
  );
};

export default Page;
