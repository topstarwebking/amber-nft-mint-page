import React, { Fragment, useState } from "react"
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react"
import settings from "../../../config/settings.json"
import Image from "../image"
import { signIn } from "../../near"
import useLocales from "../../hooks/useLocales"
import styled from "styled-components"

interface Props {
  open: boolean
  handleOpen: () => void
}

const NotLoggedIn = (props: Props) => {
  const { locale } = useLocales()
  const handleOpen = () => {
    console.log(props.open)
    props.handleOpen()
  }

  const onDownload = () => {
    window.location.replace("https://testflight.apple.com/join/KHYIS8no")
  }

  return (
    <Dialog
      open={props.open}
      handler={handleOpen}
      className="rounded-[30px] py-6"
    >
      <DialogHeader className="!justify-center">
        <h1 className="text-3xl">{locale?.notLoggedIn}</h1>
      </DialogHeader>
      <DialogBody className="flex-col py-4 px-24">
        <BlueButton className="rounded-full" onClick={signIn}>
          <h1 className="tracking-[2px] !normal-case">
            {locale?.connectWallet}
          </h1>
        </BlueButton>
        <BlueButton className="rounded-full">
          <h1 className="tracking-[2px] !normal-case">
            {locale?.continueAsGuest}
          </h1>
        </BlueButton>
        <BlueButton className="rounded-full" onClick={onDownload}>
          <h1 className="tracking-[2px] !normal-case">{locale?.download}</h1>
        </BlueButton>
      </DialogBody>
    </Dialog>
  )
}

export default NotLoggedIn

const BlueButton = styled(Button)`
  border-radius: 22px;
  margin: 5px 0;
  letter-spacing: 
  text-transform: none !important;
  background-origin: border-box;
  background-image: linear-gradient(60%, #2ab4ff, #6fccff);
`
