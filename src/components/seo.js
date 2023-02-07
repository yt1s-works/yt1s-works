import * as React from "react"
import {Helmet} from "react-helmet";
import {useStaticQuery, graphql} from "gatsby"
import {locales} from "../data";

function Seo({description, lang, title, pathname, endpoint}) {
  const {site} = useStaticQuery(
      graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
      <Helmet>
        <html lang={lang || 'en'} amp/>
        <meta charSet="utf-8"/>
        <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
        <meta name="description" content={metaDescription}/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={metaDescription}/>
        <meta property="og:url" content={`https://yt1s.works${endpoint}`}/>
        <meta property="og:type" content="website"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:creator" content={site.siteMetadata?.author || ``}/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={metaDescription}/>
        <meta name="robots" content="noindex,nofollow"/>
        <link rel='canonical' href={`https://yt1s.works${endpoint}`}/>
        {locales.map((locale) => (
            locale.code === 'en' ?
                <link rel="alternate" href={`https://yt1s.works${pathname}`} hrefLang={locale.code}
                      key={locale.code}/> :
                <link rel="alternate" href={`https://yt1s.works/${locale.code}${pathname}`} hrefLang={locale.code}
                      key={locale.code}/>
        ))}
        <link rel="alternate" href={`https://yt1s.works${pathname}`} hrefLang="x-default"/>
      </Helmet>
  )
}

export default Seo
