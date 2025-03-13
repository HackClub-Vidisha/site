import { Box, Button, Container, Grid, Heading, Link } from "theme-ui";
import ColorSwitcher from "./color-switcher";

const Top = () => {
    return(
        <Box as="header" sx={{ bg: 'sunken', color: 'text' }}>
        <Container sx={{ pt: 5, pb: [3, 4], textAlign: 'center' }}>
        <Link href='https://hackclub.com'>
          <img src="https://assets.hackclub.com/flag-orpheus-left.svg" alt="Hack Club Flag" style={{ position: 'fixed', top: 0, left: 0, width: '256px' }} />
        </Link>
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
            <Button as="a" href="https://github.com/orgs/HackClub-Vidisha/repositories" variant="outline">GitHub</Button>
            <Button as="a" href="https://hack.club/0z65uj" variant="outline">Discord</Button>
            <Button as="a" href="https://instagram.com/hackclubvidisha" variant="outline">Instagram</Button>
          </Grid>
        </Container>
      </Box>
    );
}

export default Top;