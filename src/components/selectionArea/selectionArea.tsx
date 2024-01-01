import { RefObject, useRef, useState, useEffect } from "react";
import styles from "./selectionArea.module.css";

import TextBlock from "../textBlock/textBlock";
import Circle from "../graphicObjects/circle/circle";
import Rectangle from "../graphicObjects/rectangle/rectangle";
import Image from "../graphicObjects/image/image";
import Filter from "../filter/filter";
import { useAppSelector, useAppActions } from "../../redux/hooks";

import { useDnD } from "../../hooks/useDnD/useDnD";

import ResizeArea from "../resizeArea/resizeArea";

import {
  TextBlockProps,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
} from "../models/models";

const SelectionArea = () => {
  const newElement = useAppSelector((state) => state.newElement!);
  const { updateNewElementAction } = useAppActions();
  const { updateElementsPageAction } = useAppActions();
  const { showMenuTextAction } = useAppActions();
  const { deleteNewElementAction } = useAppActions();

  const { registerDndItem } = useDnD();

  const ref = useRef<HTMLDivElement | HTMLImageElement>(null);
  const dndControlRef = useRef<HTMLDivElement>(null);
  const refAreaWrapper = useRef<HTMLDivElement>(null);

  const styleProps = {
    left: newElement.xPos,
    top: newElement.yPos,
  };

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
        return <TextBlock refItem={ref} />;
      case "circle":
        return <Circle refItem={ref} />;
      case "rectangle":
        return <Rectangle refItem={ref} />;
      case "image":
        return <Image refItem={ref} />;
      case "filter":
        return <Filter refItem={ref} />;
      default:
        return null;
    }
  };

  const deleteNewItem = () => {
    showMenuTextAction(false);
    deleteNewElementAction();
  };

  const addElemToCanvas = (e: MouseEvent) => {
    if (e.target === refAreaWrapper.current) {
      showMenuTextAction(false);
      updateElementsPageAction(newElement);
      deleteNewElementAction();
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
          updateNewElementAction(
            "xPos",
            dropEvent.clientX + (newElement.xPos - mouseDownEvent.clientX) + 3
          );

          updateNewElementAction(
            "yPos",
            dropEvent.clientY + (newElement.yPos - mouseDownEvent.clientY) + 5
          );
        },
      });
    };

    if (dndControlRef.current !== null) {
      const control = dndControlRef.current!;
      control.addEventListener("mousedown", onMouseDown);
      return () => control.removeEventListener("mousedown", onMouseDown);
    }
  }, [newElement.xPos, newElement.yPos]);
  console.log(ref);
  return (
    <div
      ref={refAreaWrapper}
      className={styles.selectionAreaWrapper}
      onClick={addElemToCanvas}
    >
      <div style={styleProps} className={styles.selectionArea}>
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
