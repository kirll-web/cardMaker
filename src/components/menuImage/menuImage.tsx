import { ChangeEvent } from "react";
import { useAppActions } from "../../redux/hooks";
import { doc } from "../models/data";

const MenuImage = () => {
  const { allowedFormatImage } = doc;
  const { updateImageSrcNewElementAction } = useAppActions();

  const imageUploaded = (event: ChangeEvent<HTMLInputElement>) => {
    let file = event.target["files"]![0];

    const isFormat = (format: string) => `image/${format}` == file.type;

    if (allowedFormatImage.some(isFormat)) {
      let reader = new FileReader();
      console.log(event.target["files"]![0]);
      reader.readAsDataURL(file);
      reader.onloadend = function () {
        updateImageSrcNewElementAction(String(reader.result));
      };
    } else {
      alert("Неверный формат изображения");
    }
  };

  return (
    <div>
      <input
        onChange={(event) => imageUploaded(event)}
        type="file"
        name="imageInNewElement"
        id="imageInNewElement"
      />
    </div>
  );
};

export default MenuImage;
