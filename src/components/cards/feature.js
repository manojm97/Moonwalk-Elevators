/** @jsx jsx */
import { rgba } from 'polished';
import Image from 'components/image';
import { jsx, Box, Heading, Text } from 'theme-ui';

const Feature = ({ data: feature }) => {
  return (
    <Box key={feature.id} sx={styles.featureItem}>
      <Image loading="lazy" src={feature.icon} alt={feature.title} />
      <Heading as="h3">{feature.title}</Heading>
      <Heading as="h4">{feature.subtitle}</Heading>
      <Text as="p">{feature.description}</Text>
    </Box>
  );
};

export default Feature;

const styles = {
  featureItem: {
    textAlign: ['center', null, null, null, 'left'],
    h3: {
      lineHeight: 2.5,
      fontWeight: 500,
      letterSpacing: 'heading',
      fontSize: [18, null, null, null, null, 20],
    },
    h4: {
      lineHeight: 1.5,
      // fontWeight: 440,
      // letterSpacing: 'heading',
      // fontSize: [20, null, null, null, null, 20],
    },
    p: {
      color: rgba('#343D48', 0.75),
      fontSize: [null, null, null, null, 14, 15],
      lineHeight: 1.47,
    },
  },
};
