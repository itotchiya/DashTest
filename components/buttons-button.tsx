import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./buttons-button.module.css";

const ButtonsButton = ({
  className = "",
  hierarchy = "Primary",
  icon = "Dot leading",
  size = "md",
  state = "Default",
  iconTrailing = false,
  iconLeading = false,
}) => {
  return (
    <button
      className={[styles.buttonsbutton, className].join(" ")}
      data-hierarchy={hierarchy}
      data-icon={icon}
      data-size={size}
      data-state={state}
    >
      {iconLeading && (
        <Image
          className={styles.placeholderIcon}
          width={20}
          height={20}
          alt=""
          src="/placeholder.svg"
        />
      )}
      <div className={styles.textPadding}>
        <div className={styles.text}>Obtenir mon tarif</div>
      </div>
      {iconTrailing && (
        <Image
          className={styles.placeholderIcon1}
          width={20}
          height={20}
          alt=""
          src="/placeholder.svg"
        />
      )}
    </button>
  );
};

ButtonsButton.propTypes = {
  className: PropTypes.string,
  iconTrailing: PropTypes.bool,
  iconLeading: PropTypes.bool,

  /** Variant props */
  hierarchy: PropTypes.number,
  icon: PropTypes.number,
  size: PropTypes.number,
  state: PropTypes.number,
};

export default ButtonsButton;
