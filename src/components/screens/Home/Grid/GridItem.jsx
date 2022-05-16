import styles from "./Grid.module.scss";
import AnimateBlock from "../../../ui/animateBlock/AnimateBlock";

const GridItem = ({ item }) => {
  return (
    <a
      href={item.link}
      rel={'noreferrer'}
      target="_blank"
      className={styles.item}
    >
      <div
        className={styles.gradient}
        style={{
          backgroundImage: `linear-gradient(to right,${item.gradient.from} 0%,${item.gradient.to} 51%,${item.gradient.from} 100%)`,
        }}
      >
        <img src={item.icon.path} alt="Apperlinks" width={item.icon.width} />
      </div>
      <div className={styles.title}>{item.title}</div>
      {item.isImportant && <AnimateBlock/>}

    </a>
  );
};

export default GridItem;
