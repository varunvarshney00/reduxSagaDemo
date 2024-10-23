import React, { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { View, Text, TextInput, Button, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { store } from './redux/store';
import { bookAdded, booksSelectors } from './redux/booksSlice';

const BooksList = () => {
    const allBooks = useSelector(booksSelectors.selectAll);
    // console.log('allBooks==>', allBooks);

    return (
        <SafeAreaView>

            <FlatList
                data={allBooks}

                keyExtractor={(item) => item.bookId}

                renderItem={({ item }) => (

                    <View style={styles.bookItem}>
                        <Text style={styles.bookText}>{item.title}</Text>
                    </View>
                )}
            />
        </SafeAreaView>

    );
};

const AddBook = () => {
    const [bookTitle, setBookTitle] = useState('');
    // console.log('booktitle==>', bookTitle);
    // console.log('usestate==>', useState());

    const dispatch = useDispatch();
    // console.log('dispatch', useDispatch)

    const handleAddBook = () => {
        // console.log('booktitle==>', bookTitle);
        console.log('trim booktitle==>', bookTitle.trim());
        if (bookTitle.trim() !== '') {
            dispatch(bookAdded({
                bookId: Math.random().toString(),
                title: bookTitle
            }));
            setBookTitle('');
        }
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Enter book title"
                value={bookTitle}
                onChangeText={setBookTitle}
            />
            <Button title="Add Book" onPress={handleAddBook} />
        </View>
    );
};

const App = () => {

    return (
        <Provider store={store}>


            <View style={styles.container}>

                <Text style={styles.title}>Book List</Text>
                <AddBook />
                <BooksList />

            </View>


        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        marginRight: 10,
        padding: 10,
    },
    bookItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    bookText: {
        fontSize: 18,
    },
});

export default App;
