import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Heading = styled.h2`
  color: #333;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SubHeading = styled.h3`
  color: #555;
`;

const Paragraph = styled.p`
  color: #777;
  line-height: 1.6;
`;

const ContactInfoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ContactInfoItem = styled.li`
  margin-bottom: 10px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const SocialLink = styled.a`
  color: #3498db;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ContactPage = () => {
  return (
    <ContactContainer>
      <Heading>Contact Us</Heading>

      <Section>
        <SubHeading>Address</SubHeading>
        <Paragraph>
          ....
          <br />
          ...
          <br />
          ...
        </Paragraph>
      </Section>

      <Section>
        <SubHeading>Contact Information</SubHeading>
        <ContactInfoList>
          <ContactInfoItem>Email</ContactInfoItem>
          <ContactInfoItem>Phone</ContactInfoItem>
        </ContactInfoList>
      </Section>

      <Section>
        <SubHeading>Social Media</SubHeading>
        <SocialLinks>
          <SocialLink href="#">Facebook</SocialLink>
          <SocialLink href="#">Twitter</SocialLink>
          <SocialLink href="#">Instagram</SocialLink>
        </SocialLinks>
      </Section>
    </ContactContainer>
  );
};

export default ContactPage;
