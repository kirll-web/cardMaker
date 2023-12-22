import { RefObject, useCallback, useRef } from "react";

type ResizeItemInfo = {
  elementRef: RefObject<HTMLDivElement>;
  controlRef: RefObject<HTMLDivElement>;
};

type OnResizeStartFn = (args: {
  onDrag: (event: MouseEvent) => void;
  onDrop: (event: MouseEvent) => void;
}) => void;

const useResize = () => {
  const registerResizeItem = useCallback((resizeItemInfo: ResizeItemInfo) => {
    const item = {
      ...resizeItemInfo,
      startY: 0,
      startX: 0,
    };

    const onResizeStart: OnResizeStartFn = ({ onDrag, onDrop }) => {
      const onMouseUp = (event: MouseEvent) => {
        onDrop(event);

        window.removeEventListener("mousemove", onDrag);
        window.removeEventListener("mouseup", onMouseUp);
      };

      window.addEventListener("mousemove", onDrag);
      window.addEventListener("mouseup", onMouseUp);
    };

    return {
      onResizeStart,
    };
  }, []);

  return {
    registerResizeItem,
  };
};
export { useResize };
