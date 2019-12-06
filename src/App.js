import React from 'react';
import './App.css';

import classList from './classList';
import Definition from './definition/AutocompleteDefinition';
import Autocomplete from './autocomplete-demo/Autocomplete';
import GoogleFeud from './google-feud/google-feud';

function App() {
  return (
    <div>
      <Definition />
      <GoogleFeud />
      <Autocomplete suggestions={classList} />
    </div>
  );
}

export default App;
