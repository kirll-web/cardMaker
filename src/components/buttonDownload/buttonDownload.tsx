import { useAppSelector } from "../../redux/hooks";

type Props = {
  styles: CSSModuleClasses;
};

const ButtonDownload = (props: Props) => {
  const { styles } = props;
  const elements = useAppSelector((state) => state.elementsPage);
  const createFile = () => {
    const file = new Blob([JSON.stringify(elements)], {
      type: "application/json",
    });
    return file;
  };

  const file = createFile();

  const downloadFile = () => {
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = "file.json";
    link.click();
  };

  return (
    <button
      title="Скачать заготовку"
      className={styles.menuBtn}
      onClick={downloadFile}
    >
      <img src="../../../resource/icons/download.png" alt="Скачать заготовку" />
    </button>
  );
};

export default ButtonDownload;
