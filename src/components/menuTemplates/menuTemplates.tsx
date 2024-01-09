import { useAppActions } from "../../redux/hooks";
import { doc } from "../models/data";

type Props = {
  styles: CSSModuleClasses;
};

const MenuTemplates = (props: Props) => {
  const { styles } = props;
  const { templateCollection } = doc;
  const { loadElementsToPageAction } = useAppActions();

  const pushTemplate = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLDivElement;
    const template = templateCollection.find(
      (template) => template.name == el.getAttribute("data-templatename")
    );
    loadElementsToPageAction(template!.elements);
  };

  return (
    <div className={styles.menuElement}>
      {templateCollection.map((template) => {
        return (
          <div
            key={template.id}
            className={styles.template}
            data-templatename={template.name}
            onClick={pushTemplate}
          >
            <span className={styles.templateTitle}>{template.name}</span>
            <img
              className={styles.templatePreview}
              src={template.urlPic}
              alt={template.name}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MenuTemplates;
