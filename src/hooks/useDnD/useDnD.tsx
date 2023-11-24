import { RefObject, useCallback, useRef } from "react";

type Props = {
  ref: RefObject<HTMLDivElement>;
};

type DndItemInfo = {
  elementRef: RefObject<HTMLDivElement>;
  controlRef: RefObject<HTMLDivElement>;
};

type InternalDndItemInfo = DndItemInfo & {
  startY: number;
  startX: number;
};

type RegisterDndItemFn = (
  index: number,
  dndItemInfo: DndItemInfo
) => {
  onDragStart: OnDragStartFn;
};

type OnDragStartFn = (args: {
  onDrag: (event: MouseEvent) => void;
  onDrop: (event: MouseEvent) => void;
}) => void;

type ItemInfo = {
  startY: number;
  startX: number;
};

const useDnD = () => {
  const items = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<Array<InternalDndItemInfo>>([]);

  const registerDndItem = useCallback(
    (index: number, dndItemInfo: DndItemInfo) => {
      const item = {
        ...dndItemInfo,
        startY: 0,
        startX: 0,
      };

      const onDragStart: OnDragStartFn = ({ onDrag, onDrop }) => {
        item.startY = item.elementRef.current!.getBoundingClientRect().top;
        item.startX = item.elementRef.current!.getBoundingClientRect().left;

        const onMouseUp = (event: MouseEvent) => {
          onDrop(event);

          window.removeEventListener("mousemove", onDrag);
          window.removeEventListener("mouseup", onMouseUp);
        };
        window.addEventListener("mousemove", onDrag);
        window.addEventListener("mouseup", onMouseUp);
      };

      return {
        onDragStart,
      };
    },
    []
  );

  return {
    registerDndItem,
  };
};
export { useDnD };

export type { DndItemInfo, RegisterDndItemFn };

// type DndItemInfo = {
//   elementRef: RefObject<HTMLDivElement>;
//   controlRef: RefObject<HTMLDivElement>;
// };

// type InternalDndItemInfo = DndItemInfo & {
//   startY: number;
// };

// type OnDragStartFn = (args: {
//   onDrag: (event: MouseEvent) => void;
//   onDrop: (event: MouseEvent) => void;
// }) => void;

// type RegisterDndItemFn = (
//   index: number,
//   dndItemInfo: DndItemInfo
// ) => {
//   onDragStart: OnDragStartFn;
// };

// type UseDraggableListParams = {
//   onOrderChange: (fromIndex: number, toIndex: number) => void;
// };

// function useDnD({ onOrderChange }: UseDraggableListParams) {
//   const itemsRef = useRef<Array<InternalDndItemInfo>>([]);

//   const registerDndItem = useCallback(
//     (index: number, dndItemInfo: DndItemInfo) => {
//       const item = {
//         ...dndItemInfo,
//         startY: 0,
//       };
//       itemsRef.current[index] = item;

//       const onDragStart: OnDragStartFn = ({ onDrag, onDrop }) => {
//         item.startY = item.elementRef.current!.getBoundingClientRect().top;

//         const onMouseUp = (event: MouseEvent) => {
//           let newIndex = 0;
//           const draggableItemTop =
//             item.elementRef.current!.getBoundingClientRect().top;
//           for (let i = 0; i < itemsRef.current.length; ++i) {
//             if (i === index) {
//               continue;
//             }
//             const currItem = itemsRef.current[i].elementRef.current!;
//             if (currItem.getBoundingClientRect().top > draggableItemTop) {
//               newIndex = draggableItemTop > item.startY ? i - 1 : i;
//               break;
//             }
//             newIndex = i;
//           }
//           onOrderChange(index, newIndex);
//           onDrop(event);

//           window.removeEventListener("mousemove", onDrag);
//           window.removeEventListener("mouseup", onMouseUp);
//         };
//         console.log(1);
//         window.addEventListener("mousemove", onDrag);
//         window.addEventListener("mouseup", onMouseUp);
//       };

//       return {
//         onDragStart,
//       };
//     },
//     [onOrderChange]
//   );

//   return {
//     registerDndItem,
//   };
// }

// export { useDnD };

// export type { DndItemInfo, RegisterDndItemFn };
