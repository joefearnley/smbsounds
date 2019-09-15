import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
//import { RootComponent } from '../path-to/root.component'; // <-- Import your application entry point

const App = () => (
  <ApplicationProvider
    mapping={mapping}
    theme={lightTheme}>
    <RootComponent />
  </ApplicationProvider>
);

    export default App;
