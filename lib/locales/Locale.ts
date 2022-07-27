// This file specifies the exact shape of data required in the locales files
// located in `config/locales/*.json`
//
// We then use `create-validator-ts` to generate a JSON validator based on
// these types, which lives in `./Locale.validator.ts`

/**
 * Commonmark-formatted markdown. @see https://remarkjs.github.io/react-markdown/
 */
type Markdown = string

// TODO: should be able to import Action from ./runtimeUtils, but currently breaks with typescript-json-validator
// import type { Action } from './runtimeUtils'
type Action =
  | "ADD_TO_CALENDAR(SALE_START)"
  | "ADD_TO_CALENDAR(PRESALE_START)"
  | "SIGN_IN"
  | "MINT"
  | "GO_TO_PARAS"

export const requiredHeroFields = [
  "title",
  "body",
  "cta",
  "action",
  "remaining",
] as const

export const optionalHeroFields = [
  "backgroundImage",
  "backgroundColor",
  "image",
  "video",
  "ps",
  "setNumber",
] as const

export type Hero = {
  [K in typeof requiredHeroFields[number]]: K extends "action"
    ? Action
    : Markdown
} & {
  [K in typeof optionalHeroFields[number]]?: string
}

export const userStatuses = ["signedOut", "signedIn", "vip"] as const

type HeroSaleStatus = Partial<Hero> & {
  [K in typeof userStatuses[number]]?: Partial<Hero>
}

export const saleStatuses = [
  "saleClosed",
  "presale",
  "saleOpen",
  "allSold",
] as const

export type RawHeroTree = Partial<Hero> & {
  [K in typeof saleStatuses[number]]?: HeroSaleStatus
}

export interface SectionI18n {
  text: Markdown
  image?: string
  video?: string
  backgroundImage?: string
  backgroundColor?: string
  className?: string
  blocks?: {
    image?: string
    text?: string
    linkTo?: string
  }[]
}

export interface Locale {
  viewIn: string
  langPicker: string
  mint3DNFT: string
  billedOnce: string
  siteTitle: string
  recentlyMinted: string
  mintDescription: string
  title: string
  description: string
  calendarEvent: string
  connectWallet: string
  signOut: string
  new: string
  whitepaper: string
  tokenomics: string
  marketplace: string
  contactus: string
  profile: string
  myNFTs: string
  nextNFT: string
  prevNFT: string
  close: string
  zoomIn: string
  zoomOut: string
  hero: RawHeroTree
  extraSections?: SectionI18n[]
  mint: string
  play: string
  notLoggedIn: string
  continueAsGuest: string
  download: string
  mintAvatar: string
  item: string
  total: string
  near: string
  congratulation: string
  youritem: string
  successMinted: string
  share: string
  sorry: string
  sorryDesc: string
  goBack: string
  playAmberGame: string
  getFullownership: string
  receivingRareNFT: string
  year: string
  months: string
  month: string
  obtainStatus: string
  becomeMember: string
  recentlyMintedDesc: string
  rarity: string
  getNFTUnique: string
  getNFTDesc: string
  participateGame: string
  gameDesc: string
  trade: string
  tradeDesc: string
  tradeSmallDesc: string
  rule1: string
  rule2: string
  rule3: string
  rule4: string
  rule5: string
  rule6: string
  rule7: string
  rule8: string
  instruct1: string
  instruct2: string
  instruct3: string
  instruct4: string
  instruct5: string
  instruct6: string
  instruct7: string
  instruct8: string
  instruct9: string
  instruct10: string
  instruct11: string
  partners: string
  joinUs: string
  copywrite: string
  about: string
  vote: string
  login: string
  search: string
}
