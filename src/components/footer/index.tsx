import React from "react"
import Image from "../image"
import LangPicker from "../lang-picker"
import useLocales from "../../hooks/useLocales"
import settings from "../../../config/settings.json"

export default function Footer() {
  const { locale } = useLocales()
  if (!locale) return null
  return (
    <footer
      className={` container mx-auto flex justify-between direc flex-row-reverse absolute bottom-1`}
    >
      <LangPicker />
      <div>
        {/* <span>
          Powered By <a href="https://tenk.dev/">AMBER</a>
        </span> */}
        <a href="https://tenk.dev/">
          {/* <Image
            src={settings.logo}
            alt="TENK Logo"
            className="w-[16px] h-[16px]"
          /> */}
        </a>
      </div>
    </footer>
  )
}
