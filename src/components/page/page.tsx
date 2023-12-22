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

type Props = {
  page: PageProps;
  newElement:
    | TextBlockProps
    | ImageBlockProps
    | CircleProps
    | RectangleProps
    | FilterProps;
  setPage: Dispatch<SetStateAction<PageProps>>;
  deleteNewElement: Dispatch<
    SetStateAction<
      | TextBlockProps
      | ImageBlockProps
      | CircleProps
      | RectangleProps
      | FilterProps
    >
  >;
};

const Page = (props: Props) => {
  const { page, newElement, setPage, deleteNewElement } = props;

  const stylePage = {
    width: `${page.width}px`,
    height: `${page.height}px`,
    top: `${page.yPos}%`,
    left: `${page.xPos}%`,
  };

  return (
    <div className={style.page} style={stylePage}>
      <Canvas {...page} />
      {newElement != null ? (
        <SelectionArea
          newElem={newElement}
          deleteNewElement={deleteNewElement}
          setPage={setPage}
        />
      ) : null}
    </div>
  );
};

export default Page;
