import {
  Card,
  Spinner,
  styled,
  Text,
  Grid,
  Col,
  Row,
  StyledSpinnerContainer,
  Button,
} from '@nextui-org/react';
import React, { Fragment } from 'react';
import type { ReactElement, ReactNode } from 'react';

function noop() {}

type CardImageProps = { children: ReactNode; src: string };

const CardImage =
  styled(Card.Image) &&
  function CardImage({ children, src }: CardImageProps) {
    return <div>{children}</div>;
  };

type ChildrenProps = { children: ReactNode };

function SpinnerContainer({ children }: ChildrenProps) {
  <div>{children}</div>;
}

function SelectedImage({ children }: ChildrenProps) {
  return <div>{children}</div>;
}

export type ProviderDisplay = {
  label: string;
  logo: string;
  status: string;
};

export type ConnectCardProps = ProviderDisplay & {
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
  selected?: boolean;
  selectedIcon?: string | ReactElement;
};

export default function ConnectCard({
  disabled,
  label,
  loading,
  logo,
  onClick,
  selected,
  selectedIcon,
}: ConnectCardProps): ReactElement {
  let displaySelected = null;
  if (selected) {
    const icon =
      selectedIcon === null || typeof selectedIcon === 'string' ? (
        <Fragment>
          <Card.Image alt="selected" src={selectedIcon} />
        </Fragment>
      ) : (
        selectedIcon
      );
    displaySelected = <SelectedImage>{icon}</SelectedImage>;
  }
  return (
    <Grid xs={12} sm={12} md={6}>
      <Card css={{ w: '100%', h: '250px' }} onClick={disabled ? noop : onClick}>
        <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
          <Col>
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              color="#ffffffAA"
            >
              New
            </Text>
            <Text h3 color="black">
              {label}
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image objectFit="cover" src={logo}>
            {loading ? (
              <StyledSpinnerContainer>
                <Spinner size="md" />
              </StyledSpinnerContainer>
            ) : null}
            {displaySelected}
          </Card.Image>
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: 'absolute',
            bgBlur: '#ffffff66',
            borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Text color="#000" size={12}>
                Connect with {label}.
              </Text>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Button
                  onClick={disabled ? noop : onClick}
                  shadow
                  auto
                  rounded
                  color="secondary"
                >
                  <Text
                    css={{ color: 'inherit' }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Connect
                  </Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
}
