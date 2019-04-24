import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { QuestionScreen, DocPreviewScreen, TitleScreen } from './screens';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div style={styles.container}>
          <div style={styles.subContainer}> 
            <TitleScreen />
            <div style={{width: '100%'}}></div>
            <QuestionScreen />
            <DocPreviewScreen />
          </div>
        </div>
      </Provider>        
      );
  }
}

const styles = {
  container: {
    backgroundColor: '#f8f9fa',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  subContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  }
}
