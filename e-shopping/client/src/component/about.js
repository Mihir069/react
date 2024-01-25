import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Heading = styled.h2`
  color: #333;
`;

const Paragraph = styled.p`
  color: #555;
  line-height: 1.6;
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <Heading>About Our Shop</Heading>
      <Paragraph>
        Welcome to our online shopping destination! At ECOM, we are committed to providing you with the best shopping experience, offering a wide range of high-quality products at competitive prices.
      </Paragraph>

      <Paragraph>
        Our mission is to make your online shopping journey seamless and enjoyable. Whether you're looking for the latest fashion trends, electronics, home decor, or any other products, we've got you covered.
      </Paragraph>

      <Paragraph>
        Why choose ECOM?
      </Paragraph>

      <ul>
        <li>Extensive Product Selection: Explore a diverse range of products to suit your needs.</li>
        <li>Quality Assurance: We source products from reputable suppliers to ensure quality and durability.</li>
        <li>Secure Transactions: Your security is our priority. Shop with confidence using our secure payment methods.</li>
        <li>Fast Shipping: We strive to dispatch your orders promptly to get your favorite items to you as quickly as possible.</li>
        <li>Excellent Customer Service: Our customer support team is here to assist you with any inquiries or issues you may have.</li>
      </ul>

      <Paragraph>
        Thank you for choosing ECOM. We appreciate your trust in us and look forward to serving you. Happy shopping!
      </Paragraph>
    </AboutContainer>
  );
};

export default AboutPage;
