import { Fragment } from "react";
import styles from "./Dropdown.module.scss";

const Dropdown = ({ list, onSelect, current }) => {
  console.log("current -", current);
  return (
    <div className={styles.select} tabindex="1">
      {list.map((l, idx) => (
        <Fragment>
          <input
            className={styles.selectopt}
            name={`${l}`}
            type="radio"
            id={`${l}_${idx}`}
            checked={current === l}
            onClick={() => {
              onSelect(l);
            }}
          />
          <label for={`${l}_${idx}`} className={styles.option}>
            {l}
          </label>
        </Fragment>
      ))}
    </div>
  );
};

export default Dropdown;
