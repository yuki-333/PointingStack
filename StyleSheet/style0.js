import { StyleSheet, } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { scale, verticalScale, } from 'react-native-size-matters';

 export default StyleSheet.create({
  base: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
  content: {
      flex: 6,
      alignItems: 'center',
      justifyContent: 'center',
  },
  cardBase: {
      width: wp('30%'),
      height: hp('66%'),
      padding: scale(5),
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderWidth: 5,
      borderRadius: 10,
      borderColor: 'lightskyblue',
    },
    read: {
      flexDirection: 'row',
      flex: 1,
      margin: 7,
      width: wp('28%'),
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    readText: {
      fontSize: scale(17),
    },
    photoFlame: {
      flex: 6,
      backgroundColor: 'white',
      width: wp('28%'),
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 5,
      borderRadius: 10,
      borderColor: 'white',
      marginTop: 15,
    },
    cardButtonBase: {
      flexDirection: 'row',
      flex: 1,
      width: wp('30%'),
      height: wp(5),
      alignItems: 'center',
      justifyContent: 'space-around',
      marginTop: scale(10),
      backgroundColor: 'skyblue'
    },
    cbbc0: {
      backgroundColor: 'skyblue',
    },
    cbbc1: {
      backgroundColor: 'skyblue',
    },
    cardButton: {
      width: wp(10),
      height: hp(8),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'skyblue',
      borderWidth: 2,
      borderRadius: 30,
      borderColor: 'white',
      flexDirection: 'row',
      
    },
    cardText: {
      fontSize: scale(15),
      color: 'white',
    },

   footer: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: null,
  },
  buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
  },
    orange:{
      width: 40,
      height: 40,
      borderRadius: 30,
      marginRight: 10,
      marginLeft: 10,
      backgroundColor:'lightskyblue',
    },
    green:{
      width: 40,
      height: 40,
      backgroundColor:'#fff',
      borderRadius:75,
      borderWidth:4,
      borderColor:'lightskyblue',
    },
    red:{
      width: 40,
      height: 40,
      backgroundColor:'#fff',
      borderRadius:75,
      borderWidth:4,
      borderColor:'lightskyblue',
    },
    lastCard: {
      fontSize: scale(25),
      color: 'skyblue',
    },
    imgSize0: {
      width: wp('10%'),
    },
    imgSize1: {
      width: wp('20%'),
    },
    imgSize2: {
    width: wp('15%'),
    },
    imgSize3: {
      width: wp('12%'),
    }
});
