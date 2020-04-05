import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    separator: {
        height: 0.5,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    inputBox: {
        backgroundColor: '#edece8',
        width: '95%',
        padding: 15,
        margin:5,
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
        // backgroundColor: '#F0F0F6',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.3,
    },
    btnText: {
        color: 'blue',
        fontSize: 15,
        textAlign: 'center',
    },
    addBtnText: {
        color: 'blue',
        fontSize: 25,
        textAlign: 'center',
    },
    addBtn: {
        marginRight:20,
        width:30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.3,
        borderColor: 'blue',
        borderRadius: 7
    },
});