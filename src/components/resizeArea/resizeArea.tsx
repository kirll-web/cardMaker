import { useRef, RefObject, useEffect } from "react";
import { useResize, ControlResizeRefs } from "../../hooks/useResize/useResize";
import { Dispatch, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
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
};

const ResizeArea = (props: Props) => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const newElement = useSelector((state) => state.newElement);
  const pageX = page.xPos,
    pageY = page.yPos;

  const { registerResizeItem } = useResize();

  const { refResize } = props;

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

  const updateSizeElement = (width, height, xPos, yPos) => {
    dispatch({ type: "UPDATE_ELEMENT", key: "width", value: parseInt(width) });
    dispatch({
      type: "UPDATE_ELEMENT",
      key: "height",
      value: parseInt(height),
    });
    dispatch({ type: "UPDATE_ELEMENT", key: "xPos", value: parseInt(xPos) });
    dispatch({ type: "UPDATE_ELEMENT", key: "yPos", value: parseInt(yPos) });
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
          let x: number = pageX + newElement.xPos + newElement.xPos,
            y: number = pageY + newElement.yPos + newElement.yPos;
          if (refResize.current?.getBoundingClientRect().x != x) {
            x = refResize.current!.getBoundingClientRect().x;
          } else if (refResize.current?.getBoundingClientRect().y != y) {
            y = refResize.current!.getBoundingClientRect().y - pageY;
          }

          updateSizeElement(
            refResize.current!.style.width,
            refResize.current!.style.height,
            refResize.current!.style.left,
            refResize.current!.style.top
          );
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
