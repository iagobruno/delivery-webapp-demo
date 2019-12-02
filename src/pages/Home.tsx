import React from 'react'
import { collections } from '../data'

import Page from '../components/Page'
import Collection from '../components/Collection'

const Home: React.FunctionComponent = () => {
  return (
    <Page id="home">
      {Object.entries(collections).map(([title, listOfIds]) => (
        <Collection
          key={title}
          title={title}
          listOfIds={listOfIds}
        />
      ))}
    </Page>
  );
}

export default Home
