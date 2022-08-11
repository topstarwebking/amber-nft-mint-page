/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import settings from "../../config/settings.json"

type MetaTag =
  | {
      name: string
      content: string
    }
  | {
      property: string
      content: string
    }

interface Props {
  description: string
  lang: string
  siteTitle: string
  meta?: MetaTag[]
  favicon?: string
  image?: string
}

function Seo({
  description,
  lang,
  meta = [],
  siteTitle,
  favicon,
  image,
}: Props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            siteUrl
          }
        }
      }
    `
  )
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={siteTitle}
      link={
        favicon
          ? [{ href: favicon, rel: "icon", type: "image/png" }]
          : undefined
      }
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: siteTitle,
        },
        {
          property: `og:url`,
          content: site.siteMetadata?.siteUrl || ``,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:image`,
          content: !image ? "" : new URL(image, settings.siteUrl).href,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: siteTitle,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `twitter:image`,
          content: !image ? "" : new URL(image, settings.siteUrl).href,
        },
      ].concat(meta)}
    >
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-722KSP2KF8"
      ></script>
    </Helmet>
  )
}
export default Seo
