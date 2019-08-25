import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {
  createStackNavigator
} from 'react-navigation';
import { 
  moderateScale,
  scale,
 } from 'react-native-size-matters';

import ThreeSheetsScreen from './ThreeSheets';
import TwoSheetsScreen from './TwoSheets'
import SingleSheetsScreen from './SingleSheets'
import ToolsScreen from './Tools';
import CarsScreen from './Cars'

const SCREEN_WIDTH = Dimensions.get('window').width

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'HOME',
    headerStyle: {backgroundColor: 'skyblue'},
    headerTintColor: 'white',
  };

  constructor(props) {
    super(props);
    this.state = {
      message: '絵CARD'
    }
  }

  render() {
    return(
      <View style={styles.base}>
      <View style={styles.message}>
        <Text style={styles.textStyle1}>{this.state.message}</Text>
      </View>
        <View style={styles.contents}>
     
        <View style={styles.allButtonContainer}>

          <TouchableOpacity style={styles.button} onPress={this.doPageAction4}>
            <Text style={styles.buttonText} >1枚</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.doPageAction1}>
            <Text style={styles.buttonText} >2枚</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.doPageAction0}>
            <Text style={styles.buttonText} >3枚</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.doPageAction3}>
          <Text style={styles.buttonText} >4枚</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.doPageAction2}>
          <Text style={styles.buttonText} >CREDIT</Text>
          </TouchableOpacity>

        </View>
        </View>
          <View style={styles.footer}>
            <Text style={styles.textStyle2}  >© 2019 ST Curly</Text>
          </View>
      </View>
    );
  }
  doPageAction0 = () => {
    this.props.navigation.navigate('ThreeSheets')
  }
  doPageAction1 = () => {
    this.props.navigation.navigate('TwoSheets')
  }
  doPageAction2 = () => {
    this.props.navigation.navigate('SingleSheets')
  }
  doPageAction3 = () => {
    this.props.navigation.navigate('Tools')
  }
  doPageAction4 = () => {
    this.props.navigation.navigate('Cars')
  }
}

export default createStackNavigator(
  {
    Home: { screen: HomeScreen },
    TwoSheets: { screen: TwoSheetsScreen },
    ThreeSheets: { screen: ThreeSheetsScreen },
    SingleSheets: { screen: SingleSheetsScreen },
    Tools: { screen: ToolsScreen},
    Cars: {screen: CarsScreen},
  },
  {
    initialRouteName: 'Home',
  }
);


const styles = StyleSheet.create({
  base: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'lavender',
    alignItems: 'center',
  },
  message: {
    flex: 2,
    width: SCREEN_WIDTH - 20,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'royalblue',
  },
  contents: {
    flex: 14,
    width: SCREEN_WIDTH - 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  allButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    margin: scale(10),
    height: scale(55),
    width: scale(300),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    borderColor: 'lightskyblue',
    borderWidth: 3,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: scale(20),
    color: 'white',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'powderblue',
    width: SCREEN_WIDTH - 20,
  },
  textStyle1: {
    fontSize: scale(30),
    color: 'white',
  },
  textStyle2: {
    fontSize: moderateScale(10),
    color: 'black',
  }
});