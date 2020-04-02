import React, { Component,useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal, TouchableHighlight } from "react-native";
import EditContactsModal from './EditContactsModal'



const contact = {
    "id": 8,
    "name": "Asim",
    "phone": "123",
    "email": "a@a.com",
    "country_code": "+91",
    "created_on": "2020-04-01T10:13:22.000Z",
    "updated_on": "2020-04-01T10:13:22.000Z"
}
// var modalVisible = false;

function ContactDetails() {
    var [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>

            <Modal
                animationType="slide"
                transparent={modalVisible}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                }}>
                <EditContactsModal contact={contact} onCancelPress={()=>{setModalVisible(false);}}/>
            </Modal>
            
            <View style={styles.topSection}>

                <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.editButton} onPress={()=>{setModalVisible(true);}}>
                        <Text style={{fontSize: 30,padding:5}}>{String.fromCodePoint(0x270F)}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton}>
                        <Text style={{fontSize: 30,padding:5}}>{String.fromCodePoint(0x1F5D1)}</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.letterSection}>
                    <Text style={styles.initialLetter}>{contact.name[0]}</Text>
                </View>
                <Text style={styles.nameText}>{contact.name}</Text>
            </View>
            <View style={styles.bottomSection}>
                <TouchableOpacity style={styles.contactButton}>
                    <Text>Contact Number:</Text>
                    <Text style={styles.contactText}>{contact.phone}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.emailButton}>
                    <Text>Email:</Text>
                    <Text style={styles.emailText}>{contact.email}</Text>
                </TouchableOpacity>
            </View>


            


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        marginVertical: 50,
    },
    topSection: {
        width: '100%',
        height: '50%',
        backgroundColor: "rgba(230, 230, 230,1)"
    },
    bottomSection: {
        width: '100%',
        height: '50%',
        backgroundColor: 'white',
    },
    actionButtons: {
        width: 120,
        height: 50,
        alignSelf: 'flex-end',
        flexDirection: 'row',
        padding:5,
    },
    deleteButton: {
        margin: 5,
        height: 50,
        flex:1,
        alignItems: 'center',
        borderColor:'red',
        borderWidth:0.3,
        flex:1,
        backgroundColor: 'transparent',
        borderRadius:10,
    },
    editButton: {
        margin: 5,
        height: 50,
        alignItems: 'center',
        flex:1,
        alignItems: 'center',
        borderColor:'blue',
        borderWidth:0.3,
        flex:1,
        backgroundColor: 'transparent',
        borderRadius:10,
    },
    letterSection: {
        width: 160,
        height: 160,
        backgroundColor: "rgba(210,67,67,1)",
        marginTop: 66,
        alignSelf: 'center',
        borderRadius: 80,
    },
    nameText: {
        color: "#121212",
        fontSize: 35,
        alignSelf: 'center',
        textAlign: "center",
        marginTop: 30,
    },
    initialLetter:{
        color: "#121212",
        fontSize: 50,
        alignSelf: 'center',
        marginVertical: 40,
    },
    contactButton: {
        height: 58,
        marginTop: 27,
        borderColor: 'black',
        paddingLeft: 20,
        backgroundColor: 'white',
        borderBottomColor: 'black',
        borderBottomWidth: 0.3,
    },
    contactText: {
        color: "blue",
        fontSize: 20,
    },
    emailButton: {
        height: 58,
        marginTop: 27,
        paddingLeft: 20,
        backgroundColor: 'white',
        borderBottomWidth: 0.3,
    },
    emailText: {
        color: "blue",
        fontSize: 20,
    },

    
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      width:'95%',
      height:'50%',
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
      elevation: 5
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
});

export default ContactDetails;
