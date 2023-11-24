import { useState } from "react";

import { PageProps } from "../models/models";
import Filter from "../filter/filter";
import TextBlock from "../textBlock/textBlock";
import Rectangle from "../graphicObjects/rectangle/rectangle";
import Circle from "../graphicObjects/circle/circle";
import Image from "../graphicObjects/image/image";
import styles from "./canvas.module.css";
import { useDnD } from "../../hooks/useDnD/useDnD";

const Canvas = (props: PageProps) => {
  const [state, setState] = useState(props);

  const styleProps = {
    width: `${state.width}px`,
    height: `${state.height}px`,
    top: `${state.yPos}%`,
    left: `${state.xPos}%`,
  };

  const { registerDndItem } = useDnD();

  return (
    <div className={styles.page} style={styleProps}>
      {state.elements.map((el, index) => {
        switch (el.type) {
          case "text":
            return (
              <TextBlock
                props={el}
                registerDndItem={registerDndItem}
                index={index}
                key={el.id}
              />
            );
          case "filter":
            return <Filter {...el} key={el.id} />;
          case "circle":
            return <Circle {...el} key={el.id} />;
          case "rectangle":
            return <Rectangle {...el} key={el.id} />;
          case "image":
            return <Image {...el} key={el.id} />;
        }
      })}
    </div>
  );
};

export default Canvas;
