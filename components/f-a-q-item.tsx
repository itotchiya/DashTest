import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./f-a-q-item.module.css";

const FAQItem = ({
  className = "",
  breakpoint = "Desktop",
  divider = false,
  expanded = true,
  iconPosition = "Right",
  icon = true,
  minusCircleIconMargin,
}) => {
  const minusCircleIconStyle = useMemo(() => {
    return {
      margin: minusCircleIconMargin,
    };
  }, [minusCircleIconMargin]);

  return (
    <div
      className={[styles.faqItem, className].join(" ")}
      data-breakpoint={breakpoint}
      data-divider={divider}
      data-expanded={expanded}
      data-iconPosition={iconPosition}
    >
      <div className={styles.content}>
        <div className={styles.textAndSupportingText}>
          <div className={styles.text}>Can I change my plan later?</div>
          <div className={styles.supportingText}>
            Yes, you can try us for free for 30 days. If you want, we’ll provide
            you with a free, personalized 30-minute onboarding call to get you
            up and running as soon as possible.
          </div>
        </div>
        {icon && (
          <div className={styles.iconWrap}>
            <Image
              className={styles.minusCircleIcon}
              loading="lazy"
              width={24}
              height={24}
              alt=""
              src="/minuscircle.svg"
              style={minusCircleIconStyle}
            />
          </div>
        )}
      </div>
    </div>
  );
};

FAQItem.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.bool,

  /** Variant props */
  breakpoint: PropTypes.number,
  divider: PropTypes.bool,
  expanded: PropTypes.bool,
  iconPosition: PropTypes.number,

  /** Style props */
  minusCircleIconMargin: PropTypes.string,
};

export default FAQItem;
