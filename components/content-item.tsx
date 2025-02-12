import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./content-item.module.css";

const ContentItem = ({
  className = "",
  breakpoint = "Desktop",
  size = "sm",
  type = "Heading",
  spacingGuide = false,
  paddingBottom = false,
}) => {
  return (
    <div
      className={[styles.contentItem, className].join(" ")}
      data-breakpoint={breakpoint}
      data-size={size}
      data-type={type}
    >
      <footer className={styles.paragraph}>
        <p
          className={styles.imprimezUnFlyer}
        >{`IMPRIMEZ UN FLYER DE COMMUNICATION PERCUTANT `}</p>
        <p className={styles.leFiyerEst}>
          Le fiyer est un outil utilisé pour communiquer rapidement et à grande
          échelle. En effet, généralernent il est imprimé par les professionnels
          pour donner une information au plus grand nombre. C'est pour cela
          qu'll est souvent distribué dans la rue ou déposé en libre service sur
          les comptoirs. Malgré son utilisation incessante, il est toujours
          autant regardé des destinataires. C'est pourquoi celui de vos clients
          doit étre original et attractif. Pour cela, nous vous proposons une
          impression personnalisée de haute qualité pour ces flyers Appelé
          également prospectus ou tract, il est un outil très prisé des
          entreprises et moderne. Qu'il soit informatif ou publicitaire, donne
          une ligne moderne à la démarche de communication de vos prospects.
        </p>
      </footer>
      {paddingBottom && (
        <div className={styles.paddingBottom}>
          {spacingGuide && (
            <div className={styles.measureSpacingGuide}>
              <div className={styles.number}>18px</div>
              <div className={styles.lines}>
                <div className={styles.measureLineBase}>
                  <Image
                    className={styles.endpointIcon}
                    width={16}
                    height
                    alt=""
                    src="/endpoint.svg"
                  />
                  <Image
                    className={styles.lineIcon}
                    width
                    height={18}
                    alt=""
                    src="/line.svg"
                  />
                  <Image
                    className={styles.endpointIcon1}
                    width={16}
                    height
                    alt=""
                    src="/endpoint.svg"
                  />
                </div>
                <div className={styles.measureLineBase1}>
                  <Image
                    className={styles.endpointIcon2}
                    width={700}
                    height
                    alt=""
                    src="/endpoint-2.svg"
                  />
                  <Image
                    className={styles.lineIcon1}
                    width
                    height={18}
                    alt=""
                  />
                  <Image
                    className={styles.endpointIcon3}
                    width={700}
                    height
                    alt=""
                    src="/endpoint-2.svg"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

ContentItem.propTypes = {
  className: PropTypes.string,
  spacingGuide: PropTypes.bool,
  paddingBottom: PropTypes.bool,

  /** Variant props */
  breakpoint: PropTypes.number,
  size: PropTypes.number,
  type: PropTypes.number,
};

export default ContentItem;
