import {StyleSheet, View, Image, Text} from 'react-native';
import React, {Component} from 'react';
import Profile from '../assets/Profile.png';


const ContactItem = ({contact}) => (
    <View style={styles.item}>

            {/* <View ew style={styles.iconContainer}>
                <Image style={styles.icon} source={Profile} />
            </View> */}
            <View style={styles.content}>
                <Text style={styles.text}>
                    {contact.name}
                </Text>
                {contact.phone ? 
                    (<Text>
                        {contact.phone}     
                    </Text>)
                    : 
                    (<Text>
                        {contact.email}     
                    </Text>)
                }
            </View>
            
        </View>
  );


const styles = StyleSheet.create({
    item: {
        padding: 10,
        height: 70,
        flexDirection:"row",
    },
    content:{
        flex:3,
    },
    text:{
        fontSize: 20,
    }
})

export default ContactItem;
