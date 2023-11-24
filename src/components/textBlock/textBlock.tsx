import { useState, useRef, useEffect } from "react";
import { MouseEvent } from "react";
import useSelectArea from "../../hooks/useSelectArea/useSelectArea";

import { useDnD } from "../../hooks/useDnD/useDnD";

import { TextBlockProps } from "../models/models";
import { RegisterDndItemFn } from "../../hooks/useDnD/useDnD";
import style from "./textBlock.module.css";

type Props = {
  props: TextBlockProps;
  registerDndItem: RegisterDndItemFn;
  index: number;
};

const TextBlock = (propsBlock: Props) => {
  const { registerDndItem, index } = propsBlock;

  const [state, setState] = useState(propsBlock.props);

  const styleProps = {
    width: `${state.width}px`,
    height: `${state.height}px`,
    top: `${state.yPos}px`,
    left: `${state.xPos}px`,
    fontSize: `${state.fontSize}px`,
    fontFamily: `${state.fontFamily}`,
    color: `${state.color}`,
    fontWeight: state.bold ? "900" : "300",
  };

  const ref = useRef<HTMLDivElement>(null);
  const dndControlRef = useRef<HTMLDivElement>(null);
  const [selectArea, setSelectArea] = useState(false);

  const toggleArea = () => {
    setSelectArea((area) => !area);
  };

  if (selectArea) {
    ref.current!.style.border = "solid 5px black";
  }

  useEffect(() => {
    // TODO: эту логику перемещения можно вынести в отдельный компонент, div, который сможет отрисовывать в себе любой контент

    const { onDragStart } = registerDndItem(index, {
      elementRef: ref,
      controlRef: dndControlRef,
    });

    const onMouseDown = (mouseDownEvent: MouseEvent) => {
      onDragStart({
        onDrag: (dragEvent) => {
          // TODO: можно вынести в стили и использовать как-то так ref.current!.classList.add(styles.dragging) либо через useState
          if (selectArea) {
            ref.current!.style.position = "relative";
            ref.current!.style.zIndex = "1";
            ref.current!.style.boxShadow = "black 2px 2px 4px";
            ref.current!.style.top = `${
              dragEvent.clientY - ref.current!.offsetHeight / 2
            }px`;
            ref.current!.style.left = `${
              dragEvent.clientX - ref.current!.offsetWidth / 2
            }px`;
            console.log(1);
          }
        },
        onDrop: (dropEvent) => {
          if (selectArea) {
            ref.current!.style.position = "";
            ref.current!.style.zIndex = "";
            ref.current!.style.boxShadow = "";
            ref.current!.style.top = `${
              dropEvent.clientY - ref.current!.offsetHeight / 2
            } px`;
            ref.current!.style.left = `${
              dropEvent.clientX - ref.current!.offsetWidth / 2
            }px`;
          }
        },
      });
    };

    const control = dndControlRef.current!;
    control.addEventListener("mousedown", onMouseDown);
    return () => control.removeEventListener("mousedown", onMouseDown);
  }, [selectArea === true]);

  return (
    <div
      ref={ref}
      onDoubleClick={toggleArea}
      className={style.textBlock}
      style={styleProps}
    >
      <div ref={dndControlRef}>{state.value.join(" ")} </div>
    </div>
  );
};

export default TextBlock;

// useEffect(() => {
//   const { onDragStart } = props.registerDndItem(props.index, {
//     elementRef: ref,
//     controlRef: dndControlRef,
//   });

//   const onMouseDown = (mouseDownEvent: MouseEvent) => {
//     console.log(selectArea);
//     if (selectArea) {
//       onDragStart({
//         onDrag: (dragEvent) => {
//           // TODO: можно вынести в стили и использовать как-то так ref.current!.classList.add(styles.dragging) либо через useState
//           ref.current!.style.position = "relative";
//           ref.current!.style.zIndex = "1";
//           ref.current!.style.boxShadow = "black 2px 2px 4px";
//           ref.current!.style.top = `${dragEvent.clientY - state.height / 2}px`;
//           ref.current!.style.left = `${dragEvent.clientX - state.width / 2}px`;
//         },
//         onDrop: (dropEvent) => {
//           ref.current!.style.position = "";
//           ref.current!.style.zIndex = "";
//           ref.current!.style.boxShadow = "";
//           ref.current!.style.top = `${dropEvent.clientY - state.height / 2}px`;
//           ref.current!.style.left = `${dropEvent.clientX - state.width / 2}px`;
//         },
//       });
//     }
//   };

//   const control = dndControlRef.current!;
//   control.addEventListener("mousedown", onMouseDown);
//   return () => control.removeEventListener("mousedown", onMouseDown);
// }, [props.index, props.registerDndItem]);
