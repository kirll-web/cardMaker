import MenuColor from "../menuColor/menuColor";
type Props = {
  styles: CSSModuleClasses;
};

const MenuGraphicObject = (props: Props) => {
  const { styles } = props;
  return (
    <div className={styles.menuElement}>
      <MenuColor styles={styles} />
    </div>
  );
};

export default MenuGraphicObject;
