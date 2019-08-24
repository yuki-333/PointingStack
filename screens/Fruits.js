import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { scale, verticalScale, } from 'react-native-size-matters';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import VegesScreen from './Veges'
import ToolsScreen from './Tools'
import CarsScreen from './Cars'



export default class FruitsScreen extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <View style={styles.Card1}>
        <VegesScreen />
      </View>
      <View style={styles.Card2}>
        <CarsScreen />
      </View>
      <View style={styles.Card3}>
        <ToolsScreen />
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