import React, { Component, useState } from "react";
import { View, Text, TouchableOpacity, Modal, SafeAreaView, Alert } from "react-native";
import EditContactsModal from './EditContactsModal'
import { updateContact, deleteContact } from '../apis/Api'
import styles from './styling/ContactDetails';

class ContactDetails extends React.Component {

    constructor() {
        super();
    }


    state = {
        modalVisible: false,
        contact: {
            id: 0,
            name: " ",
            phone: "",
            email: "",
            country_code: "",
            created_on: "",
            updated_on: ""
        },
        phone_exists: false,
        email_exists: false,
    }

    componentDidMount() {
        this.props.navigation.setOptions({
            headerRight: () => {
                return (
                    <View style={{ flexDirection: 'row', marginRight:20 }}>
                        <TouchableOpacity style={{marginRight:10}} onPress={() => this.setState({ modalVisible: true })} >
                            <Text style={styles.actionButtons}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            Alert.alert(
                                'Delete',
                                'Are yoy sure you want to delete this contact?',
                                [
                                {text: 'Yes', onPress: () => this.deleteContact()},
                                {text: 'Cancel',},
                                ],
                                { cancelable: false }
                            )

                            
                        }} title="Delete" >
                            <Text  style={styles.actionButtons}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                );
            }
        });
        this.setState({ contact: this.props.route.params.contact })

    }


    deleteContact = () =>{
        // this.props.navigation.navigate('Contacts')
        deleteContact(this.state.contact.id)
        .then(response => {
            this.props.navigation.goBack();
        })
        .catch(error => {

        })
    }

    updateContact = (updated) => {
        this.setState({phone_exists: false, email_exists: false});
        updateContact(updated)
            .then(res => {
                this.setState({ contact: updated, modalVisible: false })
            })
            .catch(error => {
                if(error.response.data && error.response.data.code){
                    if(error.response.data.code == 'EXIST' &&  error.response.data.reason == 'PHONE'){
                        this.setState({phone_exists: true});
                    }
                    else if(error.response.data.code == 'EXIST' &&  error.response.data.reason == 'EMAIL'){
                        this.setState({email_exists: true});
                    }
                }
                else
                    alert('Failed to save')
            })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>

                <Modal
                    animationType="slide"
                    transparent={this.state.modalVisible}
                    visible={this.state.modalVisible}
                    >
                    <EditContactsModal title={'Update Contact'} contact={this.state.contact}
                        onUpdatePress={this.updateContact}
                        onCancelPress={() => { this.setState({ modalVisible: false }); }} 
                        emailExists={this.state.email_exists}
                        phoneExists={this.state.phone_exists}
                        />
                </Modal>

                <View style={styles.topSection}>
                    <View style={styles.letterSection}>
                        <Text style={styles.initialLetter}>{this.state.contact.name[0]}</Text>
                    </View>
                    <Text style={styles.nameText}>{this.state.contact.name}</Text>
                </View>
                <View style={styles.bottomSection}>
                    <TouchableOpacity style={styles.contactButton} > 
                        <Text>Contact Number:</Text>
                        <Text style={styles.contactText}>{this.state.contact.country_code} {this.state.contact.phone}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.emailButton}>
                        <Text>Email:</Text>
                        <Text style={styles.emailText}>{this.state.contact.email}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

export default ContactDetails;
