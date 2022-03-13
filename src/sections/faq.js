/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import AccordionFaq from 'components/accordion/accordion-faq';
const faqs = [
  {
    title: 'How to contact when emergency ?',
    contents: (
      <div>
        You can contact to our phone number or via mail mentioned in contact page.
      </div>
    ),
  },
  {
    title: 'App installation, how to contact or get information?',
    contents: (
      <div>
        Go through site once and also you can reach out to us via phone number or via mail mentioned in contact page
      </div>
    ),
  },
  {
    title: `Response taking time, how to improve?`,
    contents: (
      <div>
        Since we are busy attending so many customers we will response as soon as possible and we are continuously working on improving this.
      </div>
    ),
  },
  {
    title: `New feedback / complaint`,
    contents: (
      <div>
        You can share your feedback/complaint with us using our details mentioned in the contact page.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: 'section.faq' }}>
      <Container id="faq">
        <SectionHeading
          title="Frequently asked question"
          slogan="Get your question answer"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <AccordionFaq items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
