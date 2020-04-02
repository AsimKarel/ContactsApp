import { FlatList, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import ContactItem from '../components/ContactItem'
import LoadButton from '../components/LoadButton'



class ContactList extends React.Component {

    state = {
        data: [{
            "id": 8,
            "name": "Asim",
            "phone": "123",
            "email": "a@a.com",
            "country_code": "+91",
            "created_on": "2020-04-01T10:13:22.000Z",
            "updated_on": "2020-04-01T10:13:22.000Z"
        },
        {
            "id": 8,
            "name": "name1",
            "phone": "",
            "email": "a@a.com",
            "country_code": "+91",
            "created_on": "2020-04-01T10:13:22.000Z",
            "updated_on": "2020-04-01T10:13:22.000Z"
        },
        {
            "id": 8,
            "name": "name1",
            "phone": "",
            "email": "a@a.com",
            "country_code": "+91",
            "created_on": "2020-04-01T10:13:22.000Z",
            "updated_on": "2020-04-01T10:13:22.000Z"
        },
        {
            "id": 8,
            "name": "name1",
            "phone": "",
            "email": "a@a.com",
            "country_code": "+91",
            "created_on": "2020-04-01T10:13:22.000Z",
            "updated_on": "2020-04-01T10:13:22.000Z"
        },
        {
            "id": 8,
            "name": "name1",
            "phone": "",
            "email": "a@a.com",
            "country_code": "+91",
            "created_on": "2020-04-01T10:13:22.000Z",
            "updated_on": "2020-04-01T10:13:22.000Z"
        },
        {
            "id": 8,
            "name": "name1",
            "phone": "",
            "email": "a@a.com",
            "country_code": "+91",
            "created_on": "2020-04-01T10:13:22.000Z",
            "updated_on": "2020-04-01T10:13:22.000Z"
        },
        {
            "id": 8,
            "name": "name1",
            "phone": "",
            "email": "a@a.com",
            "country_code": "+91",
            "created_on": "2020-04-01T10:13:22.000Z",
            "updated_on": "2020-04-01T10:13:22.000Z"
        },
        {
            "id": 8,
            "name": "name1",
            "phone": "",
            "email": "a@a.com",
            "country_code": "+91",
            "created_on": "2020-04-01T10:13:22.000Z",
            "updated_on": "2020-04-01T10:13:22.000Z"
        },
        {
            "id": 8,
            "name": "name1",
            "phone": "",
            "email": "a@a.com",
            "country_code": "+91",
            "created_on": "2020-04-01T10:13:22.000Z",
            "updated_on": "2020-04-01T10:13:22.000Z"
        }, {
            "id": 8,
            "name": "name1",
            "phone": "123",
            "email": "a@a.com",
            "country_code": "+91",
            "created_on": "2020-04-01T10:13:22.000Z",
            "updated_on": "2020-04-01T10:13:22.000Z"
        }, {
            "id": 8,
            "name": "name1",
            "phone": "123",
            "email": "a@a.com",
            "country_code": "+91",
            "created_on": "2020-04-01T10:13:22.000Z",
            "updated_on": "2020-04-01T10:13:22.000Z"
        }],
        searchText: '',
    };
    componentDidMount() {
        //   this.getBooks('');
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder={'Type here to search'}
                    style={styles.inputBox}
                    value={this.state.searchText}
                    onChangeText={this.search}
                />
                <FlatList
                    style={{ width: '95%' }}
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({ item, index }) => (
                        <ContactItem contact={item} />
                    )}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    ListFooterComponent={<LoadButton />}
                />
            </View>
        );
    }

    press = () => {

    }



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        marginVertical: 50,
    },
    separator: {
        height: 0.5,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    inputBox: {
      backgroundColor: '#F0F0F6',
      width: '90%',
      padding: 15,
      fontSize: 16,
      textAlign: 'center',
      borderRadius: 10,
    },
});

export default ContactList;