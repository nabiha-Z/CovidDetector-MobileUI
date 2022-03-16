import React, { useEffect, useState } from 'react';
import {
    Alert, View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Modal, Dimensions
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

export default function UploadReport({ navigation }) {

    const [image, setImage] = useState(null);
    const width = Dimensions.get('window').width;

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
            aspect: [2, 3]
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    // const pickDoc = async () => {
    //     alert("gfg")
    //     try{

    //         let result = await DocumentPicker.getDocumentAsync({});
    //         console.log(result.uri);
    //         console.log(result);
    //     // let result = await DocumentPicker.getDocumentAsync({
    //     //     type: [DocumentPicker.types.pdf]
    //     // });
    //     // console.log("result: ", result)

    //     // if (!result.cancel) {
    //     //     setImage(result.uri);
    //     // }
    // }catch(err){
       
    // }
    // };


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Dimer Report</Text>
            <Text style={{ color:'#A3A5A7', textAlign: 'center', marginLeft: 10 }}>Upload The PDF File Report</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity style={styles.imageBtn} onPress={pickImage} >
                    <Entypo name="arrow-up" size={15} color="white" style={{}} />
                    <Text style={{ color: 'white', textAlign: 'center', marginLeft: 10 }}>Upload Report</Text>
                </TouchableOpacity>



            </View>
            {image && (
                <>
                <Text style={[{fontSize:16, margin:20, marginBottom:0, fontWeight:'bold', color:'#5D6571'}]}>Report Preview</Text>
                <Text style={[{fontSize:12, margin:20, marginTop:5, color:'#5D6571'}]}>(Tap on the image below to remove it.)</Text>
                <TouchableOpacity style={styles.selectedImgBtn} onPress={() => setImage(null)}>
                    <Image source={{ uri: image }} style={styles.selectedImage} />
                </TouchableOpacity>
                </>)}
            <View style={[styles.nextBtn, { width: width * 0.9 }]}>
                <TouchableOpacity onPress={() => navigation.navigate("Report2", { dimer: image })} style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <Text style={styles.nextBtnTxt}>Next</Text>
                    < MaterialIcons name="keyboard-arrow-right" style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 20,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'

    },
    heading: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        marginTop: -190,
        color:'#484A4D'
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
        width: 190,
        height: 190,
        zIndex: 2,
        padding: 10,
        borderRadius: 40 / 2,
        marginTop: 20,
        marginLeft: 10
    },
    selectedImage: {
        width: 180,
        height: 180,
        borderRadius: 30 / 2,
        position: 'absolute',
        alignSelf: 'center',
        top: 5

    },
    nextBtn: {
        flexDirection: 'row',
        display: "flex",
        backgroundColor: 'white',
        marginTop: -30,
        position: 'absolute',
        bottom: 20,
        marginHorizontal: 10,
        backgroundColor: 'white',
        marginTop: -30,
        bottom: 20,
        marginHorizontal: 10,
        justifyContent: 'flex-end',
        height: 60,
        borderRadius: 10,
        borderTopWidth: 1,
        borderColor: '#C6CBCA',
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowOffset: {
            width: 10,
            height: 10
        },
        paddingHorizontal: 20,
    },
    nextBtnTxt: {
        fontSize: 16,
        marginRight: 5,
        fontWeight: '200',
        color: '#2F5492',
    },
    icon: {
        fontSize: 20,
        textAlign: 'center',
        top: 2,
        color: '#2F5492',
    }

})