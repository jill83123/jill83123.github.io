import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '@/consts';

export async function GET(context) {
  const posts = (await getCollection('post')).filter((post) => post.data.isShow);

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
      pubDate: post.data.createdDate,
    })),
  });
}
