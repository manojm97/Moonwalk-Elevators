/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button } from 'theme-ui';
import { rgba } from 'polished';

import Select from 'components/select';
import bannerBg from 'assets/images/banner-bg.jpg';
import mapMarker from 'assets/images/icons/map-marker.png';
import { Link as MenuLink } from "react-scroll";

const options = [
  {
    id: 1,
    label: 'Bengaluru, Karnataka',
    value: 'Bengaluru, Karnataka',
  },
  {
    id: 2,
    label: 'Atlanta, Georgia',
    value: 'Atlanta, Georgia',
  },
  {
    id: 3,
    label: 'Minneapolis, Minnesota',
    value: 'Minneapolis, Minnesota',
  },
  {
    id: 4,
    label: 'Chicago, Illinois',
    value: 'Chicago, Illinois',
  },
];

export default function Banner() {
  const handleSubmit = (e) => {
    e.preventDefault();
   // console.log('submitting...');
  };

  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.bannerContent}>
            <Heading as="h1" sx={styles.heroTitle}>
              Moonwalk Elevators
            </Heading>
            <Heading as="h2" sx={styles.heroTitleLine}>
            Get the Best One For your Building
            </Heading>    
            <Text as="p" sx={styles.desc}>
            Our mission is to improve the flow
of urban life and has started providing solutions for all the
Elevator needs on par with all standards.
            </Text>
            <Box as="form" onSubmit={handleSubmit}>
              <Select
                id="location"
                label="Workplace"
                defaultValue={options[1].label}
                sx={styles.select}
                icon={mapMarker}
              >
                {/* {options?.map((option) => ( */}
                  <option value={options[0].value} key={options[0].id}>
                    {options[0].label}
                  </option>
                {/* ))} */}
              </Select>
              <Button type="submit" sx={styles.button} variant="primary">
              <MenuLink
                    to="customer"
                    spy={true}
                    offset={-70}
                    smooth={true}
                    duration={500}
                    className="nav-item"
                    activeClass="active"
                  >
                    Know more
                  </MenuLink>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    background: `url(${bannerBg}) no-repeat center top / cover`,
    backgroundSize: ['100%', null, null, null, 'cover'],
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    minHeight: [null, null, null, null, '50vh', '100vh'],
  },
  bannerContent: {
    backgroundColor: rgba('#fff', 0.93),
    boxShadow: [
      '0px 10px 16px rgba(52, 61, 72, 0.12)',
      null,
      null,
      null,
      'none',
    ],
    maxWidth: [null, null, null, 600, 500, null, 650],
    padding: [
      '20px',
      '30px',
      null,
      null,
      null,
      '30px 50px 60px',
      '50px 60px 90px',
    ],
    borderRadius: 5,
    m: ['110px 0 0', null, null, '110px auto 0', '60px 0 0', null, 0],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      maxWidth: 515,
      mt: 70,
      padding: '30px 50px 65px',
    },
  },
  heroTitle: {
    fontSize: [22, 28, 28, 40, , 5, 6],
    fontWeight: 700,
    letterSpacing: 'heading',
    lineHeight: [1.4, null, null, null, null, null, 1.57],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      fontSize: 40,
    },
  },
  heroTitleLine: {
    fontSize: 15,
    opacity:0.5,
    fontWeight: 200,
    letterSpacing: 'heading',
    lineHeight: [1.4, null, null, null, null, null, 1.57],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      fontSize: 20,
    },
  },
  desc: {
    fontSize: [15, 16, 15, 17],
    lineHeight: [1.53, 1.53, 1.53, 2, 2.4, 2, 2.48],
    maxWidth: 440,
    marginTop: [15, 15, 15, null, null, null, 30],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      mt: 15,
    },
  },
  select: {
    marginTop: 30,
    select: {
      minWidth: ['auto', 'auto', 'initial'],
    },
  },
  button: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 20,
    width: '100%',
    minHeight: [50, null, null, null, 60],
    fontSize: [16, 16, 16, 20],
    ':focus': {
      outline: '0 none',
    },
  },
};
