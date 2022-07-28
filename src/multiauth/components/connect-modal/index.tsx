import {
  Image,
  Modal as NextModal,
  Container,
  Text,
  Grid,
  Card,
  Button,
  Row,
  Col,
  Spacer,
} from '@nextui-org/react';
import React from 'react';
import { AccountId } from 'caip';
import type { ReactElement, ReactNode } from 'react';
import { useAuthState } from '@multiauth/hooks';
import type {
  AuthAccount,
  AuthenticatedState,
  AuthMethod,
  NetworkConfig,
} from '@multiauth/types';
import { deferred } from '@multiauth/utils';

import { ConnectCard } from '@multiauth/components';
import { ethereum } from '@ceramicnetwork/blockchain-utils-linking';

export type ConnectModalConfig = {
  text?: string;
  title?: string;
  selectedIcon?: string | ReactElement;
};

export type ConnectModalProps = ConnectModalConfig & {
  networks: Array<NetworkConfig>;
};

export default function ConnectModal({
  networks,
  selectedIcon,
  text,
  title,
}: ConnectModalProps): ReactElement | null {
  const [authState, setAuthState] = useAuthState();
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };

  if (authState.status !== 'authenticating' || !authState.modal) {
    return null;
  }

  const ethereumConfig = networks.find((p) => p.key === 'ethereum');
  if (ethereumConfig == null) {
    console.warn('Ethereum provider missing in config');
    return null;
  }

  const ethereumWallets = ethereumConfig.connectors.map((connector) => {
    type Provider = typeof connector.providerKey;
    const key = 'ethereum';
    const method: AuthMethod = { key, connector };

    const onClick = () => {
      if (authState.status === 'authenticating') {
        if (authState.method == null) {
          setAuthState({ ...authState, method });
        }
      } else {
        setAuthState({
          status: 'authenticating',
          promise: deferred<AuthAccount<Provider> | null>(),
          method,
          modal: true,
        });
      }

      connector
        .getProvider(connector.providerKey, connector.params)
        .then((provider) =>
          ethereumConfig.getState(connector.providerKey, provider)
        )
        .then(
          (state) => {
            if (state.account == null) {
              if (authState.status === 'authenticating') {
                authState.promise.resolve(null);
              }
              setAuthState({ status: 'idle' });
            } else {
              const accountID = new AccountId({
                address: state.account,
                chainId: state.chainID,
              });
              const auth: AuthAccount<Provider> = {
                accountID,
                method,
                state: state as AuthenticatedState<Provider>,
              };

              if (authState.status === 'authenticating') {
                authState.promise.resolve(auth);
              }
              setAuthState({ status: 'authenticated', auth });
            }
          },
          (error: Error) => {
            if (authState.status === 'authenticating') {
              authState.promise.reject(error);
            }
            setAuthState({ status: 'failed', error });
          }
        );
    };

    return (
      <ConnectCard
        disabled={
          authState.status === 'authenticating' && authState.method != null
        }
        key={method.connector.key}
        label={method.connector.label}
        loading={
          authState.status === 'authenticating' &&
          authState.method?.connector.key === method.connector.key
        }
        logo={method.connector.logo}
        onClick={onClick}
        selectedIcon={selectedIcon}
        status={''}
      />
    );
  });

  const onCloseModal = () => {
    if (authState.status === 'authenticating') {
      if (authState.method == null) {
        authState.promise.resolve(null);
        setAuthState({ status: 'idle' });
      } else {
        setAuthState({ ...authState, modal: false });
      }
    }
  };

  return (
    <>
      <Button auto shadow color="gradient" onClick={() => setVisible(true)}>
        Connect Wallet
      </Button>
      <NextModal
        scroll
        width="600px"
        aria-labelledby="select-wallet-modal"
        aria-describedby="select-wallet"
        blur
        open={visible}
        style={{ border: '1px solid rgba(139, 139, 139, 0.4)' }}
      >
        <NextModal.Header>
          <Text h3>Select Network & Wallet</Text>
        </NextModal.Header>

        <NextModal.Body>
          <Container css={{ padding: 0 }}>
            <Grid xs={12}>
              <Text css={{ textGradient: "45deg, $purple600 -20%, $pink600 100%",}}weight="bold" h4>
            1. Choose network
            </Text>
            </Grid>
              <ConnectCard
                label={ethereumConfig.label}
                logo={ethereumConfig.logo}
                status="New"
                onClick={function (): void {
                  throw new Error('Function not implemented.');
                }}
              ></ConnectCard>
            <Spacer x={1} />
            <Grid xs={12}>
              <Text css={{ textGradient: "45deg, $cyan200 -20%, $gray50 100%",}}weight="bold" h4>
              2. Choose wallet
              </Text>
            </Grid>
            {ethereumWallets}
          </Container>
        </NextModal.Body>
      </NextModal>
    </>
  );
}
