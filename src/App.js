import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { QuestionScreen, DocPreviewScreen } from './screens';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <QuestionScreen />
        <DocPreviewScreen />
      </Provider>        
      );
  }
}
