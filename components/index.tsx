import { useCallback } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import Image from "next/image";
import TableHeaderCell from "./table-header-cell";
import ButtonsButton from "./buttons-button";
import FAQItem from "./f-a-q-item";
import ContentItem from "./content-item";
import PropTypes from "prop-types";
import styles from "./index.module.css";

const Root = ({ className = "" }) => {
  const onAccordionHeaderClick = useCallback((event) => {
    const element = event.target;

    const accItem = element.closest("[data-acc-item]") || element;
    const accContent = accItem.querySelector("[data-acc-content]");
    const isOpen = accItem.hasAttribute("data-acc-open");
    const nextOuterSibling =
      accItem?.nextElementSibling || accItem?.parentElement?.nextElementSibling;
    const prevOuterSibling =
      accItem?.previousElementSibling ||
      accItem?.parentElement?.previousElementSibling;
    const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
      ? accItem?.nextElementSibling ||
        nextOuterSibling?.querySelector("[data-acc-item]") ||
        nextOuterSibling
      : accItem?.previousElementSibling ||
        prevOuterSibling?.querySelector("[data-acc-item]") ||
        prevOuterSibling;
    const siblingAccItem =
      siblingContainerAccItem?.querySelector("[data-acc-item]") ||
      siblingContainerAccItem;

    if (!siblingAccItem) return;
    const originalDisplay = "flex";
    const siblingDisplay = "flex";

    const openStyleObject = {
      "grid-template-rows": "1fr",
    };
    const closeStyleObject = {
      "padding-top": "0px",
      "padding-bottom": "0px",
      "margin-bottom": "0px",
      "margin-top": "0px",
      "grid-template-rows": "0fr",
    };

    function applyStyles(element, styleObject) {
      Object.assign(element.style, styleObject);
    }

    function removeStyles(element, styleObject) {
      Object.keys(styleObject).forEach((key) => {
        element?.style.removeProperty(key);
      });
    }

    if (isOpen) {
      removeStyles(accContent, openStyleObject);
      applyStyles(accContent, closeStyleObject);

      setTimeout(() => {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = siblingDisplay;
        }
      }, 100);
    } else {
      if (accItem) {
        accItem.style.display = "none";
        siblingAccItem.style.display = originalDisplay;
      }
      const siblingAccContent =
        siblingAccItem?.querySelector("[data-acc-content]");
      setTimeout(() => {
        removeStyles(siblingAccContent, closeStyleObject);
        applyStyles(siblingAccContent, openStyleObject);
      }, 1);
    }
  }, []);

  return (
    <div className={[styles.root, className].join(" ")}>
      <main className={styles.main}>
        <section className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
            <div className={styles.frameDiv} />
          </div>
          <div className={styles.dropdownInputParent}>
            <div className={styles.dropdownInput} data-acc-group>
              <div
                className={styles.inputDropdown}
                data-acc-item
                data-acc-open
                data-acc-original
                data-acc-default-open
              >
                <div className={styles.inputWithLabel}>
                  <div className={styles.labelWrapper}>
                    <a className={styles.label}>Quantité</a>
                    <div className={styles.asterisk}>*</div>
                    <Image
                      className={styles.helpIcon}
                      width={16}
                      height={16}
                      alt=""
                      src="/help-icon.svg"
                    />
                  </div>
                  <FormControl
                    className={styles.input}
                    variant="standard"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "338px",
                      height: "40px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                    data-acc-header
                    onClick={onAccordionHeaderClick}
                  >
                    <InputLabel color="primary" />
                    <Select color="primary" disableUnderline displayEmpty />
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className={styles.hintText}>
                  This is a hint text to help user.
                </div>
              </div>
              <div className={styles.inputDropdownClose} data-acc-item>
                <div className={styles.inputWithLabel}>
                  <div className={styles.labelWrapper}>
                    <a className={styles.label}>Quantité</a>
                    <div className={styles.asterisk}>*</div>
                    <Image
                      className={styles.helpIcon}
                      width={16}
                      height={16}
                      alt=""
                      src="/help-icon.svg"
                    />
                  </div>
                  <FormControl
                    className={styles.input}
                    variant="standard"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "338px",
                      height: "40px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                    data-acc-header
                    onClick={onAccordionHeaderClick}
                  >
                    <InputLabel color="primary" />
                    <Select color="primary" disableUnderline displayEmpty />
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className={styles.hintText}>
                  This is a hint text to help user.
                </div>
                <div className={styles.accordionContent} />
                <div className={styles.div} />
              </div>
              <div
                className={styles.inputDropdown}
                data-acc-item
                data-acc-open
                data-acc-original
                data-acc-default-open
              >
                <div className={styles.inputWithLabel}>
                  <div className={styles.labelWrapper}>
                    <a className={styles.label}>Format</a>
                    <div className={styles.asterisk}>*</div>
                    <Image
                      className={styles.helpIcon}
                      width={16}
                      height={16}
                      alt=""
                      src="/help-icon.svg"
                    />
                  </div>
                  <FormControl
                    className={styles.input}
                    variant="standard"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "338px",
                      height: "40px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                    data-acc-header
                    onClick={onAccordionHeaderClick}
                  >
                    <InputLabel color="primary" />
                    <Select color="primary" disableUnderline displayEmpty />
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className={styles.hintText}>
                  This is a hint text to help user.
                </div>
              </div>
              <div className={styles.inputDropdownClose} data-acc-item>
                <div className={styles.inputWithLabel}>
                  <div className={styles.labelWrapper}>
                    <a className={styles.label}>Quantité</a>
                    <div className={styles.asterisk}>*</div>
                    <Image
                      className={styles.helpIcon}
                      width={16}
                      height={16}
                      alt=""
                      src="/help-icon.svg"
                    />
                  </div>
                  <FormControl
                    className={styles.input}
                    variant="standard"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "338px",
                      height: "40px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                    data-acc-header
                    onClick={onAccordionHeaderClick}
                  >
                    <InputLabel color="primary" />
                    <Select color="primary" disableUnderline displayEmpty />
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className={styles.hintText}>
                  This is a hint text to help user.
                </div>
                <div className={styles.accordionContent} />
                <div className={styles.div} />
              </div>
              <div
                className={styles.inputDropdown}
                data-acc-item
                data-acc-open
                data-acc-original
                data-acc-default-open
              >
                <div className={styles.inputWithLabel}>
                  <div className={styles.labelWrapper}>
                    <a className={styles.label}>Support</a>
                    <div className={styles.asterisk}>*</div>
                    <Image
                      className={styles.helpIcon}
                      width={16}
                      height={16}
                      alt=""
                      src="/help-icon.svg"
                    />
                  </div>
                  <FormControl
                    className={styles.input}
                    variant="standard"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "338px",
                      height: "40px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                    data-acc-header
                    onClick={onAccordionHeaderClick}
                  >
                    <InputLabel color="primary" />
                    <Select color="primary" disableUnderline displayEmpty />
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className={styles.hintText}>
                  This is a hint text to help user.
                </div>
              </div>
              <div className={styles.inputDropdownClose} data-acc-item>
                <div className={styles.inputWithLabel}>
                  <div className={styles.labelWrapper}>
                    <a className={styles.label}>Quantité</a>
                    <div className={styles.asterisk}>*</div>
                    <Image
                      className={styles.helpIcon}
                      width={16}
                      height={16}
                      alt=""
                      src="/help-icon.svg"
                    />
                  </div>
                  <FormControl
                    className={styles.input}
                    variant="standard"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "338px",
                      height: "40px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                    data-acc-header
                    onClick={onAccordionHeaderClick}
                  >
                    <InputLabel color="primary" />
                    <Select color="primary" disableUnderline displayEmpty />
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className={styles.hintText}>
                  This is a hint text to help user.
                </div>
                <div className={styles.accordionContent} />
                <div className={styles.div} />
              </div>
              <div
                className={styles.inputDropdown}
                data-acc-item
                data-acc-open
                data-acc-original
                data-acc-default-open
              >
                <div className={styles.inputWithLabel}>
                  <div className={styles.labelWrapper}>
                    <div className={styles.label6}>Couleur d’impression</div>
                    <div className={styles.asterisk}>*</div>
                    <Image
                      className={styles.helpIcon}
                      width={16}
                      height={16}
                      alt=""
                      src="/help-icon.svg"
                    />
                  </div>
                  <FormControl
                    className={styles.input}
                    variant="standard"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "338px",
                      height: "40px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                    data-acc-header
                    onClick={onAccordionHeaderClick}
                  >
                    <InputLabel color="primary" />
                    <Select color="primary" disableUnderline displayEmpty />
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className={styles.hintText}>
                  This is a hint text to help user.
                </div>
              </div>
              <div className={styles.inputDropdownClose} data-acc-item>
                <div className={styles.inputWithLabel}>
                  <div className={styles.labelWrapper}>
                    <a className={styles.label}>Quantité</a>
                    <div className={styles.asterisk}>*</div>
                    <Image
                      className={styles.helpIcon}
                      width={16}
                      height={16}
                      alt=""
                      src="/help-icon.svg"
                    />
                  </div>
                  <FormControl
                    className={styles.input}
                    variant="standard"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "338px",
                      height: "40px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                    data-acc-header
                    onClick={onAccordionHeaderClick}
                  >
                    <InputLabel color="primary" />
                    <Select color="primary" disableUnderline displayEmpty />
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className={styles.hintText}>
                  This is a hint text to help user.
                </div>
                <div className={styles.accordionContent} />
                <div className={styles.div} />
              </div>
              <div
                className={styles.inputDropdown}
                data-acc-item
                data-acc-open
                data-acc-original
                data-acc-default-open
              >
                <div className={styles.inputWithLabel}>
                  <div className={styles.labelWrapper}>
                    <div className={styles.label6}>Orientation</div>
                    <div className={styles.asterisk}>*</div>
                    <Image
                      className={styles.helpIcon}
                      width={16}
                      height={16}
                      alt=""
                      src="/help-icon.svg"
                    />
                  </div>
                  <FormControl
                    className={styles.input}
                    variant="standard"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "338px",
                      height: "40px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                    data-acc-header
                    onClick={onAccordionHeaderClick}
                  >
                    <InputLabel color="primary" />
                    <Select color="primary" disableUnderline displayEmpty />
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className={styles.hintText}>
                  This is a hint text to help user.
                </div>
              </div>
              <div className={styles.inputDropdownClose} data-acc-item>
                <div className={styles.inputWithLabel}>
                  <div className={styles.labelWrapper}>
                    <a className={styles.label}>Quantité</a>
                    <div className={styles.asterisk}>*</div>
                    <Image
                      className={styles.helpIcon}
                      width={16}
                      height={16}
                      alt=""
                      src="/help-icon.svg"
                    />
                  </div>
                  <FormControl
                    className={styles.input}
                    variant="standard"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "338px",
                      height: "40px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                    data-acc-header
                    onClick={onAccordionHeaderClick}
                  >
                    <InputLabel color="primary" />
                    <Select color="primary" disableUnderline displayEmpty />
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className={styles.hintText}>
                  This is a hint text to help user.
                </div>
                <div className={styles.accordionContent} />
                <div className={styles.div} />
              </div>
              <div
                className={styles.inputDropdown}
                data-acc-item
                data-acc-open
                data-acc-original
                data-acc-default-open
              >
                <div className={styles.inputWithLabel}>
                  <div className={styles.labelWrapper}>
                    <div className={styles.label6}>Face imprimée</div>
                    <div className={styles.asterisk}>*</div>
                    <Image
                      className={styles.helpIcon}
                      width={16}
                      height={16}
                      alt=""
                      src="/help-icon.svg"
                    />
                  </div>
                  <FormControl
                    className={styles.input}
                    variant="standard"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "338px",
                      height: "40px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                    data-acc-header
                    onClick={onAccordionHeaderClick}
                  >
                    <InputLabel color="primary" />
                    <Select color="primary" disableUnderline displayEmpty />
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className={styles.hintText}>
                  This is a hint text to help user.
                </div>
              </div>
              <div className={styles.inputDropdownClose} data-acc-item>
                <div className={styles.inputWithLabel}>
                  <div className={styles.labelWrapper}>
                    <a className={styles.label}>Quantité</a>
                    <div className={styles.asterisk}>*</div>
                    <Image
                      className={styles.helpIcon}
                      width={16}
                      height={16}
                      alt=""
                      src="/help-icon.svg"
                    />
                  </div>
                  <FormControl
                    className={styles.input}
                    variant="standard"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "338px",
                      height: "40px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                    data-acc-header
                    onClick={onAccordionHeaderClick}
                  >
                    <InputLabel color="primary" />
                    <Select color="primary" disableUnderline displayEmpty />
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className={styles.hintText}>
                  This is a hint text to help user.
                </div>
                <div className={styles.accordionContent} />
                <div className={styles.div} />
              </div>
              <div
                className={styles.inputDropdown}
                data-acc-item
                data-acc-open
                data-acc-original
                data-acc-default-open
              >
                <div className={styles.inputWithLabel}>
                  <div className={styles.labelWrapper}>
                    <div className={styles.label6}>Pelliculage</div>
                    <div className={styles.asterisk}>*</div>
                    <Image
                      className={styles.helpIcon}
                      width={16}
                      height={16}
                      alt=""
                      src="/help-icon.svg"
                    />
                  </div>
                  <FormControl
                    className={styles.input}
                    variant="standard"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "338px",
                      height: "40px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                    data-acc-header
                    onClick={onAccordionHeaderClick}
                  >
                    <InputLabel color="primary" />
                    <Select color="primary" disableUnderline displayEmpty />
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className={styles.hintText}>
                  This is a hint text to help user.
                </div>
              </div>
              <div className={styles.inputDropdownClose} data-acc-item>
                <div className={styles.inputWithLabel}>
                  <div className={styles.labelWrapper}>
                    <a className={styles.label}>Quantité</a>
                    <div className={styles.asterisk}>*</div>
                    <Image
                      className={styles.helpIcon}
                      width={16}
                      height={16}
                      alt=""
                      src="/help-icon.svg"
                    />
                  </div>
                  <FormControl
                    className={styles.input}
                    variant="standard"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "338px",
                      height: "40px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                    data-acc-header
                    onClick={onAccordionHeaderClick}
                  >
                    <InputLabel color="primary" />
                    <Select color="primary" disableUnderline displayEmpty />
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className={styles.hintText}>
                  This is a hint text to help user.
                </div>
                <div className={styles.accordionContent} />
                <div className={styles.div} />
              </div>
              <div
                className={styles.inputDropdown}
                data-acc-item
                data-acc-open
                data-acc-original
                data-acc-default-open
              >
                <div className={styles.inputWithLabel}>
                  <div className={styles.labelWrapper}>
                    <div className={styles.label6}>Coins</div>
                    <div className={styles.asterisk}>*</div>
                    <Image
                      className={styles.helpIcon}
                      width={16}
                      height={16}
                      alt=""
                      src="/help-icon.svg"
                    />
                  </div>
                  <FormControl
                    className={styles.input}
                    variant="standard"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "338px",
                      height: "40px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                    data-acc-header
                    onClick={onAccordionHeaderClick}
                  >
                    <InputLabel color="primary" />
                    <Select color="primary" disableUnderline displayEmpty />
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className={styles.hintText}>
                  This is a hint text to help user.
                </div>
              </div>
              <div className={styles.inputDropdownClose} data-acc-item>
                <div className={styles.inputWithLabel}>
                  <div className={styles.labelWrapper}>
                    <a className={styles.label}>Quantité</a>
                    <div className={styles.asterisk}>*</div>
                    <Image
                      className={styles.helpIcon}
                      width={16}
                      height={16}
                      alt=""
                      src="/help-icon.svg"
                    />
                  </div>
                  <FormControl
                    className={styles.input}
                    variant="standard"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "338px",
                      height: "40px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                    data-acc-header
                    onClick={onAccordionHeaderClick}
                  >
                    <InputLabel color="primary" />
                    <Select color="primary" disableUnderline displayEmpty />
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className={styles.hintText}>
                  This is a hint text to help user.
                </div>
                <div className={styles.accordionContent} />
                <div className={styles.div} />
              </div>
              <div
                className={styles.inputDropdown}
                data-acc-item
                data-acc-open
                data-acc-original
                data-acc-default-open
              >
                <div className={styles.inputWithLabel}>
                  <div className={styles.labelWrapper}>
                    <div className={styles.label6}>Déoupe</div>
                    <div className={styles.asterisk}>*</div>
                    <Image
                      className={styles.helpIcon}
                      width={16}
                      height={16}
                      alt=""
                      src="/help-icon.svg"
                    />
                  </div>
                  <FormControl
                    className={styles.input}
                    variant="standard"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "692px",
                      height: "40px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                    data-acc-header
                    onClick={onAccordionHeaderClick}
                  >
                    <InputLabel color="primary" />
                    <Select color="primary" disableUnderline displayEmpty />
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className={styles.hintText}>
                  This is a hint text to help user.
                </div>
              </div>
              <div className={styles.inputDropdownClose} data-acc-item>
                <div className={styles.inputWithLabel}>
                  <div className={styles.labelWrapper}>
                    <a className={styles.label}>Quantité</a>
                    <div className={styles.asterisk}>*</div>
                    <Image
                      className={styles.helpIcon}
                      width={16}
                      height={16}
                      alt=""
                      src="/help-icon.svg"
                    />
                  </div>
                  <FormControl
                    className={styles.input}
                    variant="standard"
                    sx={{
                      borderRadius: "0px 0px 0px 0px",
                      width: "338px",
                      height: "40px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "40px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                    data-acc-header
                    onClick={onAccordionHeaderClick}
                  >
                    <InputLabel color="primary" />
                    <Select color="primary" disableUnderline displayEmpty />
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className={styles.hintText}>
                  This is a hint text to help user.
                </div>
                <div className={styles.accordionContent} />
                <div className={styles.div} />
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.headingAndSubheading}>
                <b className={styles.subheading}>Options</b>
              </div>
              <div className={styles.tableHeader}>
                <div className={styles.tableHeaderCellParent}>
                  <TableHeaderCell checkbox color="White" text />
                  <TableHeaderCell checkbox color="White" text />
                  <TableHeaderCell checkbox color="White" text />
                  <TableHeaderCell checkbox color="White" text />
                </div>
                <div className={styles.tableHeaderCellGroup}>
                  <TableHeaderCell checkbox color="White" text />
                  <TableHeaderCell checkbox color="White" text />
                  <TableHeaderCell checkbox color="White" text />
                  <TableHeaderCell checkbox color="White" text />
                </div>
              </div>
            </div>
            <ButtonsButton
              hierarchy="Primary"
              icon="Default"
              size="md"
              state="Default"
              iconTrailing={false}
              iconLeading={false}
            />
          </div>
        </section>
        <section className={styles.contentParent}>
          <div className={styles.content1}>
            <div className={styles.headingAndSubheading1}>
              <h2 className={styles.subheading1}>FAQs</h2>
            </div>
            <div className={styles.content2}>
              <FAQItem
                breakpoint="Desktop"
                divider
                expanded
                iconPosition="Right"
                icon
              />
              <FAQItem
                breakpoint="Desktop"
                divider
                expanded
                iconPosition="Right"
                icon
                minusCircleIconMargin="0"
              />
              <div className={styles.faqItem}>
                <div className={styles.content3}>
                  <div className={styles.textAndSupportingText}>
                    <div className={styles.text}>
                      What is your cancellation policy?
                    </div>
                  </div>
                  <div className={styles.iconWrap}>
                    <Image
                      className={styles.plusCircleIcon}
                      loading="lazy"
                      width={24}
                      height={24}
                      alt=""
                      src="/pluscircle.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.faqItem}>
                <div className={styles.content3}>
                  <div className={styles.textAndSupportingText}>
                    <div className={styles.text}>
                      What is your cancellation policy?
                    </div>
                  </div>
                  <div className={styles.iconWrap}>
                    <Image
                      className={styles.plusCircleIcon}
                      loading="lazy"
                      width={24}
                      height={24}
                      alt=""
                      src="/pluscircle.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.faqItem}>
                <div className={styles.content3}>
                  <div className={styles.textAndSupportingText}>
                    <div className={styles.text}>
                      What is your cancellation policy?
                    </div>
                  </div>
                  <div className={styles.iconWrap}>
                    <Image
                      className={styles.plusCircleIcon}
                      loading="lazy"
                      width={24}
                      height={24}
                      alt=""
                      src="/pluscircle.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.faqItem}>
                <div className={styles.content3}>
                  <div className={styles.textAndSupportingText}>
                    <div className={styles.text}>
                      Can other info be added to an invoice?
                    </div>
                  </div>
                  <div className={styles.iconWrap}>
                    <Image
                      className={styles.plusCircleIcon}
                      loading="lazy"
                      width={24}
                      height={24}
                      alt=""
                      src="/pluscircle.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.content7}>
            <div className={styles.headingAndSubheading1}>
              <h2 className={styles.subheading1}>
                Pour aller un peu plus loin
              </h2>
            </div>
            <div className={styles.richText}>
              <ContentItem
                breakpoint="Desktop"
                size="lg"
                type="Paragraph"
                spacingGuide={false}
                paddingBottom={false}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

Root.propTypes = {
  className: PropTypes.string,
};

export default Root;
