import * as React from "react"
import {FormattedMessage, navigate} from "gatsby-plugin-intl"
import {bestDescription, links, stepCount, typeDesc, typeIcon} from "../mp3"
import * as styles from "../styles/sections.module.css"

const SectionsMp3 = () => {
  const handleClickConvert = () => {
    navigate("/")
  };

  return (
    <div className={styles.container}>
      <div className={styles.sectionBest}>
        <h2><FormattedMessage id="best-desc-title-mp3"/></h2>
        <div>
          {bestDescription.map((item, i) => (
            <p key={i} className={styles.description}>{item.description}</p>
          ))}
        </div>
        <ul className={styles.listItem}>
          {links.map((link, i) => (
            <li key={i} className={styles.list}>
              <div className={styles.image} style={link.style}>{link.url}</div>
              <div className={styles.desList}>
                <h3>{link.text}</h3>
                <p className={styles.boxDes}>{link.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.sectionDownType}>
          <h2><FormattedMessage id="download-extensions-title-mp3"/></h2>
          <ul className={styles.listIcon}>
            {typeIcon.map((link, i) => (
              <li key={i} className={styles.listIconImg}>{link.url}</li>
            ))}
          </ul>
          <p className={styles.description}>{typeDesc}</p>
          <button
            className={styles.convertNext}
            onClick={handleClickConvert}>
            <FormattedMessage id="convert-now-btn"/>
          </button>
        </div>
        <div className={styles.sectionCount}>
          <h2><FormattedMessage id="how-download-title-mp3"/></h2>
          <ul className={styles.listCount}>
            {stepCount.map((item, i) => (
              <li key={i} className={styles.listWrapper}>
                <span style={item.style} className={styles.listStep}>{item.number}</span>
                <span className={styles.listText}>{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
};

export default SectionsMp3
