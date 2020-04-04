import { FlatList, StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import React, { Component } from 'react';
import SegmentControl from 'react-native-segment-controller';
import ContactItem from '../components/ContactItem';
import LoadButton from '../components/LoadButton';
import { getContacts } from '../apis/Api'



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
        }],
        searchQuery: '',
        sortBy: 'name',
        sortOrder: 'ASC',
    };
    take = 10;
    skip = 0;
    searchQuery = '';
    sortBy = 'name';
    sortOrder = 'ASC';


    componentDidMount() {
        // this.loadData()
    }


    loadData = () => {
        getContacts({
            take: this.take,
            skip: this.skip,
            searchQuery: this.searchQuery,
            sortBy: this.sortBy,
            sortOrder: this.sortOrder,
        }).then(data => {
            this.setState({ data: [...this.state.data, ...data] })
        }).catch(err => {
            alert(JSON.stringify(err))
        })
    }

    loadMoreData = () => {
        // this.setState({ skip: this.state.skip + 10 })
        this.skip = this.skip + 10;
        // this.loadData()
    }
    
    search = text => {
        if(text == ''){
            this.take = 10;
            this.skip = 0;
        }
        this.searchQuery = text;
        this.setState({searchQuery: text, data:[]});
        // this.loadData();
    };

    sortByChanged = (index) => {
        if(index == 0){
            this.sortBy = 'name';
            this.setState({sortBy:'name', data:[]});
        }
        else{
            this.sortBy = 'created_on';
            this.setState({sortBy:'created_on', data:[]});
        }
        // this.loadData();
    }

    sortOrderChanged = (index) => {
        if(index == 0){
            this.sortOrder = 'ASC';
            this.setState({sortOrder:'ASC', data:[]});
        }
        else{
            this.sortOrder = 'DESC';
            this.setState({sortOrder:'DESC', data:[]});
        }
        // this.loadData();
    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder={'Type here to search'}
                    style={styles.inputBox}
                    value={this.state.searchQuery}
                    onChangeText={this.search}
                />
                <View style={{flexDirection:'row', width:'80%', marginTop:10,}}>
                    <View style={{flex:1, marginRight: 5}}>
                        <SegmentControl
                            values={['By Name', 'By Date']}
                            selectedIndex={
                                this.state.sortBy == 'name' ? 0 : 1
                            }
                            height={30}
                            onTabPress={(index) => {
                                this.sortByChanged(index);
                            }}
                            borderRadius={5}
                        />
                    </View>
                    <View style={{flex:1, marginLeft: 5}}>
                        <SegmentControl
                            style={{flex:3}}
                            values={['Ascending', 'Descending']}
                            selectedIndex={
                                this.state.sortOrder == 'ASC'? 0 : 1
                            }
                            height={30}
                            onTabPress={(index) => {
                                this.sortOrderChanged(index)
                            }}
                            borderRadius={5}
                        /> 
                    </View>

                </View>

                
                {this.state.data.length == 0 ? 
                (<Text style={{ width: '95%' }}>No Results</Text>):
                (<FlatList
                    style={{ width: '95%' }}
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({ item, index }) => (
                        <ContactItem contact={item} />
                    )}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    ListFooterComponent={
                        <View style={styles.footer}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.loadMoreData();
                                }}
                                style={styles.loadMoreBtn}>
                                <Text style={styles.btnText}>Load More</Text>
                                {/* {this.state.fetching_from_server ? (
                            <ActivityIndicator color="white" style={{ marginLeft: 8 }} />
                            ) : null} */}
                            </TouchableOpacity>
                        </View>
                    }
                />)
                }
                
            </View>
        );
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
    footer: {
        width: '100%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    loadMoreBtn: {
        width: '100%',
        padding: 10,
        backgroundColor: '#F0F0F6',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
    },
});

export default ContactList;