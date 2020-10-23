import React from 'react';
import { Hits, Stats, Pagination } from 'react-instantsearch-dom';

import HitEvent from './hitEvent';

const AlgoliaContent = () => (
  <main>
      <div className="information">
          <div className="stats"> <Stats/> </div>
          <div className="">
             
        
          </div>
      </div>
      <Hits hitComponent={HitEvent} />
      <div> <Pagination/></div>
  </main>
);

export default AlgoliaContent;