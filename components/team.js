import { Container, Grid, Heading } from "theme-ui";
import Bio from "./bio";

export default function Team () {
    return(
        <Container >
                <Heading variant="headline">Team</Heading>
                <Container sx={{display:'flex', flexWrap: 'wrap'}}>
                    
                          <Grid columns={[1, 1]} gap={2} mb={2} mr={35}>
                            <Bio
                              href="https://arjav.dino.icu"
                              bgcolor='#93c4eb'
                              img="https://cdn.hack.pet/slackcdn/af5e31e9f4358229cee49d68786916e7.jpg"
                              name="Arjav Jain"
                              teamRole="Tech Lead"
                              text="Arjav is a 14 year old from Vidisha who loves to code. He really doesn't have a fav language and is willing to learn almost everything from 3D modelling to functional programming and linux. At Hackclub Vidisha, he is responsible for managing the website, and all other digital workflows, forms etc. He also conducts workshops."
                              pronouns="he/they"
                              email="arjavjain0703@gmail.com"
                            />
                          </Grid>
                    
                    
                          <Grid columns={[1,2]} gap={2} mb={2} mr={35}>
                            <Bio
                              bgcolor='#93c4eb'
                              href='https://aj.webanayjain.tech'
                              img="https://cdn.hackclubber.dev/slackcdn/9cf6e20b90387adc81233745545a684d.jpg"
                              name="Anay Jain"
                              teamRole="Events Lead"
                              text="Anay is a 14 year old from Vidisha. He is the events Lead of Hack Club Vidisha. He is responsible for managing events and workshops and ensuring community involvement."
                              pronouns="he/him"
                              email="anayjain1128@gmail.com"
                            />
                          </Grid>
        
                    </Container>
                </Container>
    );
}