import { RefObject, useRef, useState, useEffect } from "react";
import styles from "./selectionArea.module.css";

import TextBlock from "../textBlock/textBlock";
import Circle from "../graphicObjects/circle/circle";
import Rectangle from "../graphicObjects/rectangle/rectangle";
import Image from "../graphicObjects/image/image";
import Filter from "../filter/filter";
import { Dispatch, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useDnD } from "../../hooks/useDnD/useDnD";

import ResizeArea from "../resizeArea/resizeArea";

import {
  PageProps,
  TextBlockProps,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
  MenuText,
} from "../models/models";

type Props = {
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
  stateMenu: MenuText;
  pageX: number;
  pageY: number;
  setShowMenuText: Dispatch<SetStateAction<boolean>>;
};

const SelectionArea = () => {
  const dispatch = useDispatch();
  const newElement = useSelector((state) => state.newElement);

  const styleArea = {
    width: newElement.width,
    height: newElement.height,
    top: newElement.yPos,
    left: newElement.xPos,
  };

  const { registerDndItem } = useDnD();

  const ref = useRef<HTMLDivElement>(null);
  const dndControlRef = useRef<HTMLDivElement>(null);
  const refAreaWrapper = useRef<HTMLDivElement>(null);

  const addElement = (
    newElement:
      | TextBlockProps
      | ImageBlockProps
      | CircleProps
      | RectangleProps
      | FilterProps
  ) => {
    switch (newElement.type) {
      case "text":
        return <TextBlock {...newElement} />; //* поменять переданные элементы на stateMenu. Может возникнуть проблема с типами.
      case "circle":
        return <Circle {...newElement} />;
      case "rectangle":
        return <Rectangle {...newElement} />;
      case "image":
        return <Image {...newElement} />;
      case "filter":
        return <Filter {...newElement} />;
      default:
        return null;
    }
  };

  const deleteNewItem = () => {
    dispatch({ type: "SHOW_MENUTEXT", show: false });
    dispatch({ type: "DELETE_ELEMENT" });
  };

  const addElemToCanvas = (e: MouseEvent) => {
    if (e.target === refAreaWrapper.current) {
      dispatch({ type: "UPDATE_ELEMENTS", element: newElement });
      deleteNewItem();
    }
  };

  useEffect(() => {
    const { onDragStart } = registerDndItem({
      elementRef: ref,
      controlRef: dndControlRef,
    });

    const onMouseDown = (mouseDownEvent: MouseEvent) => {
      onDragStart({
        onDrag: (dragEvent: MouseEvent) => {
          dragEvent.stopPropagation();
          dragEvent.preventDefault();
          // console.log(dragEvent, mouseDownEvent);
          ref.current!.style.top = `${
            dragEvent.clientY + (newElement.yPos - mouseDownEvent.clientY)
          }px`;
          ref.current!.style.left = `${
            dragEvent.clientX + (newElement.xPos - mouseDownEvent.clientX)
          }px`;
        },
        onDrop: (dropEvent: MouseEvent) => {
          dropEvent.stopPropagation();
          dispatch({
            type: "UPDATE_ELEMENT",
            key: "xPos",
            value:
              dropEvent.clientX +
              (newElement.xPos - mouseDownEvent.clientX) +
              3,
          });
          dispatch({
            type: "UPDATE_ELEMENT",
            key: "yPos",
            value:
              dropEvent.clientY +
              (newElement.yPos - mouseDownEvent.clientY) +
              5,
          });
        },
      });
    };

    if (dndControlRef.current !== null) {
      const control = dndControlRef.current!;
      control.addEventListener("mousedown", onMouseDown);
      return () => control.removeEventListener("mousedown", onMouseDown);
    }
  }, [newElement.width, newElement.height, newElement.xPos, newElement.yPos]);

  return (
    <div
      ref={refAreaWrapper}
      className={styles.selectionAreaWrapper}
      onClick={addElemToCanvas}
    >
      <div style={styleArea} ref={ref} className={styles.selectionArea}>
        <div ref={dndControlRef} className={styles.dndBlock}></div>
        {newElement.type !== "text" ? <ResizeArea refResize={ref} /> : null}
        {addElement(newElement)}
        <div onClick={deleteNewItem}>
          <img
            className={styles.deleteIcon}
            src="../../../resource/basket.svg"
            alt="Basket"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectionArea;
