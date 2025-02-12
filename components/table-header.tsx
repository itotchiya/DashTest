import PropTypes from "prop-types";
import styles from "./table-header.module.css";

const TableHeader = ({
  className = "",
  arrow = false,
  helpIcon = false,
  state = "Default",
  text,
}) => {
  return (
    <div
      className={[styles.tableHeader, className].join(" ")}
      data-arrow={arrow}
      data-helpIcon={helpIcon}
      data-state={state}
    >
      <div className={styles.text}>{text}</div>
    </div>
  );
};

TableHeader.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,

  /** Variant props */
  arrow: PropTypes.bool,
  helpIcon: PropTypes.bool,
  state: PropTypes.number,
};

export default TableHeader;
