import type { GetServerSideProps, GetStaticProps } from 'next'
import Head from 'next/head'
import Image, { type StaticImageData } from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

import backgroundImage from '../images/home-background.jpg'
import linkIcon from '../images/icons/home-link.svg'
import metaverseIcon from '../images/icons/home-metaverse.svg'
import profileIcon from '../images/icons/home-profile.svg'
import verifyIcon from '../images/icons/home-verify.svg'
import searchIcon from '../images/icons/search.svg'
import footerDiscordIcon from '../images/icons/social-discord.svg'
import footerGithubIcon from '../images/icons/social-github.svg'
import footerTwitterIcon from '../images/icons/social-twitter.svg'

import landingContent from '@content/landing';
import DefaultLayout from '@layouts/default'
import { Loading, Spacer, StyledLoadingContainer } from '@nextui-org/react'
import { DidSearchForm, Search, OpenGraphMeta, FeaturesGrid,
  Hero,
  Section,
  Community,
  InstallBanner,
  CustomThemesSection,
  ComparationSection,
  DarkModeSection,
  CustomizationSection,
  BuiltInStitchesSection,
  LastButNotLeastSection } from '@components'
import { getCurrentTag, Route } from '@lib/marketplace/page'



export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { getRequestState } = await import('../utils/server')
  return { props: { state: await getRequestState(ctx) } }
}

interface Props {
  routes: Route[];
  currentRoute: Route;
}

export default function Home() {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [focus, setFocus] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  const inputIcon = loading ? (
    <StyledLoadingContainer>
    <Loading type='points' size='md' />
    </StyledLoadingContainer>
  ) : (
    <StyledLoadingContainer>
      <Search height={24} width={24} />
    </StyledLoadingContainer>
  )

  return (
    <DefaultLayout>
      <Hero />
      <Section>
        <FeaturesGrid features={landingContent.topFeatures} />
      </Section>
      <CustomThemesSection />
      <ComparationSection />
      <DarkModeSection />
      <CustomizationSection />
      <BuiltInStitchesSection />
      <LastButNotLeastSection />
      <Section css={{ zIndex: '$10' }}>
        <Spacer y={6} css={{ '@xsMax': { mt: '$16' } }} />
        <InstallBanner />
      </Section>
      <Spacer y={6} />
      <Section>
        <Community />
      </Section>
      <Spacer y={4} />
    </DefaultLayout>
  )

}


