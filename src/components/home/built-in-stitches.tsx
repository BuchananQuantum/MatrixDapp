import * as React from 'react';
import NextLink from 'next/link';
import { InView } from 'react-intersection-observer';
import cn from 'classnames';
import { Section, Title, Subtitle, BlockLink, Box } from '@primitives';
import {
  Grid,
  Row,
  Col,
  Link,
  Text,
  Collapse,
  Spacer
} from '@nextui-org/react';
import landingContent from '@content/landing';
import { CodeDemo, Blockholder } from '@components';

const items = [
  {
    id: 'property_marketplace',
    title: 'Marketplace Simplified',
    description:
      'Simplified web3 marketplace, you can create more concise products, content and a more robust platform for content creators and vendors, saving time and energy.',
    lines: '2-9'
  },
  {
    id: 'property_listings',
    title: 'Classified Listings',
    description:
      'Classified Listings are a staple in the Web2 World. Matrix Marketplaces represent craigslist or backpage classifieds in a decentralized manor!',
    lines: '11-26'
  },
  {
    id: 'simplify_subscriptions',
    title: 'Simplify Subscriptions',
    description:
      'Matrix adds a universal web3 profile to your QRC Wallet providing a set of out of the box Social Networing platform with blockchain utilities that simplify onboarding process.',
    lines: '29-48'
  }
];

const BuiltInStitchesSection = () => {
  const [activeItem, setActiveItem] = React.useState(items[0]);
  const [isVisible, setIsVisible] = React.useState(false);
  const handleChange = (value: any) => {
    setActiveItem(items[value - 1]);
  };

  return (
    <InView as="section" className="inview-section" onChange={setIsVisible}>
      <Spacer y={10} css={{ '@xsMax': { mt: '$16' } }} />
      <Section css={{ position: 'relative' }}>
        <Box
          css={{
            position: 'absolute',
            top: 0,
            left: '-10%',
            zIndex: '-$1',
            '@xsMax': {
              top: '20%',
              left: '-90%'
            }
          }}
        >
          <img  src="/stitches-gradient.svg" alt="theming background" />
        </Box>
        <Row justify="flex-start">
          <Title>Built-in Digital</Title>
        </Row>
        <Row justify="flex-start">
          <Title color="violet">Wallet.</Title>
        </Row>
        <Subtitle>
          Matrix provides a set of out of the box&nbsp;
          <Link
            href="https://qrc.global"
            rel="noreferer noopener"
            target="_blank"
            css={{ color: '#FF1CF7' }}
          >
           QRC.Global
          </Link>
          &nbsp;utilities for speeding up your transactions, subscriptions and sale by abbreviating process with an 
          invisible blockchain layer, grouping multiple aspects of web3 into one generalize wallet using traditional fiat currency, or simplifying an otherwise
          a tricky transition into web3.
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
              <Collapse.Group onChange={handleChange} accordion >
                {items.map(({ id, title, description }) => (
                  <Collapse
                    key={id}
                    title={title}
                    showArrow={false}
                    className={cn({ active: activeItem.id === id })}
                    expanded={id === items[0].id}
                    css={{
                      br: '$lg',
                      border: 'none',
                      p: '0 $lg',
                      margin: '$md 0',
                      '& .nextui-collapse-title': {
                        color: '$accents4',
                        fontSize: '1.7rem',
                        transition: 'color 0.2s ease-in-out'
                      },
                      '&.active': {
                        bf: 'saturate(180%) blur(14px)',
                        bg: 'rgba(255, 255, 255, 0.05)',
                        boxShadow: '$md'
                      },
                      '&.active .nextui-collapse-view': {
                        pb: 0
                      },
                      '&.active .nextui-collapse-title': {
                        color: '$text'
                      },
                      '&:hover': {
                        '&:not(.active) .nextui-collapse-title': {
                          color: '$accents7'
                        }
                      }
                    }}
                  >
                    <Text
                      css={{
                        fs: '1.4rem',
                        color: '$accents6',
                        '@xsMax': {
                          fs: '1rem'
                        }
                      }}
                    >
                      {description}
                    </Text>
                  </Collapse>
                ))}
              </Collapse.Group>
              <NextLink href="/qrc-features">
                <BlockLink color="violet">Learn more</BlockLink>
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
              },
              '@xsMax': {
                mt: '$18'
              }
            }}
          >
            <Col
              css={{
                dflex: 'center',
                fd: 'column',
                ai: 'flex-start',
                h: '100%',
                mt: '-10%'
              }}
            >
              {isVisible ? (
                <CodeDemo
                  showWindowIcons
                  line={activeItem.lines}
                  css={{
                    maxHeight: 420
                  }}
                />
              ) : (
                <Blockholder height="420px" />
              )}
            </Col>
          </Grid>
        </Grid.Container>
      </Section>
    </InView>
  );
};

export default BuiltInStitchesSection;
