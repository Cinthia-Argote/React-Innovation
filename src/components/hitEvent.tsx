import React from 'react';
import { Highlight } from 'react-instantsearch-dom';

const HitEvent = (props: any) => {
  const { hit = {} } = props
  console.log('props', props);
  return (
    <div className="card">
      <div className="card-contents">     
        <Highlight attribute="title" hit={hit} className="card-title" />
        <Highlight attribute="publishingDate" hit={hit}  className="card-year"/>
        <div className="card-rating">status: {hit.status}</div>
      </div>
    </div>
  )
};

export default HitEvent;
