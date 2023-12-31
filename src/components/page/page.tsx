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

import style from "./page.module.css";
import { useDispatch, useSelector } from "react-redux";

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
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const newElement = useSelector((state) => state.newElement);

  const stylePage = {
    width: `${page.width}px`,
    height: `${page.height}px`,
    top: `${page.yPos}%`,
    left: `${page.xPos}%`,
  };

  return (
    <div className={style.page} style={stylePage}>
      <Canvas {...page} />
      {newElement != null ? <SelectionArea /> : null}
    </div>
  );
};

export default Page;
