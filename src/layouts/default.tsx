import React, { ReactNode } from 'react';
import { Container } from '@nextui-org/react';
import { NotifyBanner } from '@components';
import Header from './header';
import Footer from './footer';
import Navbar from './navbar';

export interface Props {
  children: ReactNode
}

const DefaultLayout: React.FC<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  return (
    <div id="app-container">
      <Header />
      <NotifyBanner
        text="Welcome to the Show!"
        href="/"
      />
      <Navbar isHome hasNotify />
      <Container
        lg={true}
        id="main-container"
        display="flex"
        as="main"
        alignContent="space-between"
        className="main-container"
        css={{
          position: 'relative',
          minHeight: '100vh',
          '@mdMax': {
            overflowX: 'hidden'
          }
        }}
      >
        {children}
        <Footer />
      </Container>
    </div>
  );
};

export default DefaultLayout;
