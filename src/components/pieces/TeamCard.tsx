import React from "react"
import styled from "styled-components"

interface Props {
  id: number
  image: string
  name: string
  role: string
  link: string
}

const TeamCard = (props: Props) => {
  return (
    <CardBox className="text-center md:w-[204px] rounded-[15px] md:h-[283px] w-[112.82px] h-[156.51px]">
      <div className="flex justify-center">
        <a href={props.link} target="_blank">
          <img
            className="w-[86.83px] h-[87.31px] md:w-[157px] md:h-[157.87px] hover:scale-105 transition-all duration-200"
            alt={props.name}
            src={props.image}
          />
        </a>
      </div>
      <h3 className="text-[11px] md:text-xl font-semibold text-[#05A3FF] mt-[16px]">
        {props.name}
      </h3>
      <h4 className="text-[11px] md:text-xl font-normal text-[#05A3FF]">
        {props.role}
      </h4>
    </CardBox>
  )
}

export default TeamCard

const CardBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0 6px 26px 0px #a1a1a1;
`
