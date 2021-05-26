import HomeTemplate from 'templates/Home'
import { MapProps } from 'components/Map'
import { GET_PLACES } from 'graphql/queries'
import client from 'graphql/client'
import { GetPLacesQuery } from 'graphql/generated/graphql'

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

export const getStaticProps = async () => {
  const { places } = await client.request<GetPLacesQuery>(GET_PLACES)

  return {
    revalidate: 60 * 60 * 24, // once per day
    props: {
      places
    }
  }
}
