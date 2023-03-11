import styles from "./TextInput.module.scss";

const TextInput = (props) => {
  return (
    <div className={[styles.form__group, styles.field].join(" ")}>
      <input className={styles.form__field} {...props} />
      <label for={props.id} className={styles.form__label}>
        {props.label}
      </label>
    </div>
  );
};

export default TextInput;
