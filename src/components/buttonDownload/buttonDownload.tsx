import { PageProps } from "../models/models";

const ButtonDownload = (props: PageProps) => {
  const createFile = () => {
    const file = new Blob([JSON.stringify(props)], {
      type: "application/json",
    }); // создаём файл на стороне пользователя
    return file; //возвращаем созданный файл
  };

  const file = createFile(); // переменная с файлом, который возвращает функция createFile()[которая выше]

  const downloadFile = () => {
    console.log(props);
    const url = URL.createObjectURL(file); // создаём ссылку на файл
    const link = document.createElement("a");
    link.href = url;
    link.download = "file.json";
    link.click();
  };

  return <button onClick={downloadFile}>Скачать открытку</button>;
};

export default ButtonDownload;
