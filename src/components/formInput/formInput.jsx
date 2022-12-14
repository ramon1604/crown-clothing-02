import React from "react";

import styles from "./formInput.module.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className={styles.group}>
      <input className={styles.formInput} {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? styles.shrink : ""
          } ${styles.formInputLabel}`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
