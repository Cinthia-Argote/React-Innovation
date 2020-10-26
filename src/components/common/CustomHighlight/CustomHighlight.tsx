import React from 'react';
import { connectHighlight } from 'react-instantsearch-dom';

const Highlight = ({ highlight, attribute, hit }: any) => {
  const parsedHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  });
  
  return (
    <span>
      {parsedHit.map(
        (part: any, index: any) =>
         {
           return  part.isHighlighted ? (
            <mark key={index}>{part.value}</mark>
          ) : (
            <span style={{ color: 'white'}} key={index}>{part.value}</span>
          )
         }
      )}
    </span>
  );
};

const CustomHighlight = connectHighlight(Highlight);

export default CustomHighlight;