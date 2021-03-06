import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'
import { DiCssdeck } from 'react-icons/di'

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from './HeaderStyles'

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginLeft:'10px' }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons
        href="https://www.linkedin.com/in/sahil-tripathi-1364a4191/"
        target="_blank"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://github.com/sahiltripathi2898" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="mailto:sahil.tripathi2898@gmail.com" target="_blank">
        <AiFillMail size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
)

export default Header
