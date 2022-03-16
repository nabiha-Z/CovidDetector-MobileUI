import React, { useEffect, useState, useRef } from 'react';
import {
    Animated, View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Modal, Dimensions
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import Logo from '../images/lungsIcon.png';

export default function UploadReport({ navigation }) {

    const [image, setImage] = useState(null);
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;


    const [startAnimation, setAnimation] = useState(new Animated.Value(0));
    console.log("startA:", startAnimation)
    const scaleLogo = useRef(new Animated.Value(1)).current;
    const startTitle = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.timing(startAnimation, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
        setTimeout(() => {
            navigation.navigate('Report1')

        }, 6000)
    }, [])


    return (
        <View style={styles.container}>
            <View style={[styles.boxContainer]}>
                <Animated.View style={styles.logoContainer}>
                    <Image source={Logo} style={styles.img} />
                    <Text style={styles.txt}>Covid Detector</Text>
                </Animated.View>

                {/* <Animated.View style={styles.logoContainer}>
                    <Image source={Logo} style={styles.img} />
                    <Text style={styles.txt}>Covid Detector</Text>
                </Animated.View> */}
                {/* <Animated.Image
                    onLoad={()=>onLoad()}
                    style={[
                        {
                            opacity: startAnimation,
                            transform: [
                                {
                                    scale: startAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0.85, 1],
                                    })
                                },
                            ],
                        },styles.img
                       
                    ]}
                >
              
                </Animated.Image> */}
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
        color: '#484A4D'
    },
    boxContainer: {
        backgroundColor: '#4752AB',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,

    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    img: {
        width: 100,
        height: 100,
        marginBottom: 20
    },
    txt: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    }

})