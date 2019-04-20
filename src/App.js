import React from 'react';
import infoBlocks from './components/infoBlocks';

class App extends React.Component {
  render() {
    return (
        infoBlocks['2.4']()
      );
  }
}

export default App;
