import React from "react"
import Image from "../image"
import settings from "../../../config/settings.json"
import { Token } from "../../hooks/useTenk"
import useLocales from "../../hooks/useLocales"

interface Props {
  key: string
  element: Token
}
const NFTCard = (props: Props) => {
  const { locale } = useLocales()
  return (
    <div className="rounded-3xl bg-[#06A4FF] w-[174px] lg:w-[240px] h-[249px] lg:h-[341px] flex justify-center items-center relative">
      <img
        src={props.element.media}
        alt="nft-card"
        className="w-[100%] h-[100%] rounded-[10px]"
      />
      <div className="flex items-center flex-col absolute bg-black/40 w-full bottom-0 rounded-b-3xl h-[48%] backdrop-blur-lg text-white">
        <h5 className="text-xl font-semibold mt-5">
          {props.element.metadata?.title}
        </h5>
        <p className="text-[0.86em] my-2">Rarity: 335.5</p>
        <button
          className="btn btn-outline btn-sm bg-white gap-2 font-semibold capitalize rounded-full"
          style={{
            border: "1px solid rgba(57, 19, 184, 0.2)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {locale?.search}
        </button>
      </div>
    </div>
  )
}

export default NFTCard
