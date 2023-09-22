import { groq } from 'next-sanity'

import { readClient } from './lib/client'
import { buildQuery } from './utils'

type GetResourceParams = {
  query: string
  category: string
  page: string
}

export const getResources = async (params: GetResourceParams) => {
  const { query, category, page } = params

  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: 'resource',
        query,
        category,
        page: parseInt(page),
      })}{
        _id,
        title,
        downloadLink,
        "image": poster.asset->url,
        views,
        slug,
        category,
      }`,
    )

    return resources
  } catch (error) {
    console.error(error)
  }
}

export const getResourcesPlaylist = async () => {
  try {
    const resources = await readClient.fetch(
      groq`*[_type == "resourcePlaylist"] | order(createdAt desc) {
        _id,
        title,
        resources[0...6] -> {
          title,
          _id,
          downloadLink,
          "image": poster.asset->url,
          views,
          category,
        },
      }`,
    )

    return resources
  } catch (error) {
    console.error(error)
  }
}
