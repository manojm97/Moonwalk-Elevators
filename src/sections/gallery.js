/** @jsx jsx */
import { jsx, Box, Container, Image, Button } from 'theme-ui';
import { RiArrowRightSLine } from 'react-icons/ri';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import GalleryCard from 'components/cards/gallery-card';

import gallery1 from 'assets/images/gallery/1.jpg';
import gallery2 from 'assets/images/gallery/2.jpg';
import gallery3 from 'assets/images/gallery/3.jpg';
import gallery4 from 'assets/images/gallery/4.jpeg';
import gallery5 from 'assets/images/gallery/5.jpg';
import gallery6 from 'assets/images/gallery/6.jpg';

const data = [
  {
    id: 1,
    image: gallery1,
    title: 'SS Etched & Gold design',
  },
  {
    id: 2,
    image: gallery2,
    title: 'SS Hairline design',
  },
  {
    id: 3,
    image: gallery3,
    title: 'Auto doors',
  },
  {
    id: 4,
    image: gallery4,
    title: 'Manual doors',
  },
  {
    id: 6,
    image: gallery6,
    title: 'Fall Ceiling',
  },
  {
    id: 5,
    image: gallery5,
    title: 'Elevator Control System',
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Gallery = () => {
  return (
    <Box id="gallery" as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeading
          sx={styles.heading}
          slogan="Home Elevators"
          title="Let’s meet our interior cabins"
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
          {data?.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </Box>
        <Button variant="muted" sx={styles.button}>
          More soon <RiArrowRightSLine size="20px" />
        </Button>
      </Container>
    </Box>
  );
};

export default Gallery;

const styles = {
  section: {
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
  },
  heading: {
    mb: [30, 30, 40, 60],
  },
  galleryWrapper: {
    mx: '-15px',
  },
  button: {
    minHeight: [50, 50, 50, 60],
    fontSize: [14, 14, 16],
    width: '100%',
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
    },
    ':hover': {
      svg: {
        ml: '5px',
      },
    },
  },
};
