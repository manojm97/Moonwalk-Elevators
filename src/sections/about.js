/** @jsx jsx */
import { jsx, Box, Container, Grid } from "theme-ui";
import SectionHeading from "components/section-heading";
import Accordion from "components/accordion/accordion";
import Image from "components/image";
import lift from "assets/images/lift.jpg";
import emoji from "assets/images/icons/emoji-2.png";
import { darken } from "polished";

const data = [
  {
    title: "Capacity, Models, Drive system",
    contents: (
      <div>
        <p>4,5,6,8,10,13,15,16 & 20 Passenger</p>
        <p>Royal, Premium, Modern & Economy</p>
        <p>V3F System</p>
      </div>
    ),
  },
  {
    title: "Control, Car Operating Panel (COP), Landing Operating Panel (LOP)",
    contents: (
      <div>
        <p>Simplex & Duplex</p>
        <p>Full / Down collective control with advanced microprocessor technology</p>
        <p>Half / Full height stainless steel COP with seven segment display</p>
      </div>
    ),
  },
  {
    title: `Position Indicator, Car Door Protection / Type`,
    contents: (
      <div>
      <p>S Hairline finish with seven segment display</p>
      <p>Multiple beam Full height infra-red sensor</p>
      <p>Fully automatic COPD / SOPD</p>
    </div>
    ),
  },
  {
    title: `Flooring, Lighting , Optional features`,
    contents: (
      <div>
      <p>Attractive design in PVC tiles matching to car interior</p>
      <p>Diffused fluorescent lighting / spot lights</p>
      <p>ARD, vision Panel on Doors, Full Load / Overload sensor</p>
    </div>
    ),
  },
];

const About = () => {
  return (
    <section id="about" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <Box as="figure" sx={styles.illustration}>
            <Box as="figcaption" sx={styles.about}>
              About us
            </Box>
            <Box as="figcaption" sx={styles.aboutContent}>
              <p>
                MOONWALK ELEVATOR, We have highly talented, well qualified well
                trained and well experienced Engineers and technically skilled
                work force having vast knowledge in Electronics, Electrical &
                Mechanical Engineering of Elevators.
              </p>
              <p>
                We offer quality services in a timely cost effective fashion
                that helps our clients more than their requirement business
                objectives.
              </p>
            </Box>
            <Image src={lift} alt="lift" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              emoji={emoji}
              sx={styles.heading}
              title="Meet our standard features that will make you wow"
              description="The Qualitative performance along with care and commitment
has increased the business level to heights and that has given
us the confidence to get going."
            />
            <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
            </Box>
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default About;

const styles = {
  section: {
    pt: [6, null, null, 6, 8, 9],
    pb: [6, null, null, null, 7, 9, 11, null],
  },
  grid: {
    alignItems: "center",
    gridTemplateColumns: [
      "1fr",
      null,
      null,
      null,
      "1fr 431px",
      "1fr 530px",
      "1fr 550px",
    ],
  },
  heading: {
    textAlign: ["center", "center", "center", "left"],
    marginLeft: 0,
    maxWidth: 580,
    m: ["0 auto 27px", "0 auto 27px", "0 auto 27px", "0 0 30px"],
    h2: {
      fontSize: [22, 22, 22, 28, 30, 36, 46],
      lineHeight: [1.6, 1.6, 1.6, 1.41],
      fontWeight: [500, 500, 500, 400],
    },
    p: {
      fontSize: ["15px", "15px", "15px", "17px"],
      mt: [3, 3, 3, 20, 5],
    },
  },
  illustration: {
    mb: [-6, null, null, -8, 0],
  },
  accordionGroup: {
    m: [null, null, null, "0 auto", "unset"],
    maxWidth: [null, null, null, 600, "none"],
  },
  about: {
    textAlign: ["center", "center", "center", "left"],
    marginLeft: 0,
    maxWidth: 580,
    m: ["0 auto 27px", "0 auto 27px", "0 auto 27px", "0 0 30px"],
    fontSize: [21, , , 30],
    fontWeight: [500, 700],
    lineHeight: 1.68,
    letterSpacing: "heading",
  },
  aboutContent: {
    textAlign: ["center", "center", "center", "left"],
    marginLeft: 0,
    maxWidth: 580,
    m: ["0 auto 27px", "0 auto 27px", "0 auto 27px", "0 0 30px"],
    ffontSize: 17,
    lineHeight: 2.07,
    color: (theme) => theme.colors.text,
  },
};
