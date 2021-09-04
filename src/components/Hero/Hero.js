import React from 'react'
import Link from 'next/link'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey, I'm Sahil 👋 <br />
          Welcome to my Personal Portfolio
        </SectionTitle>
        <SectionText>
          I'm a Web Developer who designs and develops websites for different companies. Also works as an Software Developer Engineer - 1 at Netomi !
        </SectionText>
        <Button><Link href="#projects"> My Work </Link></Button>
      </LeftSection>
    </Section>
  </>
)

export default Hero