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

  
const ConductPage = () => (
    <>
        <Head>
            <title>Code of Conduct</title>
            <Meta
                as={Head}
                name="Hack Club"
                title="Home"
                description="The required standards of conduct for the Hack Club community & events."
                image="https://hackathons.hackclub.com/card.png"
                color="#ec3750"
                manifest="/site.webmanifest"
            />
        </Head>

        <Box as="header" sx={{ bg: 'sunken', color: 'text' }}>
            <Container sx={{ pt: 5, pb: [3, 4], textAlign: 'center' }}>
                <Link href='https://hackclub.com'>
                    <img src="https://assets.hackclub.com/flag-orpheus-left.svg" alt="Hack Club Flag" style={{ position: 'fixed', top: 0, left: 0, width: '256px' }} />
                </Link>
                <ColorSwitcher />
                <Heading as="h1" variant="title" color="red">
                    Hack Club Vidisha
                </Heading>
            </Container>
        </Box>

        <Container>
            <Text>
                <Heading as="h2">Hacker Values</Heading>
                <p>These are the values to which people in the Hack Club community should aspire:</p>
                <ul>
                    <li><strong>Be friendly and welcoming</strong></li>
                    <li><strong>Be patient</strong>
                        <ul>
                            <li>Remember that people have varying communication styles and that not everyone is using their native language (meaning and tone can be lost in translation).</li>
                        </ul>
                    </li>
                    <li><strong>Be thoughtful</strong>
                        <ul>
                            <li>Productive communication requires effort. Think about how your words will be interpreted.</li>
                            <li>Remember that sometimes it is best to refrain entirely from commenting.</li>
                        </ul>
                    </li>
                    <li><strong>Be respectful</strong>
                        <ul>
                            <li>In particular, respect differences of opinion.</li>
                        </ul>
                    </li>
                    <li><strong>Be charitable</strong>
                        <ul>
                            <li>Interpret the arguments of others in good faith, do not seek to disagree.</li>
                            <li>When we do disagree, try to understand why.</li>
                        </ul>
                    </li>
                </ul>
                <Heading as="h3">Avoid destructive behavior:</Heading>
                <ul>
                    <li>Derailing: stay on topic; if you want to talk about something else, start a new conversation.</li>
                    <li>Unconstructive criticism: don't merely condemn the current state of affairs; offer—or at least solicit—suggestions as to how things may be improved.</li>
                    <li>Snarking (pithy, unproductive, sniping comments)</li>
                    <li>Discussing potentially offensive or sensitive issues; this all too often leads to unnecessary conflict.</li>
                    <li>Microaggressions: brief and commonplace verbal, behavioral, and environmental indignities that communicate hostile, derogatory or negative slights and insults to a person or group.</li>
                </ul>
                <p>People are complicated. You should expect to be misunderstood and to misunderstand others; when this inevitably occurs, resist the urge to be defensive or assign blame. Try not to take offense where no offense was intended. Give people the benefit of the doubt. Even if the intent was to provoke, do not rise to it. It is the responsibility of all parties to de-escalate conflict when it arises.</p>
            </Text>
        </Container>

        <Footer />
    </>
)
  
  export default ConductPage