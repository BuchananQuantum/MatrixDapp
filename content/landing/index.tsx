import React from 'react';
import {
  Moon,
  Magic,
  Flash,
  Devices,
  Server,
  TagUser,
  RoundPointer,
  Maximize,
  CodeDocument,
  HtmlLogo
} from '@components';

export default {
  topFeatures: [
    {
      title: 'Classified Listings',
      description:
        'Provides a simple way to post classified listings, personals, content creator exposure, and all of the dencentralized discretion.',
      icon: <Magic fill="#FF4ECD" />
    },
    {
      title: 'Get Paid Fast',
      description:
        'Avoids unnecessary payout wait times, QRC enables a more performant payout model for our creators vs other platforms. Instantly get paid for content. Subscription streams coming soon.',
      icon: <Flash fill="#FF4ECD" />
    },
    {
      title: 'Marketplace',
      description:
        'Matrix automatically connects your wallet to your profile, enable you to begin selling fast. The signup process is as easy as scanning a QR Code provided by your QRC Wallet. ',
      icon: <Moon fill="#FF4ECD" />
    },
    {
      title: 'Open Social Network',
      description:
        'Matrix is fully-decentralized social network to minimize censorship, and we provide the best possible experience. Matrix welcomes unrestricted content, NSFW Creators and political discussions!',
      icon: <Devices fill="#FF4ECD" />
    }
  ],
  fullFeatures: [
    {
      title: 'Open Social Network (OSN)',
      description:
        'All Matrix content is unrestricted and provides a simple way to implement your ideas and express your thoughts in a sovern space.',
      icon: <Server fill="#FF4ECD" />
    },
    {
      title: 'Accessible Content',
      description:
        'Matrix profiles follow the standard 32 bit cryptographic guidelines, providing you with true ownership over your data and profile. ',
      icon: <TagUser fill="#FF4ECD" />
    },
    {
      title: 'Focus interactions',
      description:
        'Focus your time spent scrolling or shopping in the matrix. Business Listings, NSFW Creators & Patron Stream Subscription.',
      icon: <RoundPointer fill="#FF4ECD" />
    },
    {
      title: 'Built-in Chat',
      description:
        'Matrix provides a set of common encrypted wallet to wallet communication methods. Chat without the fear of big brother watching. ',
      icon: <Maximize fill="#FF4ECD" />
    },
    {
      title: 'Safe Connections',
      description:
        'Build safe connections, Matrix has a full-verification and reputation management system for in-person meetups, dating or after hours arrangements.',
      icon: <CodeDocument filled={false} fill="#FF4ECD" />
    },
    {
      title: 'Why Crypto',
      description:
        'Crypto is more then money. Cryptography enables a truly decentralized world. You own your data with Matrix. Were unable to use any metrics to taget ads back at you.',
      icon: <HtmlLogo fill="#FF4ECD" />
    },
    {
      title: 'E2E encryption',
      description:
        "Since Matric is based on cryptography, it only interacts through your DID Identifier, so you don't have to include an email or any personalized information.",
      icon: <Flash fill="#FF4ECD" />
    },
    {
      title: 'Beautifully designed',
      description:
        'Matrix is unique. We are not tied by any affiliations to major social media, which makes us able to ensure the safety and security of your web3 sovereignty',
      icon: <Magic fill="#FF4ECD" />
    }
  ],
};
