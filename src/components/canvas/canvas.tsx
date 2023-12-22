import { useState, useRef, useEffect } from "react";

import {
  PageProps,
  TextBlockProps,
  ImageBlockProps,
  CircleProps,
  RectangleProps,
  FilterProps,
} from "../models/models";

import style from "./canvas.module.css";

const Canvas = (props: PageProps) => {
  const ref = useRef(null);
  //* TODO: ПОСМОТРЕТЬ КАК ОТЫГРЫВАЕТ USEFFECT ПРИ ДОБАВЛЕНИИ ЭЛЕМЕНТА

  // useEffect(() => {
  //   const canvas = ref.current! as HTMLCanvasElement;

  // });

  useEffect(() => {
    const canvas = ref.current! as HTMLCanvasElement;
    const context = canvas.getContext("2d");
    canvas.width = props.width;
    canvas.height = props.height;
    canvas.style.top = `${props.yPos}%`;
    canvas.style.left = `${props.xPos}%`;
    context!.clearRect(0, 0, canvas.width, canvas.height);
    props.elements.forEach(
      (
        element:
          | TextBlockProps
          | ImageBlockProps
          | CircleProps
          | RectangleProps
          | FilterProps
      ) => {
        const ctx = canvas.getContext("2d");
        console.log(element);
        switch (element.type) {
          case "text":
            ctx!.fillText(element.value, element.xPos, element.yPos);
            ctx!.fillStyle = element.color;
            ctx!.font = `${element.fontSize}px ${element.fontFamily}`;
            break;
          case "circle":
            ctx!.fillStyle = element.backgroundColor;
            ctx!.arc(
              element.xPos,
              element.yPos,
              element.width / 2,
              0,
              Math.PI * 2
            );
            ctx?.fill();
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
            const pic = new Image(); // "Создаём" изображение
            pic.src = element.url; // Источник изображения, позаимствовано на хабре
            pic.onload = function () {
              ctx!.drawImage(
                pic,
                element.xPos,
                element.yPos,
                element.width,
                element.height
              );
            };
            break;
          case "filter":
            ctx!.fillStyle = element.colorOfFilter;
            ctx!.fillRect(
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

  return <canvas className={style.page} ref={ref}></canvas>;
};

export default Canvas;
