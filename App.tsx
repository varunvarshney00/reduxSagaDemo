// App.tsx
import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/store'; // Import the store
import CounterComponent from './src/components/CounterComponent';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Redux with TypeScript Demo</Text>
        <CounterComponent />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
