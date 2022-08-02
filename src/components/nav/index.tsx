import React, { useState } from "react"
import settings from "../../../config/settings.json"
import { signIn, wallet } from "../../near"
import LoginButton from "../pieces/LoginButton"
import useLocales from "../../hooks/useLocales"
import Image from "../image"
import { Ul, Li } from "../pieces/List"
import Dropdown from "../dropdown"
import styled from "styled-components"

function signOut() {
  wallet.signOut()
  window.location.replace(window.location.origin + window.location.pathname)
}

export default function Navbar() {
  const { locale } = useLocales()
  const currentUser = wallet.getAccountId()
  if (!locale) return null

  return (
    <Nav className="navbar py-8 px-3 sm:px-10 pt-16 text-white absolute z-10">
      <div className="left-[20px] sm:left-[5rem] flex-1 top-7 ml-[0.5rem] sm:ml-[3rem] lg:ml-[5.5rem] mt">
        <a className="w-[154px]" href="#">
          <Image src={settings.logo} alt="logo" />
        </a>
      </div>
      <div className="lg:hidden flex-none">
        {!currentUser ? (
          <LoginButton onClick={signIn}>{locale.login}</LoginButton>
        ) : (
          <Dropdown
            items={[{ children: locale.signOut, onSelect: signOut }]}
            trigger={currentUser}
          />
        )}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>

          <GradientMenu
            tabIndex={0}
            className="menu dropdown-content absolute right-5 mt-3 p-2 shadow bg-base-100 rounded-bl-2xl w-32"
          >
            <li>
              <a
                href="#"
                className="text-black text-xs gap-[0.4rem] justify-end"
              >
                <span>{locale.mint}</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black text-xs gap-[0.4rem]  justify-end"
              >
                <span>{locale.play}</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black text-xs gap-[0.4rem]  justify-end"
              >
                <span>{locale.rarity}</span>
              </a>
            </li>
            <li>
              <a
                href="https://linktr.ee/ambermetaverse"
                target="_blank"
                className="text-black text-xs gap-[0.4rem]  justify-end"
              >
                <span>{locale.about}</span>
              </a>
            </li>
            <li>
              {!currentUser && (
                <LoginButton onClick={signIn}>
                  <h1 className="text-center w-full">{locale.login}</h1>
                </LoginButton>
              )}
            </li>
          </GradientMenu>
        </div>
      </div>
      <div className="hidden lg:block top-7 flex-none">
        <Ul className="flex p-0">
          <Li>
            <a href="#">
              <span>{locale.rarity}</span>
            </a>
          </Li>
          <Li>
            <a href="https://linktr.ee/ambermetaverse" target="_blank">
              <span>{locale.about}</span>
            </a>
          </Li>
          <Li>
            {!currentUser ? (
              <LoginButton onClick={signIn}>{locale.connectWallet}</LoginButton>
            ) : (
              <Dropdown
                items={[{ children: locale.signOut, onSelect: signOut }]}
                trigger={currentUser}
              />
            )}
          </Li>
        </Ul>
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
  background: #ffffff5c;
  height: 1rem;
  @media (min-width: 1024px) {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(217, 217, 217, 0) 60%
    );
  }
`

const GradientMenu = styled.ul`
  background: linear-gradient(to bottom, #ffbcdd, #ffd4cb);
  color: white;
  a {
    color: white !important;
    font-size: 20px;
  }
`
