import * as React from "react"
import { Link, navigate } from "gatsby"
import useLocales from "../hooks/useLocales"
import Layout from "../components/layout"
import "../index.css"

const IndexPage = () => {
  const { locales } = useLocales()
  React.useEffect(() => {
    if (locales.length === 1) {
      navigate(`/${locales[0].id}/`)
    }
    const preferredLocale = window.navigator.language
    let matchingLocale = locales.find(
      l => l.id.replace("_", "-") === preferredLocale
    )
    if (!matchingLocale)
      matchingLocale = locales.find(
        l => l.id === preferredLocale.replace(/-[A-Z]{2}/, "")
      )
    if (matchingLocale) {
      navigate(`/${matchingLocale.id}/`)
    }
  }, [])

  return (
    <Layout>
      {locales.map(locale => (
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[10%] m-auto my-2 text-center">
          <p key={locale.id}>
            <Link to={`/${locale.id}/`}>{locale.viewIn}</Link>
          </p>
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage
