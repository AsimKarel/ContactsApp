import React, { Component } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import styles from './styling/EditContactsModal';


class EditContactsModal extends React.Component {

    componentDidMount(){
        this.setState({...this.props.contact})
    }

    onUpdatePress = () => {
        this.props.onUpdatePress(this.state)
    }

    state = {
        "id": 0,
        "name": "",
        "phone": "",
        "email": "",
        "country_code": "",
        "created_on": "",
        "updated_on": "",
    }

    valueChanged = (type, text) => {
        switch (type) {
            case 'name':
                this.setState({ name: text })
                break;
            case 'phone':
                this.setState({ phone: text })
                break;
            case 'email':
                this.setState({ email: text })
                break;
            case 'country_code':
                this.setState({ country_code: text })
                break;
        }
    }

    render() {
        return (
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <TextInput
                        clearButtonMode="always"
                        placeholder={'Name'}
                        style={styles.inputBox}
                        value={this.state.name}
                        onChangeText={(text) => { this.valueChanged('name', text) }}
                    />
                    <TextInput
                        clearButtonMode="always"
                        placeholder={'Email'}
                        style={styles.inputBox}
                        value={this.state.email}
                        onChangeText={(text) => { this.valueChanged('email', text) }}
                    />
                    <View style={{ flexDirection: "row" }}>
                        <TextInput
                            clearButtonMode="always"
                            placeholder={'Code'}
                            value={this.state.country_code}
                            onChangeText={(text) => { this.valueChanged('country_code', text) }}
                            style={{
                                flex: 1, height: 70,
                                borderBottomColor: 'gray',
                                borderBottomWidth: 0.5,
                            }}
                        />
                        <TextInput
                            clearButtonMode="always"
                            placeholder={'Phone Number'}
                            value={this.state.phone}
                            keyboardType={'number-pad'}
                            onChangeText={(text) => { this.valueChanged('phone', text) }}
                            style={{
                                flex: 3, height: 70,
                                borderBottomColor: 'gray',
                                borderBottomWidth: 0.5,
                            }}
                        />
                    </View>

                    <TouchableOpacity style={styles.updateButton} onPress={this.onUpdatePress}>
                        <Text style={{ fontSize: 20, alignSelf: 'center', color: 'blue' }}>{this.props.title.split(' ')[0]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.updateButton} onPress={this.props.onCancelPress}>
                        <Text style={{ fontSize: 20, alignSelf: 'center', color: 'red' }}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}




export default EditContactsModal;