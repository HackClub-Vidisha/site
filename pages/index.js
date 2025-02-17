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

  
  const HomePage = () => (
    <>
      <Head>
        <title>Home</title>
        <Meta
          name="Home"
          description="Hack Club Vidisha's home page"
        />
      </Head>
      <Box as="header" sx={{ bg: 'sunken', color: 'text' }}>
        <Container sx={{ pt: 5, pb: [3, 4], textAlign: 'center' }}>
          <ColorSwitcher />
          <Heading as="h1" variant="title" color="red">
            Hack Club Vidisha
          </Heading>
          <Grid
            gap={4}
            columns="auto auto auto"
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 2,
              mt: 3,
              mb: 4,
              a: { color: 'muted', transition: 'color .125s ease-in-out' }
            }}
          >
            <NavLink href="https://github.com/HackClub-Vidisha/">GitHub</NavLink>
            <NavLink href="#members">
              Members
            </NavLink>
            <NavLink href="https://instagram.com/hackclubvidisha">
              Instagram
            </NavLink>
          </Grid>
        </Container>
      </Box>

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
              If you are a teenager below 18 years of age, you can fill the form <Link href="https://hackclubvidisha.fillout.com/t/hvsp3Wgnqqus">here</Link>.
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



      <Container >
        <Heading variant="headline">Team</Heading>
          <Container sx={{display:'flex'}}>
            <Box sx={{ flexGrow: 1 }}>
                  <Grid columns={[1, null, 2]} gap={2} mb={2}>
                    <Bio
                      img="https://cdn.hack.pet/slackcdn/af5e31e9f4358229cee49d68786916e7.jpg"
                      name="Arjav Jain"
                      teamRole="Tech Lead"
                      text="Arjav is a 14 year old from Vidisha who loves to code. He is the tech lead of Hack Club Vidisha. He mostly works on web development and graphic designing."
                      pronouns="he/him"
                      email="arjavjain0703@gmail.com"
                    />
                  </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                  <Grid columns={[1, null, 2]} gap={2} mb={2}>
                    <Bio
                      img="https://cdn.hack.pet/slackcdn/af5e31e9f4358229cee49d68786916e7.jpg"
                      name="Anay Jain"
                      teamRole="Event Coordinator"
                      text="Anay is a 13 year old from Vidisha who loves to code. He is the event coordinator of Hack Club Vidisha. He is responsible for managing events and workshops and ensuring commutnity involvement."
                      pronouns="he/him"
                      email="anayjain1128@gmail.com"
                    />
                  </Grid>
            </Box>
          </Container>

      </Container>
    </>
  )
  
  export default HomePage