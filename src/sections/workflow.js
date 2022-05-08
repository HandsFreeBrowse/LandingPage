/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Box, Heading, Text } from "theme-ui";
import SectionHeader from "components/section-header";

import PatternBG from "assets/patternBG.png";
import ArrowOdd from "assets/arrowOdd.png";
import ArrowEven from "assets/arrowEven.png";

const data = [
  {
    id: 1,
    title: "Set disbursement Instructions",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 2,
    title: "Assembly retrieves funds from your account",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 3,
    title: "Assembly initiates disbursement",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 4,
    title: "Customer receives funds payment",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
];

const YoutubeEmbed = () => (
  <div styles={styles.videoResponsive}>
    <iframe
      styles={styles.videoResponsiveIframe}
      allowfullscreen=""
      frameborder="0"
      src={`https://www.youtube.com/embed/p6sCsOdqXQw`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default function WorkFlow() {
  return (
    <section sx={styles.workflow} id="demo">
      <Container>
        <SectionHeader
          slogan="Demo"
          title="Let’s see how it works"
          isWhite={true}
        />

        <div
          style={{
            overflow: "hidden",
            paddingBottom: "50%",
            position: "relative",
            height: "0",
            textAlign: 'center',
          }}
        >
          <iframe
            width="853"
            height="480"
            frameBorder="0"
          
            styles={{
              left: "0",
              top: "0",
              height: "100%",
              width: "100%",
              position: "absolute",
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            src="https://www.youtube.com/embed/s5Hf1rLZhns"
          ></iframe>
        </div>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: "primary",
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    py: [8, null, 9, null, null, 5],
  },
};
