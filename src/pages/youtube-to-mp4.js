import * as React from "react"
import {FormattedMessage, useIntl} from "gatsby-plugin-intl"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Converter from "../components/converter"
import SectionsMp4 from "../components/sectionMp4"
import * as styles from "../styles/index.module.css"

const Mp4 = (props) => {
  const intl = useIntl();
  const {pathname} = props.location

  return (
    <Layout>
      <Seo
          lang={intl.locale}
          title={intl.formatMessage({id: "mp4-seo-title"})}
          pathname={pathname.split('/').length < 4 ? pathname : pathname.replace(/^\/?[^\/]+/, "")}
          endpoint={pathname}
          description={intl.formatMessage({id: "mp4-seo-desc"})}
      />
      <div className={styles.mainWrapper}>
        <h1><FormattedMessage id="mp4-title"/></h1>
        <div><FormattedMessage id="mp4-desc"/></div>
        <Converter/>
      </div>
      <SectionsMp4/>
    </Layout>
  )
};

export default Mp4
