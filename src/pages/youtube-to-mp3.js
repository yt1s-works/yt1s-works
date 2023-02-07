import * as React from "react"
import {FormattedMessage, useIntl} from "gatsby-plugin-intl"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Converter from "../components/converter"
import SectionsMp3 from "../components/sectionMp3"
import * as styles from "../styles/index.module.css"

const Mp3 = (props) => {
  const intl = useIntl();
  const {pathname} = props.location

  return (
      <Layout>
        <Seo
            lang={intl.locale}
            title={intl.formatMessage({id: "mp3-seo-title"})}
            pathname={pathname.split('/').length < 4 ? pathname : pathname.replace(/^\/?[^\/]+/, "")}
            endpoint={pathname}
            description={intl.formatMessage({id: "mp3-seo-desc"})}
        />
        <div className={styles.mainWrapper}>
          <h1><FormattedMessage id="mp3-title"/></h1>
          <p><FormattedMessage id="mp3-desc"/></p>
          <Converter/>
        </div>
        <SectionsMp3/>
      </Layout>
  )
};

export default Mp3
