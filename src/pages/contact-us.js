import React from "react"
import {injectIntl} from "gatsby-plugin-intl"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/index.module.css"

const ContactUs = ({intl}) => (
  <Layout>
    <Seo lang={intl.locale} title="Contact - The Best Youtube Downloader"/>
    <div className={styles.mainWrapper}>
      <div className={styles.contact}>
        <p><strong>Contact us</strong></p>
        <p>If you have any questions, complaints, or claims with respect to the our Services, please send us via
          email <a href="https://yt1s.works">yt1shelp@gmail.com</a></p>
        <br/>
        <p>Live chat support: coming soon...</p>
        <br/>
      </div>
    </div>
  </Layout>
);

export default injectIntl(ContactUs)