import React, { useEffect, useState } from 'react';
import {
    Alert, View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView,
    Modal
} from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


export default function ImageUpload({ navigation },props) {

    useEffect(() => {

        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })
    }, [])

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            // base64: true,
            aspect: [4, 3]
        });

        if (!result.cancelled) {
            props.setImage(result.uri);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{props.title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={styles.imageBtn} onPress={props.pickImage} >
                    <Entypo name="arrow-up" size={15} color="white" style={{}} />
                    <Text style={{ color: 'white', textAlign: 'center', margin: 0 }}>Choose Image</Text>
                </TouchableOpacity>

                {props.image && (
                    <TouchableOpacity style={styles.selectedImgBtn} onPress={() => props.setImage(null)}>
                        <Image source={{ uri: props.image }} style={styles.selectedImage} />
                    </TouchableOpacity>)}

            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 20,
        justifyContent:'center',
        alignContent:'center'

    },
    heading:{
        textAlign:'center',
        fontSize:20,
        fontWeight: 'bold',
        margin:10
    },
    imageBtn: {
        flexDirection: 'row',
        backgroundColor: '#687EA3',
        padding: 10,
        borderRadius: 20,
        paddingLeft: 15,
        marginTop: 20,
        width: '45%',
        alignItems: 'center',
        textAlign: 'center',
        elevation: 20,
        shadowColor: '#0B1A34',
    },
    selectedImgBtn: {
        backgroundColor: '#E1E7F1',
        width: 40,
        height: 40,
        zIndex: 2,
        padding: 10,
        borderRadius: 40 / 2,
        marginTop: 20,
        marginLeft: 10
    },
    selectedImage: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        position: 'absolute',
        alignSelf: 'center',
        top: 5

    },
})