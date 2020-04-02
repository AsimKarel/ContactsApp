import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from "react-native";

function EditContactsModal({ contact, onUpdatePress, onCancelPress }) {
    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.title}>Update Contact</Text>
                <TextInput
                    placeholder={'Name'}
                    style={styles.inputBox}
                    value={contact.name}
                />
                <TextInput
                    placeholder={'Email'}
                    style={styles.inputBox}
                    value={contact.email}
                />
                <View style={{ flexDirection: "row" }}>
                    <TextInput
                        placeholder={'Code'}
                        value={contact.country_code}
                        style={{
                            flex: 1, height: 70,
                            borderBottomColor: 'gray',
                            borderBottomWidth: 0.5,
                        }}
                    />
                    <TextInput
                        placeholder={'Phone Number'}
                        value={contact.phone}
                        style={{
                            flex: 3, height: 70,
                            borderBottomColor: 'gray',
                            borderBottomWidth: 0.5,
                        }}
                    />
                </View>

                <TouchableOpacity style={styles.updateButton}>
                    <Text style={{ fontSize: 20, alignSelf: 'center', color:'blue' }}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.updateButton} onPress={onCancelPress}>
                    <Text style={{ fontSize: 20, alignSelf: 'center', color:'red' }}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}




const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        width: '95%',
        height: '50%',
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderWidth: 0.5,
        borderColor: 'gray',
    },
    title: {
        fontSize: 20,
    },
    inputBox: {
        width: '100%',
        height: 70,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    updateButton: {
        width: '100%',
        marginTop: 20,
        height: 50,
        padding: 10,
        borderWidth: 0.3,
        alignItems: 'center',
        borderRadius: 10,
    },
    cancelButton: {
        width: '100%',
        marginTop: 10,
        height: 50,
        padding: 10,
        borderWidth: 0.3,
        alignItems: 'center',
        borderRadius: 10,
    },
})
export default EditContactsModal;