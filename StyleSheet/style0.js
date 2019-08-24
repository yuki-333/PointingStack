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
      width: scale(270),
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    readText: {
      fontSize: scale(30),
    },
    photoFlame: {
      flex: 6,
      backgroundColor: 'white',
      width: scale(280),
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
      width: scale(280),
      alignItems: 'center',
      justifyContent: 'space-around',
      marginTop: 10,
      backgroundColor: 'skyblue'
    },
    cbbc0: {
      backgroundColor: 'skyblue',
    },
    cbbc1: {
      backgroundColor: 'skyblue',
    },
    cardButton: {
      height: scale(35),
      width: scale(90),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'skyblue',
      borderWidth: 2,
      borderRadius: 30,
      borderColor: 'white',
      flexDirection: 'row',
      
    },
    cardText: {
      fontSize: scale(20),
      color: 'white',
    },

   footer: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: null,
  },
  buttonContainer: {
      width: 220,
      flexDirection: 'row',
      justifyContent: 'center',
  },
  button: {
      shadowColor: 'rgba(0,0,0,0.20)',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity:0.5,
      backgroundColor: 'skyblue',
      alignItems:'center',
      justifyContent:'center',
      zIndex: 0,
  },
    orange:{
      width: scale(20),
      height: verticalScale(20),
      borderWidth:6,
      borderColor:'lightskyblue',
      borderWidth:4,
      borderRadius: 30,
      marginTop: 0,
      backgroundColor:'royalblue',
    },
    green:{
      width: scale(40),
      height: verticalScale(40),
      backgroundColor:'#fff',
      borderRadius:75,
      borderWidth:6,
      borderColor:'lightskyblue',
    },
    red:{
      width: scale(40),
      height: verticalScale(40),
      backgroundColor:'#fff',
      borderRadius:75,
      borderWidth:6,
      borderColor:'lightskyblue',
    },
    footerText: {
      fontSize: scale(14),
      color: 'black',
    },
    lastCard: {
      fontSize: scale(50),
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
