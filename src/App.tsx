// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import UsersList from './features/users/UsersList';
import { SafeAreaView } from 'react-native';

const App = () => {

    return (

        <Provider store={store}>
            <SafeAreaView>
                <UsersList />
            </SafeAreaView>
        </Provider>
    );
};

export default App;
