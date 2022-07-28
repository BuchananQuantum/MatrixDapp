import ogImage from '../../images/opengraph-anon.jpg'

const title = 'QRC.ID'
const description =
  'QRC.ID is your universal profile and avatar for the Web3 metaverse – 100% owned by you.'

export default function OpenGraphMeta() {
  return (
    <>
      <meta name="twitter:site" content="@meQRC" />
      <meta name="twitter:title" content={title} />
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImage.src} />
      <meta name="twitter:image:alt" content="System Failure" />
      <meta property="og:image" content={ogImage.src} />
    </>
  )
}