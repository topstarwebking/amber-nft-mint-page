import React from "react"
import styled from "styled-components"

interface Props {
  onClick: () => void
  children: any
}

const LoginButton: React.FC<Props> = props => {
  return (
    <StyledButton
      onClick={props.onClick}
      type="button"
      className="rounded-full text-center py-[7px] px-[1rem] sm:px-[2.75rem] mx-3"
    >
      {props.children}
    </StyledButton>
  )
}

export default LoginButton

const StyledButton = styled.button`
  background-image: linear-gradient(
    to bottom right,
    #2ab4ff,
    #6fccff
  ) !important;
  font-size: 16px;
  font-weight: 400 !important;
  letter-spacing: 0.6px;
  color: white;
  margin: 0;
  &:hover {
    background-image: linear-gradient(
      to bottom right,
      #3392e1,
      #00a5ff
    ) !important;
  }
  &:active {
    background-image: none;
    background: white !important;
    color: #00a2fb;
  }
`
