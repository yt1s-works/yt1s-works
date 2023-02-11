import * as React from "react"
import {FormattedMessage, useIntl} from "gatsby-plugin-intl"
import Seo from "../components/seo"
import Layout from "../components/layout"
import * as styles from "../styles/download.module.css"

const Download = (props) => {
  const intl = useIntl();
  const inputValue = props?.location?.state?.url;
  const {pathname} = props.location

  return (
    <Layout>
      <Seo
        lang={intl.locale}
        title={intl.formatMessage({id: "download-seo-title"})}
        pathname={pathname.split('/').length < 4 ? pathname : pathname.replace(/^\/?[^\/]+/, "")}
        endpoint={pathname}
        description={intl.formatMessage({id: "download-seo-desc"})}
        index="noindex,nofollow"
      />
      <div className={styles.mainWrapper}>
        <h1><FormattedMessage id="downloader-title"/></h1>
        <p><FormattedMessage id="downloader-desc"/></p>
        <div className={styles.holdsIframe}>
          <iframe
            className={styles.iframe}
            src={`https://yougomusic.com/api/widgetv2?url=${inputValue}`}
            width="100%" height="100%" allowTransparency="true" scrolling="yes" style={{border: "none"}}/>
        </div>
      </div>
    </Layout>
  )
};

export default Download
