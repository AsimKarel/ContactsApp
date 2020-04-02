/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import ContactList from './screens/ContactList';
import ContactDetails from './screens/ContactDetails';


const App: () => React$Node = () => {
  return (
    <View style={styles.parent}>
      <ContactDetails/>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#F8F7FF',
  },
});
export default App;
