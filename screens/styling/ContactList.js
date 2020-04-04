import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
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
        borderWidth: 0.2
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
});