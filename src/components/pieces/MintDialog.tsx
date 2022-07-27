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
import useLocales from "../../hooks/useLocales"
import styled from "styled-components"
import { toast } from "react-toastify"
import SingleMintButton from "../pieces/SingleMintButton"

interface Props {
  open: boolean
  handleOpen: () => void
  mintRateLimit: number
  mintPrice: number
  mintAvatar: () => void
  setNumberToMint: (numberToMint: number) => void
}

const MintDialog = (props: Props) => {
  const { locale } = useLocales()
  const [mintNumber, setMintNumber] = useState(1)
  const mintPrice = props.mintPrice / Math.pow(10, 24)

  const handleOpen = () => {
    console.log(props.open)
    props.handleOpen()
  }

  const controlClicked = (eve: React.MouseEvent, type: number) => {
    if (type == 1 && mintNumber >= props.mintRateLimit) {
      toast(`You can't mint over ${props.mintRateLimit}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      })
      return
    } else if (type == 2 && mintNumber <= 1) {
      toast(`You can't mint 0`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      })
      return
    }
    if (type == 1) {
      props.setNumberToMint(mintNumber + 1)
      setMintNumber(prev => prev + 1)
    } else if (type == 2) {
      props.setNumberToMint(mintNumber - 1)
      setMintNumber(prev => prev - 1)
    }
  }

  return (
    <Dialog
      open={props.open}
      handler={handleOpen}
      className={"rounded-[30px] px-4 py-8  sm:w-2/5 w-10/12 max-w-full"}
    >
      <DialogHeader className="justify-center">
        {locale?.mintAvatar}
      </DialogHeader>
      <DialogBody className="flex-col">
        <div className="px-8 py-2">
          <h3 className="text-black text-xl">{locale?.item}</h3>
        </div>
        <ImagePart className="flex p-4 justify-between">
          <Image src={settings.mintItem} alt="avatar" />
          <div className="flex flex-col justify-center">
            <div className="text-white flex align-center">
              <Button
                variant="text"
                className="!text-white"
                onClick={(eve: React.MouseEvent) => controlClicked(eve, 1)}
              >
                +
              </Button>
              <h4 className="leading-[3rem] text-[1.3rem]">{mintNumber}</h4>
              <Button
                variant="text"
                className="!text-white"
                onClick={(eve: React.MouseEvent) => controlClicked(eve, 2)}
              >
                -
              </Button>
            </div>
            <h4 className="text-center text-[#FFE2F0]">
              {mintPrice}&nbsp;&nbsp;Near
            </h4>
          </div>
        </ImagePart>
        <div className="flex justify-between text-black px-8 py-5">
          <label className="text-xl">{locale?.total}</label>
          <label>{mintPrice * mintNumber} Near</label>
        </div>
      </DialogBody>
      <DialogFooter className="!justify-center">
        <SingleMintButton
          onClick={props.mintAvatar}
          className="bg-white p-2 w-max flex justify-between items-center space-x-4 mx-auto md:mx-0 px-5  "
        />
      </DialogFooter>
    </Dialog>
  )
}

export default MintDialog

const ImagePart = styled.div`
  border-radius: 22px;
  background-origin: border-box;
  background-image: linear-gradient(to bottom, #bae7ff, #2eb5ff);
`
