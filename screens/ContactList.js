import { FlatList, View, TextInput, TouchableOpacity, Text } from 'react-native';
import React, { Component } from 'react';
import SegmentControl from 'react-native-segment-controller';
import ContactItem from '../components/ContactItem';
import LoadButton from '../components/LoadButton';
import { getContacts } from '../apis/Api';
import  styles  from './styling/ContactList';



class ContactList extends React.Component {

    state = {
        data: [],
        searchQuery: '',
        sortBy: 'name',
        sortOrder: 'ASC',
        buttonMessage: 'Load More'
    };
    take = 10;
    skip = 0;
    searchQuery = '';
    sortBy = 'name';
    sortOrder = 'ASC';
    loadMore = true;

    componentDidMount() {
        this.loadData()
    }


    loadData = () => {
        this.setState({buttonMessage:'Loading'})
        getContacts({
            take: this.take,
            skip: this.skip,
            searchQuery: this.searchQuery,
            sortBy: this.sortBy,
            sortOrder: this.sortOrder,
        }).then(data => {
            if(this.searchQuery != ''){
                this.setState({data:[]})    
            }
            this.setState({ data: [...this.state.data, ...data], buttonMessage: 'Load More' })
            if(data.length<10){
                this.loadMore = false;
                this.setState({buttonMessage:'All Data Loaded'})
            }
            if(data.length == 0){
                this.loadMore = false;
                this.setState({buttonMessage:'No Data'})
            }
            console.log(this.state)
        }).catch(err => {
            alert(JSON.stringify(err))
        })
    }

    loadMoreData = () => {
        // this.setState({ skip: this.state.skip + 10 })
        if(!this.loadMore){
            this.take = 10;
            this.skip = 0;
            return;
        }
        this.skip = this.skip + 10;
        this.loadData()
    }
    
    search = text => {
        if(text == ''){
            this.take = 10;
            this.skip = 0;
        }
        this.searchQuery = text;
        this.setState({searchQuery: text});
        this.loadMore = true;
        this.loadData();
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
        this.loadMore = true;
        this.loadData();
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
        this.loadMore = true;
        this.loadData();
    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder={'Type here to search'}
                    style={styles.inputBox}
                    value={this.state.searchQuery}
                    onChangeText={this.search}
                    clearButtonMode={'while-editing'}
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
                <FlatList
                    style={{ width: '95%' }}
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    showsVerticalScrollIndicator={false}
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
                                <Text style={styles.btnText}>{this.state.buttonMessage}</Text>
                                {/* {this.state.fetching_from_server ? (
                            <ActivityIndicator color="white" style={{ marginLeft: 8 }} />
                            ) : null} */}
                            </TouchableOpacity>
                        </View>
                    }
                />
                
            </View>
        );
    }
}



export default ContactList;