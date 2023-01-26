import { FooterInfo, FooterLink, FooterText } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterInfo>
      <FooterText>
        Developed by{' '}
        <FooterLink
          href="https://github.com/BogdanMU"
          rel="noreferrer"
          target="_blank"
        >
          GoIT student
        </FooterLink>
      </FooterText>
    </FooterInfo>
  );
};
