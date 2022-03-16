import React, { useEffect, useState } from 'react';
import {
    Alert, View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Modal, Dimensions
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function UploadReport({ route, navigation }) {

    const [image, setImage] = useState(null);
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const reports = [];
    reports.push(route.params.dimer);
    reports.push(route.params.cpr);
    reports.push(route.params.bloodcp);
    reports.push(route.params.xray);
    reports.push(route.params.hrct);
    console.log("reports: ", reports)

    return (
        <>
        
        <View style={styles.container}>
            <Text style={styles.heading}>All Report</Text>
            <Text style={{ color: '#A3A5A7', textAlign: 'center', marginLeft:10 }}>Click on the button below to start scanning these reports</Text>
            <ScrollView containerStyle={{ height: height*0.5 }}>
                <View style={styles.reports}>
                    {reports.map((item, key) => (
                        <>
                            <View style={styles.selectedImgBtn}>
                                <Image source={{ uri: item }} style={styles.selectedImage} />
                            </View>
                        </>
                    ))}
                </View>
        
                </ScrollView>

            <TouchableOpacity onPress={() => navigation.navigate("Scan", { dimer: route.params.dimer, cpr: route.params.cpr, bloodcp: route.params.bloodcp, xray:route.params.xray, hrct: route.params.hrct })} style={styles.scanBtn}>
                <Ionicons name="scan" style={styles.icon} />
                <Text style={styles.scanBtnTxt}>Start Scanning</Text>
            </TouchableOpacity>

        </View>
        </>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal:5,
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
        color: '#484A4D'
    },
    reports: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 10,
        padding: 10,
        alignSelf: 'center',
    },
    selectedImgBtn: {
        backgroundColor: '#E1E7F1',
        width: 140,
        height: 140,
        zIndex: 2,
        padding: 10,
        borderRadius: 40 / 2,
        marginTop: 20,
        marginLeft: 10
    },
    selectedImage: {
        width: 130,
        height: 130,
        borderRadius: 30 / 2,
        position: 'absolute',
        alignSelf: 'center',
        top: 5
    },
    scanBtn: {

        flexDirection:'row',
        margin: 10,
        justifyContent: 'center',
        alignContent: 'center',
        width: '60%',
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#21909D'

    },
    scanBtnTxt: {
        fontSize: 16,
        marginRight: 5,
        fontWeight: '700',
        color: 'white',
        marginLeft:10
    },
    icon: {
        fontSize: 20,
        textAlign: 'center',
        top: 2,
        color: 'white',
        
    }

})