import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import React, {Component} from 'react';


const LoadButton = (onPress) => (
    <View style={styles.footer}>
        <TouchableOpacity
            activeOpacity={0.9}
            //On Click of button calling loadMoreData function to load more data
            style={styles.loadMoreBtn}>
            <Text style={styles.btnText}>Load More</Text>
            {/* {this.state.fetching_from_server ? (
        <ActivityIndicator color="white" style={{ marginLeft: 8 }} />
        ) : null} */}
        </TouchableOpacity>
    </View>
  );


const styles = StyleSheet.create({
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
        backgroundColor: '#F0F0F6',
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
    },
})

export default LoadButton;
