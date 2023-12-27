import { useRef, RefObject, useEffect } from "react";
import { useResize, ControlResizeRefs } from "../../hooks/useResize/useResize";
import { Dispatch, SetStateAction } from "react";
import styles from "./resizeArea.module.css";

import {
  PageProps,
  TextBlockProps,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
} from "../models/models";

type Props = {
  refResize: RefObject<HTMLDivElement>;
  newElement:
    | TextBlockProps
    | ImageBlockProps
    | CircleProps
    | RectangleProps
    | FilterProps;
  setNewElement: Dispatch<
    SetStateAction<
      | TextBlockProps
      | ImageBlockProps
      | CircleProps
      | RectangleProps
      | FilterProps
    >
  >;
  pageX: number;
  pageY: number;
};

const ResizeArea = (props: Props) => {
  const { registerResizeItem } = useResize();

  const { refResize, newElement, setNewElement, pageX, pageY } = props;

  const resizeControlRef: ControlResizeRefs = {
    leftControl: useRef<HTMLDivElement>(null),
    rightControl: useRef<HTMLDivElement>(null),
    topControl: useRef<HTMLDivElement>(null),
    bottomControl: useRef<HTMLDivElement>(null),
    topLeftControl: useRef<HTMLDivElement>(null),
    topRightControl: useRef<HTMLDivElement>(null),
    bottomLeftControl: useRef<HTMLDivElement>(null),
    bottomRightControl: useRef<HTMLDivElement>(null),
  };

  const resizeTopControl = (dragEvent, mouseDownEvent) => {
    refResize.current!.style.height = `${
      newElement.height - dragEvent.clientY + mouseDownEvent.clientY
    }px`;

    if (
      newElement.yPos + dragEvent.clientY - mouseDownEvent.clientY <
      newElement.yPos + newElement.height + 3
    ) {
      refResize.current!.style.top = `${
        newElement.yPos + dragEvent.clientY - mouseDownEvent.clientY
      }px`;
    }
  };

  const resizeLeftControl = (dragEvent, mouseDownEvent) => {
    refResize.current!.style.width = `${
      newElement.width - dragEvent.clientX + mouseDownEvent.clientX
    }px`;

    if (
      newElement.xPos + dragEvent.clientX - mouseDownEvent.clientX <
      newElement.xPos + newElement.width + 3
    ) {
      refResize.current!.style.left = `${
        newElement.xPos + dragEvent.clientX - mouseDownEvent.clientX
      }px`;
    }
  };

  const resizeBottomControl = (dragEvent, mouseDownEvent) => {
    refResize.current!.style.height = `${
      newElement.height + dragEvent.clientY - mouseDownEvent.clientY
    }px`;
  };

  const resizeRightControl = (dragEvent, mouseDownEvent) => {
    refResize.current!.style.width = `${
      newElement.width + dragEvent.clientX - mouseDownEvent.clientX
    }px`;
  };

  useEffect(() => {
    const { onResizeStart } = registerResizeItem({
      elementRef: props.refResize,
      controlRef: resizeControlRef,
    });

    const onMouseDownResize = (mouseDownEvent: MouseEvent) => {
      onResizeStart({
        onDrag: (dragEvent) => {
          dragEvent.preventDefault();
          dragEvent.stopPropagation();

          if (mouseDownEvent.target === resizeControlRef.leftControl.current) {
            resizeLeftControl(dragEvent, mouseDownEvent);
          }

          if (mouseDownEvent.target === resizeControlRef.rightControl.current) {
            resizeRightControl(dragEvent, mouseDownEvent);
          }

          if (mouseDownEvent.target === resizeControlRef.topControl.current) {
            resizeTopControl(dragEvent, mouseDownEvent);
          }

          if (
            mouseDownEvent.target === resizeControlRef.bottomControl.current
          ) {
            resizeBottomControl(dragEvent, mouseDownEvent);
          }

          if (
            mouseDownEvent.target === resizeControlRef.topLeftControl.current
          ) {
            resizeLeftControl(dragEvent, mouseDownEvent);
            resizeTopControl(dragEvent, mouseDownEvent);
          }

          if (
            mouseDownEvent.target === resizeControlRef.topRightControl.current
          ) {
            resizeRightControl(dragEvent, mouseDownEvent);
            resizeTopControl(dragEvent, mouseDownEvent);
          }

          if (
            mouseDownEvent.target === resizeControlRef.bottomLeftControl.current
          ) {
            resizeLeftControl(dragEvent, mouseDownEvent);
            resizeBottomControl(dragEvent, mouseDownEvent);
          }

          if (
            mouseDownEvent.target ===
            resizeControlRef.bottomRightControl.current
          ) {
            resizeRightControl(dragEvent, mouseDownEvent);
            resizeBottomControl(dragEvent, mouseDownEvent);
          }
        },
        onDrop: (dropEvent) => {
          console.log(refResize.current!.style.left);
          let x: number = props.pageX + newElement.xPos + newElement.xPos,
            y: number = props.pageY + newElement.yPos + newElement.yPos;
          if (refResize.current?.getBoundingClientRect().x != x) {
            x = refResize.current!.getBoundingClientRect().x;
          } else if (refResize.current?.getBoundingClientRect().y != y) {
            y = refResize.current!.getBoundingClientRect().y - props.pageY;
          }

          setNewElement((elem) => {
            return {
              ...elem,
              width: parseInt(refResize.current!.style.width),
              height: parseInt(refResize.current!.style.height),
              xPos: parseInt(refResize.current!.style.left),
              yPos: parseInt(refResize.current!.style.top),
            };
          });
        },
      });
    };

    Object.values(resizeControlRef).map((control) => {
      control.current!.addEventListener("mousedown", onMouseDownResize);
      return () =>
        control.current!.removeEventListener("mousedown", onMouseDownResize);
    });
  }, [newElement.width, newElement.height, newElement.xPos, newElement.yPos]);

  return (
    <div className={styles.resizeArea}>
      <div
        className={`${styles.control} ${styles.leftContol}`}
        ref={resizeControlRef.leftControl}
      ></div>
      <div
        className={`${styles.control} ${styles.topLeftControl}`}
        ref={resizeControlRef.topLeftControl}
      ></div>
      <div
        className={`${styles.control} ${styles.topControl}`}
        ref={resizeControlRef.topControl}
      ></div>
      <div
        className={`${styles.control} ${styles.topRightControl}`}
        ref={resizeControlRef.topRightControl}
      ></div>
      <div
        className={`${styles.control} ${styles.rightControl}`}
        ref={resizeControlRef.rightControl}
      ></div>
      <div
        className={`${styles.control} ${styles.bottomRightControl}`}
        ref={resizeControlRef.bottomRightControl}
      ></div>
      <div
        className={`${styles.control} ${styles.bottomControl}`}
        ref={resizeControlRef.bottomControl}
      ></div>
      <div
        className={`${styles.control} ${styles.bottomLeftControl}`}
        ref={resizeControlRef.bottomLeftControl}
      ></div>
    </div>
  );
};

export default ResizeArea;
