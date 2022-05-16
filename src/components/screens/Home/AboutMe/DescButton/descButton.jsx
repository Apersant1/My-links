import React from "react";
import { useOutside } from "../../../../../hooks/useOutside";
import cn from "classnames";
import styles from "./descButton.module.scss";

const DescButton = ({ description }) => {
  const { isShow, setIsShow, ref } = useOutside(false);
  return (
    <div onClick={() => setIsShow(!isShow)} className={styles.parent} ref={ref}>
      <button>
        <span
          className={cn({
            [styles.active]: isShow,
          })}
        >
          Обо мне
        </span>
      </button>
      {isShow && <article>{description}</article>}
    </div>
  );
};

export default DescButton;
