import React from 'react';
import { Container, Row, Text, Link, CSS, Spacer } from '@nextui-org/react';
import { VercelCallout } from '@components';

export interface Props {
  css?: CSS;
  containerCss?: CSS;
}

const Footer: React.FC<Props> = ({ css, containerCss }) => {
  // const year = new Date().getFullYear();
  return (
    <Container
      fluid
      className="footer__container"
      gap={2}
      css={{
        zIndex: '$1',
        padding: '$md $sm',
        '@xsMax': {
          padding: '$sm $xs'
        },
        ...containerCss
      }}
    >
      <Row justify="center" css={css}>
         <Text
          span
          className="footer__copy"
          css={{
            fontSize: '$xs',
            color: '$accents6',
            '@mdMax': {
              fontSize: '$xs'
            }
          }}
        >
          &copy;&nbsp;Copyright&nbsp;{2022}&nbsp;QRC.global
        </Text>
        <Spacer x={0.5} /> 
        <Text
          span
          className="footer__by"
          css={{
            fontSize: '$xs',
            color: '$accents7',
            '@mdMax': {
              fontSize: '$xs'
            }
          }}
        >
          Created&nbsp;by&nbsp;
          <Link href="https://ionicenterpriseapps.com" rel="noreferrer" target="_blank">
             Ionic Enterprise Apps
          </Link>
        </Text>
      </Row>
      <Row justify="center" css={css}>
        <VercelCallout />
      </Row>
    </Container>
  );
};

export default Footer;
