import React, { Fragment, useState } from "react"
import settings from "../../../config/settings.json"
import useLocales from "../../hooks/useLocales"
import styled from "styled-components"
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react"
import Image from "../image"

interface Props {
  open: boolean
  handleOpen: () => void
  media?: string | undefined
  id?: string | undefined
}

const Congratulation = (props: Props) => {
  const { locale } = useLocales()

  const handleOpen = () => {
    console.log(props.open)
    props.handleOpen()
  }

  return (
    <Dialog
      open={props.open}
      handler={handleOpen}
      className={"rounded-[30px] px-4 py-2 sm:w-2/5 w-10/12 max-w-full"}
    >
      <DialogHeader className="justify-center flex-col">
        <Congrats className="text-[40px]">{locale?.congratulation}</Congrats>
        <p className="text-[20px] w-2/3 mx-auto leading-[1.7rem] mb-3 text-center">
          {locale?.youritem}&nbsp; #{props.id} &nbsp;{locale?.successMinted}
        </p>
      </DialogHeader>
      <DialogBody className="flex-col !justify-center items-center">
        {props.media ? (
          <img src={props.media} className="w-52" />
        ) : (
          <Image alt="Your Item Image" src={settings.mintItem} />
        )}
      </DialogBody>
      <DialogFooter className="!justify-center">share</DialogFooter>
    </Dialog>
  )
}

export default Congratulation

const Congrats = styled.h1`
  background-image: linear-gradient(60deg, #ffbcdd, #2ab4ff);
  font-weight: 700;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
