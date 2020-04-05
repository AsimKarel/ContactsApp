import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
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
    errorMessage: {
        color:'red',
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