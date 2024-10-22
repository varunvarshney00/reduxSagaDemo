// src/features/users/UsersList.js
import React from 'react';
import { Text, View, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import { useGetUsersQuery } from './apiSlice';





const UsersList = () => {

  const { data: users, error, isLoading } = useGetUsersQuery();





  if (isLoading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error loading users!</Text>;





  return (
    <SafeAreaView>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}

        renderItem={({ item }) => (
          <View>
            <Text>{item.email}</Text>
          </View>
        )}

      />
    </SafeAreaView>
  );





};

export default UsersList;
