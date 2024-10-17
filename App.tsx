import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import store from './src/store';
import { userFetchRequested } from './src/userSlice';

const UserComponent = () => {
  const dispatch = useDispatch();
  
  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);


  const fetchUser = () => {
    dispatch(userFetchRequested({ userId: 1 }));
  };


  return (
    <View style={styles.container}>
      <Button title="Fetch User" onPress={fetchUser} />

      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      {user && (
        <Text style={styles.text}>
          User: {user.name}, Email: {user.email}
        </Text>
      )}

      {error && <Text style={styles.error}>Error: {error}</Text>}
    </View>
  );
};

// Wrap the app with Redux Provider
const App = () => (
  <Provider store={store}>
    <UserComponent />
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:10
  },
  text: {
    marginTop: 20,
    fontSize: 18,
  },
  error: {
    marginTop: 20,
    fontSize: 18,
    color: 'red',
  },
});

export default App;
