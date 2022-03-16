import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Home from './screens/HomeScreen';
import Report1 from './screens/UploadReport1';
import Report2 from './screens/UploadReport2';
import Report3 from './screens/UploadReport3';
import Report4 from './screens/UploadReport4';
import Report5 from './screens/UploadReport5';
import AllReports from './screens/AllReports';
import Scan from './screens/Scanning';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
          options={({ navigation, route }) => ({
            title: '',
            headerStyle: {
              height: 0
            },
          })}
        />

        <Stack.Screen name="Report1" component={Report1}
          options={() => ({
            title: 'Report 1',
            headerStyle: {
              height: 90,
            },
            headerTitleStyle: {

            },
          })}
        />

        <Stack.Screen name="Report2" component={Report2}
          options={() => ({
            title: 'Report 2',
            headerStyle: {
              height: 90
            },
          })}
        />

        <Stack.Screen name="Report3" component={Report3}
          options={() => ({
            title: 'Report 3',
            headerStyle: {
              height: 90
            },
          })}
        />
        <Stack.Screen name="Report4" component={Report4}
          options={() => ({
            title: 'Report 4',
            headerStyle: {
              height: 90
            },
          })}
        />
        <Stack.Screen name="Report5" component={Report5}
          options={() => ({
            title: 'Report 5',
            headerStyle: {
              height: 90
            },
          })}
        />
          <Stack.Screen name="AllReports" component={AllReports}
          options={() => ({
            title: 'Reports',
            headerStyle: {
              height: 90
            },
          })}
        />
         <Stack.Screen name="Scan" component={Scan}
          options={() => ({
            title: 'Reports',
            headerStyle: {
              height: 90
            },
          })}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },

});



export default App;