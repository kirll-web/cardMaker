import { useRef, useEffect } from "react";

import {
  TextBlockProps,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
} from "../models/models";

import { doc } from "../models/data";
import { useAppSelector } from "../../redux/hooks";

import style from "./canvas.module.css";

const Canvas = () => {
  const ref = useRef(null);
  const elements = useAppSelector((state) => state.elementsPage);
  console.log(elements);
  useEffect(() => {
    const canvas = ref.current! as HTMLCanvasElement;
    const context = canvas.getContext("2d");
    canvas.width = doc.page.width;
    canvas.height = doc.page.height;
    canvas.style.top = `${doc.page.yPos}%`;
    canvas.style.left = `${doc.page.xPos}%`;
    context!.clearRect(0, 0, canvas.width, canvas.height);

    Promise.all(
      elements.map(
        (
          element:
            | TextBlockProps
            | ImageBlockProps
            | CircleProps
            | RectangleProps
            | FilterProps
        ) => {
          if (element.type === "image") {
            return new Promise<
              | TextBlockProps
              | ImageBlockProps
              | CircleProps
              | RectangleProps
              | FilterProps
            >((res) => {
              const pic = new Image(); // "Создаём" изображение
              pic.src = element.url; // Источник изображения, позаимствовано на хабре
              pic.onload = () => res({ ...element, pic: pic });
            });
          } else {
            return new Promise<
              | TextBlockProps
              | ImageBlockProps
              | CircleProps
              | RectangleProps
              | FilterProps
            >((res) => {
              res(element);
            });
          }
        }
      )
    ).then((elements) => {
      elements.forEach(
        (
          element:
            | TextBlockProps
            | ImageBlockProps
            | CircleProps
            | RectangleProps
            | FilterProps
        ) => {
          const ctx = canvas.getContext("2d")!;
          ctx.globalAlpha = 1;
          ctx.beginPath();

          switch (element.type) {
            case "text":
              const font = `${element.italic ? "italic" : ""} ${
                element.bold ? "bold" : ""
              } ${element.fontSize}px ${element.fontFamily}`;
              ctx.font = font;
              console.log(font);
              ctx.fillStyle = element.backgroundColor;
              console.log(ctx);
              if (element.underline) {
                let { width } = ctx.measureText(element.value);
                const height = element.fontSize;
                ctx.fillRect(
                  element.xPos + 5,
                  element.yPos + height + 5,
                  width,
                  3
                );
              }
              ctx.textBaseline = "top";
              ctx.fillText(element.value, element.xPos + 5, element.yPos + 5);
              break;
            case "circle":
              ctx.ellipse(
                element.xPos + element.width / 2 + 4,
                element.yPos + element.height / 2 + 4,
                element.width / 2,
                element.height / 2,
                0,
                0,
                2 * Math.PI
              );
              ctx.stroke();
              ctx.fillStyle = element.backgroundColor;
              ctx.fill();
              break;
            case "rectangle":
              ctx!.fillStyle = element.backgroundColor;
              ctx!.fillRect(
                element.xPos,
                element.yPos,
                element.width,
                element.height
              );
              console.log(element.backgroundColor);
              break;
            case "image":
              ctx.drawImage(
                element.pic as HTMLImageElement,
                element.xPos,
                element.yPos,
                element.width,
                element.height
              );
              break;
            case "filter":
              ctx.fillStyle = element.backgroundColor;
              ctx.globalAlpha = element.opacity;
              ctx.fillRect(
                element.xPos,
                element.yPos,
                element.width,
                element.height
              );
              break;
            default:
              return null;
          }
        }
      );
    });
  }, [elements]);

  return <canvas className={style.page} ref={ref}></canvas>;
};

export default Canvas;
