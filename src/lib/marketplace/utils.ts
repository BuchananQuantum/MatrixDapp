import { ParsedUrlQuery } from 'querystring';

export type SlugParams = ParsedUrlQuery | undefined;

export interface SlugResponse {
  slug: string;
  tag?: string;
}

// Handle optional catch all route for `/marketplace`
function getMarketPlaceSlug(slug: any): any {
  return slug?.length ? slug : ['marketplaces'];
}

export function getSlug(params: SlugParams): SlugResponse {
  // Handle optional catch all route for `/marketplace`
  const slug = getMarketPlaceSlug(params?.slug);
  if (slug[0] === 'tag') {
    return {
      slug: `/marketplace/${getMarketPlaceSlug(slug.slice(2)).join('/')}`,
      tag: slug[1],
    };
  }

  return { slug: `/marketplace/${slug.join('/')}` };
}
