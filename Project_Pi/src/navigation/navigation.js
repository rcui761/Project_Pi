import React from 'react';
import { View, Text, Button, TouchableOpacity, Icon } from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';

import HomeScreen from '../screens/home-screen';
import RegisterScreen from '../screens/register-screen';
import CameraScreen from '../screens/camera-screen';
import CheckScreen from '../screens/check-screen';

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    },
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: (props) => {
      const { navigation } = props
      return {
        headerTitle: 'Register',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#f58025'
        },
        //headerLeft: <GoToHome navigation={navigation} />,
      }
    },
  },

  Check: {
    screen: CheckScreen,
    navigationOptions: (props) => {
      const { navigation } = props
      return {
        headerTitle: 'Check',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#f58025'
        },
        //headerLeft: <GoToHome navigation={navigation} />,
      }
    },
  },


  Camera: {
    screen: CameraScreen,
    navigationOptions: (props) => {
      const { navigation } = props
      return {
        headerTitle: 'Scanner',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#f58025'
        },
        //headerLeft: <GoToRegister navigation={navigation} />,
      }
    },
  }
});
// const GoToRegister = ({navigation}) => {
//   return (
//     <View>
//       <Button 
//       onPress={() => { 
//         navigation.navigate('Register');

//       }}
//       title="Backs" />
//     </View>
//   )
// };
// const GoToHome = ({navigation}) => {
//   return (
//     <View>
//       <Button onPress={() => navigation.navigate('Home')} title="Backs" />
//     </View>
//   )
// };

const drawerMenu = DrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: 'Home'
    },
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      drawerLabel: 'Register'
    },
  },
  Check: {
    screen: CheckScreen,
    navigationOptions: {
      drawerLabel: 'Check'
    },
  },
  Camera: {
    screen: CameraScreen,
    navigationOptions: {
      drawerLabel: 'Camera'
    },
  }
});

const tabMenu = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
    },
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: ({ navigation, screenProps }) => ({
      headerTitle: 'Register',
      tabBarLabel: 'Register',
      tabBarOnPress: (scene, jumpToIndex) => {
        console.log(scene);
        jumpToIndex(scene.index)
      },
    }),
  },
  Check: {
    screen: CheckScreen,
    navigationOptions: ({ navigation, screenProps }) => ({
      headerTitle: 'Check',
      tabBarLabel: 'Check',
      tabBarOnPress: (scene, jumpToIndex) => {
        console.log(scene);
        jumpToIndex(scene.index)
      },
    }),
  },
  Camera: {
    screen: CameraScreen,
    navigationOptions: {
      tabBarLabel: 'Camera'
    },
  }
});

export default RootNavigator;
