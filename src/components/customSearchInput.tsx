import React from 'react';
import { SearchBox } from 'react-instantsearch-dom';

const CustomSearchInput = () => (
  <div>
      <SearchBox
          translations={{ placeholder: 'Search for Events' }}
      />
  </div>
);

export default CustomSearchInput;