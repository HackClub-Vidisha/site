import Icon from "@hackclub/icons";
import { Card, Container, Heading , Text } from "theme-ui";

export default function Pastevent() {
    return(
        <section>
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
        </section>
    )
}