import {
  CircleProps,
  FilterProps,
  ImageBlockProps,
  TextBlockProps,
  RectangleProps,
} from "../models/models";
import { Dispatch, SetStateAction } from "react";

import { ChangeEvent } from "react";
import { useAppActions } from "../../redux/hooks";

const LoadInput = () => {
  const { loadElementsToPageAction } = useAppActions();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    let file: File;
    if (event.target.files) {
      file = event.target.files[0];
      reader.readAsText(event.target.files[0]);
    }

    reader.onloadend = function () {
      try {
        if (typeof reader.result !== "string")
          throw Error("invalid file type: " + typeof reader.result);
        if (file.type !== "application/json")
          throw Error("invalid file: " + file.type);
        const dataParsing: Array<
          | CircleProps
          | FilterProps
          | ImageBlockProps
          | TextBlockProps
          | RectangleProps
        > = Object.values(JSON.parse(reader.result));
        console.log(dataParsing);
        loadElementsToPageAction(dataParsing);
      } catch (error) {
        alert(error);
      }
    };
  };

  return (
    <input
      accept=".json"
      onChange={onChange}
      type="file"
      placeholder="Загрузить"
    />
  );
};

export default LoadInput;
