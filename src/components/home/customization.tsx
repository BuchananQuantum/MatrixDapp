import React, { useState } from 'react';
import NextLink from 'next/link';
import { InView } from 'react-intersection-observer';
import { Box, Section, Title, Subtitle, BlockLink } from '@primitives';
import { Grid, Row, Col, Link, Spacer } from '@nextui-org/react';
import landingContent from '@content/landing';
import { darkTheme } from '@theme/shared';
import { CodeDemoBlock, CustomButton, Blockholder } from '@components';
import Image from 'next/image';

const CustomizationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <InView as="section" className="inview-section" onChange={setIsVisible}>
      <Spacer y={10} css={{ '@xsMax': { mt: '$14' } }} />
      <Section css={{ position: 'relative' }}>
        <Box
          css={{
            position: 'absolute',
            top: '-30%',
            right: '-35%',
            zIndex: '-$1',
            [`.${darkTheme} &`]: {
              top: '-30%',
              left: '-35%'
            }
          }}
        >
          <Image
            src="/customization-gradient.svg"
            alt="customization background"
          />
        </Box>
        <Row justify="flex-start">
          <Title>Customization your</Title>
        </Row>
        <Row justify="flex-start">
          <Title color="green">Matrix</Title>
        </Row>
        <Subtitle>
          Thanks to&nbsp;<Link
            href="https://ceramic.network/"
            title='Ceramic Network'
            rel="noreferer noopener"
            target="_blank"
            css={{ color: '$green600' }}
          >Ceramic Network&apos;s</Link> DID Identifier 
          &amp; &nbsp;<Link
            href="https://walletconnect.com"
            rel="noreferer noopener"
            target="_blank"
            css={{ color: '$green600' }}
          >WalletConnect</Link> we&apos;re able to put together a truly decentralized 
          experience revolving around Creators, Vendors, and Patrons with&nbsp;
          <Link
            href="https://qrc.global/"
            rel="noreferer noopener"
            target="_blank"
            css={{ color: '$green600' }}
          >
             QRC
          </Link>
          , bridging the gap between web3 ID&apos;s, Streams, Subscriptions, Wallet Chat Messenger and Universal Profiles!
          Checkout the&nbsp;
          <NextLink href="/docs/theme/override-styles#using-the-css-prop">
            <Link css={{ color: '$green700' }}>MarketPlace&nbsp;</Link>
          </NextLink>
          get started by making a Matrix Profile, are you a &nbsp;
          <NextLink href="/creator-registration">
            <Link css={{ color: '$pink600' }}>creator&nbsp;</Link>
          </NextLink> or a &nbsp; <NextLink href="/docs/theme/override-styles#using-the-styled-function">
            <Link css={{ color: '$blue600' }}>patron&nbsp;</Link>
          </NextLink>
           or are you a &nbsp;
          <NextLink href="/vendor-registration">
            <Link css={{ color: '$cyan600' }}>vendor?&nbsp;</Link>
          </NextLink>
        </Subtitle>
        <Grid.Container gap={2}>
          <Grid
            xs={12}
            sm={6}
            css={{
              pl: 0,
              '@xsMax': {
                pr: '0'
              }
            }}
          >
            <Col
              css={{
                dflex: 'center',
                fd: 'column',
                ai: 'flex-start',
                h: '100%'
              }}
            >
              {isVisible ? (
                <CodeDemoBlock
                  showWindowIcons
                  css={{
                    maxHeight: 320,
                    bs: '$lg'
                  }}
                />
              ) : (
                <Blockholder height="360px" />
              )}
              <NextLink href="/examples">
                <BlockLink color="green">See More</BlockLink>
              </NextLink>
            </Col>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            css={{
              pr: 0,
              mt: '$9',
              '@mdMax': {
                pl: '0'
              }
            }}
          >
            <Box css={{ size: '100%', height: 320 }}>
              <Col
                css={{
                  dflex: 'center',
                  fd: 'column',
                  height: '100%',
                  br: '$lg',
                  bg: 'linear-gradient(to right, #4ade80, #06b6d4)'
                }}
              >
                <CustomButton />
              </Col>
            </Box>
          </Grid>
        </Grid.Container>
      </Section>
    </InView>
  );
};

export default CustomizationSection;
