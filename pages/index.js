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
  import Team from '../components/team'
  import Top from '../components/top'

  import React from 'react'
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

const Super = styled(Text)`
  background-color: rgb(228, 115, 45);
  clip-path: polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%);
  color: rgb(255, 255, 255);
  display: inline-block;
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
`

  
  const HomePage = () => (
    <>

      <Head>
          <title>Home</title>
          <Meta
          as={Head} // component to wrap tags in, defaults to React.Fragment
          name="Hack Club" // site name
          title="Home" // page title
          description="Hackclub Vidisha is a high school coding club in vidisha" // page description
          image="https://hackathons.hackclub.com/card.png" // large summary image URL
          color="#ec3750" // theme color
          manifest="/site.webmanifest" />
      </Head>
      
      
      
      <Container sx={{my: 5}} variant='wide'>
        <Flex sx={{alignItems: 'center', flexWrap: 'wrap'}}>
        <Text variant='title' color='orange'>Coding is a <Super>superpower</Super></Text>
        <Container variant='copy'>
            <Card variant='interactive' 
              sx={{
                my: 3,
                backgroundImage: t => t.util.gx('#f89b29', '#ff0f7b'),
                color: 'white'
              }}>
              <Text variant='subtitle'  color='darker'>Learning to code is uniquely like gaining a superpower: it converts you from a consumer to a creator. Suddenly, computers become a tool for creating.</Text>
            </Card>
          </Container>
        </Flex>
      </Container>

      <Container sx={{my: 5}} variant='wide'>
        <Flex sx={{alignItems: 'center', flexWrap: 'wrap'}}>
          <Text variant='title' color='green'>Start Building. Now. </Text>
          <Container variant='copy'>
            <Card variant='interactive' 
              sx={{
                my: 3,
                backgroundImage: t => t.util.gx('#57ebde', '#aefb2a'),
                color: 'white'
              }}>
              <Text variant='subtitle'  color='black'>Most coding classes teach you programming concepts instead of how to write real code—it’s like trying to learn carpentry without any wood. So at Hack Club, you learn to code entirely through building things. You start with no experience and build and ship a project every meeting.</Text>
            </Card>
          </Container>
        </Flex>
      </Container>

      <Container sx={{my: 5}} variant='wide'>
        <Flex sx={{alignItems: 'center', flexWrap: 'wrap'}}>
          <Text variant='title' color='cyan'>Learn as you build !!</Text>
          <Container variant='copy'>
            <Card variant='interactive' 
              sx={{
                my: 3,
                backgroundImage: t => t.util.gx('#919bff', '#133a94'),
                color: 'white'
              }}>
              <Text variant='subtitle'  color='snow'>Just as the best carpenters didn’t learn in the classroom, neither did the best programmers. Through our <Link href=''>workshops</Link>, you’ll be walked through building projects. Starting out, you won’t understand how the code works, but you’ll build understanding as you go. You’ll get stuck along the way, but we’re here to help.</Text>
            </Card>
          </Container>
        </Flex>
      </Container>

      <Flex
        as="main"
        sx={{ bg: 'background', color: 'accent', py: 60, h1: { mt: 5 }, flexWrap: 'wrap' }}
      >
        <Container>
          <Heading variant="headline">What is Hackclub?</Heading>
          <Card as="main" sx={{ p: 4, mt: 1, borderRadius: 'extra', bg: 'sheet' }}>
            <Text variant='subtitle'>
              Hack Club is a global network of programming clubs where members learn to code through tinkering and building projects. We have a strong community of students who help each other learn and grow.
            </Text>
          </Card>
        </Container>

        <Container>
          <Heading variant="headline">How can I join Hackclub?</Heading>
          <Card as="main" sx={{ p: 4, mt: 1, borderRadius: 'extra', bg: 'sheet' }}>
            <Text variant='subtitle'>
              If you are a teenager below 18 years of age, you can fill the <Link href="https://hackclubvidisha.fillout.com/t/hvsp3Wgnqqus">Signup form</Link>.
            </Text>
          </Card>
        </Container>

        <Container>
          <Heading variant="headline">What if I do not know coding?</Heading>
          <Card as="main" sx={{ p: 4, mt: 1, borderRadius: 'extra', bg: 'sheet' }}>
            <Text variant='subtitle'>
              It is completely fine if you are new to code. We have a lot of resources and a community that will help you learn to code. We have a lot of members who are new to coding and are learning to code.
            </Text>
          </Card>
        </Container>
      </Flex>
    
      <Container sx={{my: 5, color:'smoke'}} variant='copy'>
        <Text variant='title'><Icon glyph="event-code" size={50}/> Past Events</Text>
        <Card
          sx={{
            mt: 3,
            bgcolor: 'elevated',
            color: 'secondary'
          }}
        >
          <Heading variant="headline" as="h3" my={0}>
            Boba Workshop
          </Heading>
          <Text variant='subtitle' >
            <Icon glyph="clock" size={24} sx={{pt:100}} />
            4-6 PM, March 7 <br/>
            Learn how to build HTML and CSS website. <br/>
            <Icon glyph='food'/> Get free Cold Coffee and Pizza <br/>
          </Text>
          
          
        </Card>
      </Container>
      <Team/>    
      
      <Footer></Footer>
    </>
  )
  
  export default HomePage