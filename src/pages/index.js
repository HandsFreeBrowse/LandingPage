import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import KeyFeature from "sections/key-feature";
import CoreFeature from "sections/core-feature";
import Feature from "sections/feature";
import PartnerSection from "sections/partner";
import WorkFlow from "sections/workflow";
import TestimonialCard from "sections/testimonial";
import SecurePayment from "sections/secure-payment";
import Package from "sections/package";
import Faq from "sections/faq";

import { ChakraProvider } from '@chakra-ui/react'
import { Auth0Provider } from "@auth0/auth0-react";

export default function IndexPage() {
  return (
    <Auth0Provider
      domain="handsfreebrowse.us.auth0.com"
      clientId="4inWUGt9nYVGAFKHXXNlMsanZXUHMYl8"
      redirectUri="http://localhost:3000/"
    >
      <ChakraProvider>
        <ThemeProvider theme={theme}>
          <StickyProvider>
            <Layout>
              <SEO title="Hands Free AI" />
              <Banner />
              <KeyFeature />
              {/* <CoreFeature /> */}
              {/* <Feature /> */}
              {/* <PartnerSection /> */}
              <WorkFlow />
              {/* <TestimonialCard /> */}
              {/* <SecurePayment /> */}
              {/* <Package /> */}
              {/* <Faq /> */}
            </Layout>
          </StickyProvider>
        </ThemeProvider>
      </ChakraProvider>
    </Auth0Provider>
  );
}
