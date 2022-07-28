import React from 'react';
import { useRouter } from 'next/router';
import { FeaturesGrid, Note, NextJsLogo } from '@components';
import { Button, Container, Grid, Snippet } from '@nextui-org/react';
import { StyledCardBlur, Title, Subtitle } from '@primitives';

const bannerSuggestions = [
  {
    title: 'Getting Started',
    description:
      'Matrix allows you to express yourself, in a modern, and secure open social networking platform regardless of your ideas, content or expressions.',
    icon: <Note fill="#FF4ECD" />,
    href: '/getting-started'
  },
  {
    title: 'Matrix + QRC',
    description:
      'Matrix is totally compatible with QRC.global. QRC mobile application will be available Q4 2022! Vist qrcpayments.com for a preview',
    icon: <NextJsLogo fill="#FF4ECD" />,
    target: '_blank',
    href: 'https://qrcpayments.com'
  }
];

const InstallBanner: React.FC = () => {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push('/getting-started');
  };

  return (
    <StyledCardBlur
      css={{
        br: 0,
        p: 0,
        dflex: 'center',
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        ml: '-50vw',
        mr: '-50vw',
        border: '1.5px solid $border',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent'
      }}
    >
      <Container
        lg
        css={{
          ml: 0,
          mr: 0,
          py: '$8',
          '@xsMax': {
            px: '$4'
          }
        }}
      >
        <Grid.Container gap={2}>
          <Grid xs={12} md={6} direction="column" justify="center">
            <Title css={{ fontSize: '2.4rem' }}>Lets make Web`</Title>
            <Title color="violet" css={{ fontSize: '2.4rem' }}>
              For Ourselves
            </Title>
            <Subtitle
              css={{
                my: '$2',
                fs: '1.2rem',
                maxW: '100%',
                '@xsMax': {
                  my: '$8'
                }
              }}
            >
              Try matrix, its one QR Code away! Share with us what you like and want to see next!
            </Subtitle>
            <Grid.Container xs={12} alignItems="center">
              <Grid xs={12} sm={2.5}>
                <Button
                  auto
                  rounded
                  color="secondary"
                  css={{
                    '@xsMax': {
                      width: '100%',
                      mb: '$6'
                    }
                  }}
                  onClick={handleGetStartedClick}
                >
                  Get started
                </Button>
              </Grid>
              <Grid xs={12} sm={9.5}>
                <Snippet
                  className="hero__snippet"
                  tooltipColor="secondary"
                  css={{
                    borderRadius: '$pill',
                    height: '$space$14',
                    py: 0,
                    transition: 'opacity 0.3s ease-in-out',
                    dflex: 'center',
                    boxShadow: '$sm',
                    bf: 'saturate(180%) blur(10px)',
                    bg: '$backgroundBlur',
                    '@xsMax': {
                      width: '100%'
                    }
                  }}
                >
                  Donate @ 0x973e2d5E05195084eA2458e5044EB1B33290BA3f
                </Snippet>
              </Grid>
            </Grid.Container>
          </Grid>
          <Grid xs={12} md={6} css={{ py: '$10' }}>
            <FeaturesGrid
              xs={12}
              sm={6}
              lg={6}
              features={bannerSuggestions}
              itemCss={{
                bg: 'rgba(255, 255, 255, 0)'
              }}
            />
          </Grid>
        </Grid.Container>
      </Container>
    </StyledCardBlur>
  );
};

export default InstallBanner;
