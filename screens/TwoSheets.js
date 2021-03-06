import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import VegesScreen from './Veges'
import ToolsScreen from './Tools'
import CarsScreen from './Cars'
import FruitsScreen from './Fruits'
import SelectScreen from './SelectScreen'



export default class TwoSheetsScreen extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <View style={styles.Card1}>
        <VegesScreen />
      </View>
      <View style={styles.Card2}>
        <FruitsScreen />
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: wp('3%')
  },
  Card1: {
    flex: 1,
    margin: 1,
  },
  Card2: {
    flex: 1,
    margin: 1,

  },
  Card3: {
    flex: 1,
    margin: 1,
  },
});


console.ignoredYellowBox = [
  'Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window).',
];