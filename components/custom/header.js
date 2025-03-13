import Head from "next/head";
import Meta from '@hackclub/meta'

export default function Header() {
    return(
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
    )
}