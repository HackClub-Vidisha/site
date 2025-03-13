import {
    BaseStyles,
    Badge,
    Box,
    Button,
    Card,
    Checkbox,
    Container,
    Flex,
    Grid,
    Heading,
    Input,
    Label,
    Link,
    NavLink,
    Radio,
    Select,
    Slider,
    Text,
    Textarea
  } from 'theme-ui'
  import Head from 'next/head'
  import Meta from '@hackclub/meta'
  import theme from '@hackclub/theme'
  import ColorSwitcher from '../components/color-switcher'
  import Bio from '../components/bio'
  import Footer from '../components/footer'
  import styled from '@emotion/styled'
  import Icon from '@hackclub/icons'
  import Flag from '../components/flag'
  import Team from '../components/custom/team'
  import Top from '../components/custom/top'

  import React from 'react'
import Philosophy from '../components/custom/philosophy'
import Faq from '../components/custom/faq'
import Pastevent from '../components/custom/event'
import Header from '../components/custom/header'
  // Next.js allows fast development of static sites with server-side rendering
  
  // Fast development my ass!
  const Row = styled(Container)`
  px: 3;
  py: [4, 5];
  color: 'black';
  display: grid;
  text-align: left;
  h2 {
    line-height: 1;
    margin-bottom: 18px;
  }
  @media screen and (min-width: 48em) {
    grid-gap: 24px;
    grid-template-columns: 2fr 3fr;
  }
`

Row.defaultProps = { sx: { px: 3, py: [3, 4], color: 'black' } }


  
  const HomePage = () => (
    <>

      <Header/>
      
      <Top/>
      
      <Philosophy/>

      <Faq/>
    
      <Pastevent/>
      <Team/>    
      
      <Footer></Footer>
    </>
  )
  
  export default HomePage