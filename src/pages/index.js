import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Clients from 'sections/clients';
import Services from 'sections/services';
import OurCustomer from 'sections/our-customer';
import Gallery from 'sections/gallery';
//import Pricing from 'sections/pricing';
import About from 'sections/about';
import Contact from 'sections/contact';
import Faq from 'sections/faq';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Moonwalk Elevators" />
        <ScrollToTop smooth color="#8D448B" width="20" viewBox ="25 0 256 256"/>
        <Banner />
        <About />
        <Services />
        <Gallery />
        {/* <Pricing /> */}
        <OurCustomer />
        <Clients />
        <Faq />
        <Contact />     
      </Layout>
    </ThemeProvider>
  );
}
