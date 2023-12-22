import { RefObject, useRef } from "react";
import { SelectionAreaProps } from "../models/models";
import styles from "./selectionArea.module.css";

import TextBlock from "../textBlock/textBlock";
import Circle from "../graphicObjects/circle/circle";
import Rectangle from "../graphicObjects/rectangle/rectangle";
import Image from "../graphicObjects/image/image";
import Filter from "../filter/filter";
import { Dispatch, SetStateAction } from "react";

import {
  PageProps,
  TextBlockProps,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
} from "../models/models";
import { Page } from "../models/modelsOld";

const addElement = (
  newElem:
    | TextBlockProps
    | ImageBlockProps
    | CircleProps
    | RectangleProps
    | FilterProps
) => {
  switch (newElem.type) {
    case "text":
      return <TextBlock {...newElem} />;
    case "circle":
      return <Circle {...newElem} />;
    case "rectangle":
      return <Rectangle {...newElem} />;
    case "image":
      return <Image {...newElem} />;
    case "filter":
      return <Filter {...newElem} />;
    default:
      return null;
  }
};

type Props = {
  newElem:
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

const SelectionArea = (props: Props) => {
  const { newElem, setPage, deleteNewElement } = props;
  const styleArea = {
    width: newElem.width,
    height: newElem.height,
    top: newElem.yPos,
    left: newElem.xPos,
  };
  console.log(newElem);
  const addElemToCanvas = () => {
    setPage((page: PageProps) => {
      return {
        ...page,
        elements: [...page.elements, newElem],
      };
    });
    deleteNewElement(null!);
  };
  return (
    <div className={styles.selectionAreaWrapper} onClick={addElemToCanvas}>
      <div style={styleArea} className={styles.selectionArea}>
        {addElement(newElem)}
        <img
          className={styles.deleteIcon}
          src="../../../resource/basket.svg"
          alt="Basket"
        />
      </div>
    </div>
  );
};

export default SelectionArea;
