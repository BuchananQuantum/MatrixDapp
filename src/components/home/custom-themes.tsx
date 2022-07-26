/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import NextLink from 'next/link';
import { Box, Section, Title, Subtitle, BlockLink } from '@primitives';
import { InView } from 'react-intersection-observer';
import { Grid, Row, Col, Spacer } from '@nextui-org/react';
import { darkTheme } from '@theme/shared';
import landingContent from '@content/landing';
import { Blockholder, ShopCard, CodeDemo } from '@components';
import { useTheme } from 'next-themes';
import { get } from 'lodash';

const codeHighlights = {
  nextui: '3-11',
  modern: '22-37',
  elegant: '54-72',
  retro: '93-107'
};

const darkCodeHighlights = {
  nextui: '10-21',
  modern: '38-53',
  elegant: '73-91',
  retro: '109-124'
};

const CustomThemesSection = () => {
  const [activeHighlight, setActiveHighlight] = useState('nextui');
  const [isVisible, setIsVisible] = useState(false);

  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <InView as="section" className="inview-section" onChange={setIsVisible}>
      <Spacer y={10} css={{ '@xsMax': { mt: '$32' } }} />
      <Section css={{ position: 'relative' }}>
        <Box
          css={{
            position: 'absolute',
            top: '-25%',
            right: '-30%',
            zIndex: '-$1',
            [`.${darkTheme} &`]: {
              right: 0,
              left: '-30%',
              '@xsMax': {
                top: '15%',
                left: '10% !important'
              }
            },
            '@xsMax': {
              top: '5%',
              right: '-40% !important'
            }
          }}
        >
          <img  src="/theming-gradient.svg" alt="theming background" />
        </Box>
        <Row justify="flex-start">
          <Title>Apply your own</Title>
        </Row>
        <Row justify="flex-start">
          <Title color="blue">theming&nbsp;</Title>
          <Title>decisions.</Title>
        </Row>
        <Subtitle>
          Matrix provides a simple way to customize your profile, listings, and chat. You can
          change the colors, fonts, mood of everything to give your profile the flare it deserves!
          We hope to bring back Myspace type customization for profile layouts in the future.
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
            <Col>
              <ShopCard onChangeTheme={setActiveHighlight} />
              <NextLink href="/custom-profiles">
                <BlockLink color="blue">See Customized Profiles</BlockLink>
              </NextLink>
            </Col>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            css={{
              pr: 0,
              '@mdMax': {
                pl: '0'
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
                <CodeDemo
                  showWindowIcons
                  line={get(
                    isDark ? darkCodeHighlights : codeHighlights,
                    activeHighlight
                  )}
                  css={{
                    maxHeight: 350
                  }}
                />
              ) : (
                <Blockholder height="350px" />
              )}
            </Col>
          </Grid>
        </Grid.Container>
      </Section>
    </InView>
  );
};

export default CustomThemesSection;
