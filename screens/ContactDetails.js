import React, { Component, useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import EditContactsModal from './EditContactsModal'
import { updateContact } from '../apis/Api'
import styles from './styling/ContactDetails';

class ContactDetails extends React.Component {
    state = {
        modalVisible: false,
        contact: {
            id: 8,
            name: "Asim",
            phone: "123",
            email: "a@a.com",
            country_code: "+91",
            created_on: "2020-04-01T10:13:22.000Z",
            updated_on: "2020-04-01T10:13:22.000Z"
        }
    }

    updateContact = (updated) => {
        updateContact(updated)
            .then(res => {
                this.setState({ contact: updated, modalVisible: false })
            })
            .catch(err => {

            })
    }

    render() {
        return (
            <View style={styles.container}>

                <Modal
                    animationType="slide"
                    transparent={this.state.modalVisible}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}>
                    <EditContactsModal contact={this.state.contact}
                        onUpdatePress={this.updateContact}
                        onCancelPress={() => { this.setState({ modalVisible: false }); }} />
                </Modal>

                <View style={styles.topSection}>

                    <View style={styles.actionButtons}>
                        <TouchableOpacity style={styles.editButton} onPress={() => { this.setState({ modalVisible: true }); }}>
                            <Text style={{ fontSize: 30, padding: 5 }}>{String.fromCodePoint(0x270F)}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deleteButton}>
                            <Text style={{ fontSize: 30, padding: 5 }}>{String.fromCodePoint(0x1F5D1)}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.letterSection}>
                        <Text style={styles.initialLetter}>{this.state.contact.name[0]}</Text>
                    </View>
                    <Text style={styles.nameText}>{this.state.contact.name}</Text>
                </View>
                <View style={styles.bottomSection}>
                    <TouchableOpacity style={styles.contactButton}>
                        <Text>Contact Number:</Text>
                        <Text style={styles.contactText}>{this.state.contact.phone}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.emailButton}>
                        <Text>Email:</Text>
                        <Text style={styles.emailText}>{this.state.contact.email}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default ContactDetails;
