import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
  return (
    <div
      style={{
        backgroundColor: 'hsl(195deg, 20%, 86%)',
        bottom: '0%',
        height: '40%',
        top: '60%',
      }}
    >
      <CharacterEditor />
      <Footer />
    </div>
  );
}

export default App;
