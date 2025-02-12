import TableHeader from "./table-header";
import PropTypes from "prop-types";
import styles from "./table-header-cell.module.css";

const TableHeaderCell = ({
  className = "",
  checkbox = true,
  color = "White",
  text = true,
}) => {
  return (
    <div
      className={[styles.tableHeaderCell, className].join(" ")}
      data-checkbox={checkbox}
      data-color={color}
      data-text={text}
    >
      <input className={styles.checkbox} type="checkbox" />
      <TableHeader
        arrow={false}
        helpIcon={false}
        state="Default"
        text="Vernis Selectif"
      />
    </div>
  );
};

TableHeaderCell.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  checkbox: PropTypes.bool,
  color: PropTypes.number,
  text: PropTypes.bool,
};

export default TableHeaderCell;
