import React from 'react'
import { collections } from '../data'

import PageWrapper from '../components/PageWrapper'
import Collection from '../components/Collection'

const HomePage: React.FunctionComponent = () => {
  return (
    <PageWrapper id="home">
      {Object.entries(collections).map(([title, listOfIds]) => (
        <Collection
          key={title}
          title={title}
          listOfIds={listOfIds}
        />
      ))}
    </PageWrapper>
  );
}

export default HomePage
