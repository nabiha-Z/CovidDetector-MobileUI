import React, { useEffect, useState } from 'react';
import {
    Alert, View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Modal, Dimensions
} from 'react-native';
import lungs from "../images/lungs2.png";
import { Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function Scanning({ route, navigation }) {

    const height = Dimensions.get('window').height;
    const reports = [];
    reports.push(route.params.dimer);
    reports.push(route.params.cpr);
    reports.push(route.params.bloodcp);
    reports.push(route.params.xray);
    reports.push(route.params.hrct);
    console.log("reports: ", reports)


    return (
        <View style={styles.container}>
             <View style={{flexDirection:'row'}}>
                {reports.map((item) =>
                (
                    <TouchableOpacity style={styles.footerImgBtn}>
                        <Image source={{ uri: item }} style={styles.footerImage} />
                    </TouchableOpacity>
                ))}
                </View>
            <View style={[styles.scan,{top:height*0.13}]}>
                <Ionicons name="scan-outline" style={styles.icon} />
                <Image source={lungs}
                    style={{
                        width: 190,
                        height: 190,
                        alignSelf: "center",
                        position: 'absolute',
                        zIndex: 2,
                        top: 55
                    }} />
                <Text style={styles.heading}>Scanning... </Text>


            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 20,
        alignItems: 'center'

    },
    scan: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center'
    },
    heading: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        color: '#7E7C7C',
        top:-10,
        left:7
    },
    icon: {
        fontSize: 300,
        textAlign: 'center',
        top: 2,
        color: '#C3BFBF',
        alignSelf:'center',
        left:8

    },
    footerImgBtn: {
        backgroundColor: '#EEEDED',
        width: 35,
        height: 35,
        zIndex: 2,
        padding: 5,
        borderRadius: 35 / 2,
        marginTop: 20,
        marginLeft: 10
    },
    footerImage: {
        width: 27,
        height: 27,
        borderRadius: 27 / 2,
        position: 'absolute',
        alignSelf: 'center',
        top: 4

    },

})