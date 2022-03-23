/** @jsx jsx */
import { jsx, Box, Flex, Container, Input, Button } from "theme-ui";
import SectionHeading from "components/section-heading";
import { rgba } from "polished";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log(`Submitted...`);
  };
  return (
    <Box id="contact" as="section" sx={styles.section}>
      <Container>
        {/* <Box sx={styles.content}>
          <SectionHeading
            sx={styles.heading}
            title="Subscribe to get best offers."
            description="By subscribing with your mail, you will agree with terms"
          />
          <Flex as="form" sx={styles.form} onSubmit={handleSubmit}>
            <Box as="label" htmlFor="email" variant="styles.srOnly">
              Email
            </Box>
            <Input type="email" id="email" placeholder="Enter your email" />
            <Button variant="white">Subscribe us</Button>
          </Flex>
        </Box> */}
        <Box sx={styles.content}>
          <SectionHeading
            sx={styles.heading}
            title="Address and contact"
            description=""
          />
          <p>MOONWALK ELEVATORS <br/> 21/5A, Konanakunte cross,
           Kanakapura Main Road, Near manasa Theater Bangalore - 560062<br/> Contact : 8660594501,
          6364552299<br/>
          Email : moonwalkelevators.blr@gmail.com</p>
        </Box>
      </Container>   
    </Box>
  );
};

export default Contact;

const styles = {
  section: {
    backgroundColor: "#020718",
    pt: "60px",
    pb: "70px",
  },
  heading: {
    color: "#fff",
    mb: [30, 30, 50],
    h2: {
      fontSize: [22, 28, "36px"],
      lineHeight: 1.4,
      letterSpacing: "heading",
    },
    p: {
      lineHeight: [2, 3.12],
      mt: [20, 0],
      letterSpacing: "heading",
      color: rgba("#fff", 0.6),
    },
  },
  content: {
   // fontSize: 15,
    maxWidth: "555px",
    margin: "0 auto",
    textAlign: "center",
    p: {
      // lineHeight: [3, 3.12],
      // mt: [20, 0],
      // letterSpacing: "heading",
      color: rgba("#DCBCFE", 0.6),
    },
  },
  form: {
    alignItems: "center",
    display: ["block", "flex"],
    input: {
      backgroundColor: rgba("#fff", 0.08),
      borderRadius: "5px",
      borderColor: "transparent",
      color: rgba("#fff", 0.8),
      flexGrow: 1,
      fontFamily: "body",
      height: "auto",
      px: "30px",
      py: "0",
      minHeight: [50, 50, 60],
      width: ["100%", "auto"],
      "::placeholder": {
        color: rgba("#fff", 0.8),
      },
    },
    button: {
      backgroundColor: "#fff",
      color: "#020718",
      minHeight: [50, 50, 60],
      fontSize: [14, 16],
      padding: "0 30px",
      whiteSpace: "nowrap",
      width: ["100%", "auto"],
      ml: [0, 3],
      mt: [4, 0],
      ":hover": {
        backgroundColor: "#fff",
        color: "#020718",
      },
    },
  },
};
