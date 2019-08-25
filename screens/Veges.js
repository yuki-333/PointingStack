/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  KeyboardAvoidingView,
  Button,
  AsyncStorage,
} from 'react-native';

import styles from '../StyleSheet/style0'
import CardStack, { Card } from 'react-native-card-stack-swiper';



export default class VegesScreen extends Component {
  static navigationOptions = {
      title: '野菜',
      headerStyle: {backgroundColor: 'skyblue',},
      headerTintColor: 'white',
    };
  
    constructor(props) {
      super(props);
      this.state = {
        reads0: '',
        reads1: '',
        reads2: '',
        reads3: '',
        reads4: '',
        reads5: '',
        reads6: '',
        reads7: '',
        reads8: '',
        reads9: '',
      }
    }

    doAction0 = () => {
      this.setState({reads0: 'だいこん'})
    }
    doDelete0 = () => {
      this.setState({reads0: ''})
    }

    doAction1 = () => {
      this.setState({reads1: 'ほうれんそう'})
    }
    doDelete1 = () => {
      this.setState({reads1: ''})
    }

    doAction2 = () => {
      this.setState({reads2: 'きゃべつ'})
    }
    doDelete2 = () => {
      this.setState({reads2: ''})
    }

    doAction3 = () => {
      this.setState({reads3: 'なす'})
    }
    doDelete3 = () => {
      this.setState({reads3: ''})
    }

    doAction4 = () => {
      this.setState({reads4: 'きゅうり'})
    }
    doDelete4 = () => {
      this.setState({reads4: ''})
    }

    doAction5 = () => {
      this.setState({reads5: 'にんじん'})
    }
    doDelete5 = () => {
      this.setState({reads5: ''})
    }

    doAction6 = () => {
      this.setState({reads6: 'れんこん'})
    }
    doDelete6 = () => {
      this.setState({reads6: ''})
    }

    doAction7 = () => {
      this.setState({reads7: 'とまと'})
    }
    doDelete7 = () => {
      this.setState({reads7: ''})
    }

    doAction8 = () => {
      this.setState({reads8: 'たけのこ'})
    }
    doDelete8 = () => {
      this.setState({reads8: ''})
    }

    doAction9 = () => {
      this.setState({reads9: 'とうもろこし'})
    }
    doDelete9 = () => {
      this.setState({reads9: ''})
    }
 


  render() {
    return (
      <View style={{flex:1}}>


        <CardStack
          style={styles.content}

          renderNoMoreCards={() => <Text style={{fontWeight:'700', fontSize:18, color:'gray'}}>No more cards :(</Text>}
          ref={swiper => {
            this.swiper = swiper
          }}

          onSwiped={() => console.log('onSwiped')}
          onSwipedLeft={() => console.log('onSwipedLeft')}
          loop={true}
        >

          <Card style={[styles.card, styles.card1]}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={[styles.cardBase, styles.cbbc0]}>
              <View style={styles.read}>
                <Text style={styles.readText}>{this.state.reads0}</Text>
              </View>
              <View style={styles.photoFlame}>
                <Image style={styles.imgSize2}  resizeMode='contain' source={require("../assets/images/Veges/Daikon.jpg")}/>
              </View>
              <View style={[styles.cardButtonBase]}>
                <TouchableOpacity style={styles.cardButton} onPress={this.doAction0} >
                  <Text style={styles.cardText} >読み</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardButton} onPress={this.doDelete0} >
                  <Text style={styles.cardText} >隠す</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          </Card>

          <Card style={[styles.card, styles.card1]}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={[styles.cardBase, styles.cbbc0]}>
              <View style={styles.read}>
                <Text style={styles.readText}>{this.state.reads1}</Text>
              </View>
              <View style={styles.photoFlame}>
                <Image style={styles.imgSize3}  resizeMode='contain' source={require("../assets/images/Veges/Hourennsou.jpg")}/>
              </View>
              <View style={[styles.cardButtonBase]}>
                <TouchableOpacity style={styles.cardButton} onPress={this.doAction1} >
                  <Text style={styles.cardText} >読み</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardButton} onPress={this.doDelete1} >
                  <Text style={styles.cardText} >隠す</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          </Card>

          <Card style={[styles.card, styles.card1]}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={[styles.cardBase, styles.cbbc0]}>
              <View style={styles.read}>
                <Text style={styles.readText}>{this.state.reads2}</Text>
              </View>
              <View style={styles.photoFlame}>
                <Image style={styles.imgSize2}  resizeMode='contain' source={require("../assets/images/Veges/Kyabetu.jpg")}/>
              </View>
              <View style={[styles.cardButtonBase]}>
                <TouchableOpacity style={styles.cardButton} onPress={this.doAction2} >
                  <Text style={styles.cardText} >読み</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardButton} onPress={this.doDelete2} >
                  <Text style={styles.cardText} >隠す</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          </Card>

          <Card style={[styles.card, styles.card1]}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={[styles.cardBase, styles.cbbc0]}>
              <View style={styles.read}>
                <Text style={styles.readText}>{this.state.reads3}</Text>
              </View>
              <View style={styles.photoFlame}>
                <Image style={styles.imgSize3}  resizeMode='contain' source={require("../assets/images/Veges/Nasu.jpg")}/>
              </View>
              <View style={[styles.cardButtonBase]}>
                <TouchableOpacity style={styles.cardButton} onPress={this.doAction3} >
                  <Text style={styles.cardText} >読み</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardButton} onPress={this.doDelete3} >
                  <Text style={styles.cardText} >隠す</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          </Card>

          <Card style={[styles.card, styles.card1]}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={[styles.cardBase, styles.cbbc0]}>
              <View style={styles.read}>
                <Text style={styles.readText}>{this.state.reads4}</Text>
              </View>
              <View style={styles.photoFlame}>
                <Image style={styles.imgSize2}  resizeMode='contain' source={require("../assets/images/Veges/Kyuri.jpg")}/>
              </View>
              <View style={[styles.cardButtonBase]}>
                <TouchableOpacity style={styles.cardButton} onPress={this.doAction4} >
                  <Text style={styles.cardText} >読み</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardButton} onPress={this.doDelete4} >
                  <Text style={styles.cardText} >隠す</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          </Card>

          <Card style={[styles.card, styles.card1]}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={[styles.cardBase, styles.cbbc0]}>
              <View style={styles.read}>
                <Text style={styles.readText}>{this.state.reads5}</Text>
              </View>
              <View style={styles.photoFlame}>
                <Image style={styles.imgSize2}  resizeMode='contain' source={require("../assets/images/Veges/Ninjin.jpg")}/>
              </View>
              <View style={[styles.cardButtonBase]}>
                <TouchableOpacity style={styles.cardButton} onPress={this.doAction5} >
                  <Text style={styles.cardText} >読み</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardButton} onPress={this.doDelete5} >
                  <Text style={styles.cardText} >隠す</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          </Card>

          <Card style={[styles.card, styles.card1]}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={[styles.cardBase, styles.cbbc0]}>
              <View style={styles.read}>
                <Text style={styles.readText}>{this.state.reads6}</Text>
              </View>
              <View style={styles.photoFlame}>
                <Image style={styles.imgSize2}  resizeMode='contain' source={require("../assets/images/Veges/Renkon.jpg")}/>
              </View>
              <View style={[styles.cardButtonBase]}>
                <TouchableOpacity style={styles.cardButton} onPress={this.doAction6} >
                  <Text style={styles.cardText} >読み</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardButton} onPress={this.doDelete6} >
                  <Text style={styles.cardText} >隠す</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          </Card>

          <Card style={[styles.card, styles.card1]}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={[styles.cardBase, styles.cbbc0]}>
              <View style={styles.read}>
                <Text style={styles.readText}>{this.state.reads7}</Text>
              </View>
              <View style={styles.photoFlame}>
                <Image style={styles.imgSize2}  resizeMode='contain' source={require("../assets/images/Veges/Tomato.jpg")}/>
              </View>
              <View style={[styles.cardButtonBase]}>
                <TouchableOpacity style={styles.cardButton} onPress={this.doAction7} >
                  <Text style={styles.cardText} >読み</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardButton} onPress={this.doDelete7} >
                  <Text style={styles.cardText} >隠す</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          </Card>

          <Card style={[styles.card, styles.card1]}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={[styles.cardBase, styles.cbbc0]}>
              <View style={styles.read}>
                <Text style={styles.readText}>{this.state.reads8}</Text>
              </View>
              <View style={styles.photoFlame}>
                <Image style={styles.imgSize2}  resizeMode='contain' source={require("../assets/images/Veges/Takenoko.jpg")}/>
              </View>
              <View style={[styles.cardButtonBase]}>
                <TouchableOpacity style={styles.cardButton} onPress={this.doAction8} >
                  <Text style={styles.cardText} >読み</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardButton} onPress={this.doDelete8} >
                  <Text style={styles.cardText} >隠す</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          </Card>

          <Card style={[styles.card, styles.card1]}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={[styles.cardBase, styles.cbbc0]}>
              <View style={styles.read}>
                <Text style={styles.readText}>{this.state.reads9}</Text>
              </View>
              <View style={styles.photoFlame}>
                <Image style={styles.imgSize2}  resizeMode='contain' source={require("../assets/images/Veges/Toumorokosi.jpg")}/>
              </View>
              <View style={[styles.cardButtonBase]}>
                <TouchableOpacity style={styles.cardButton} onPress={this.doAction9} >
                  <Text style={styles.cardText} >読み</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardButton} onPress={this.doDelete9} >
                  <Text style={styles.cardText} >隠す</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
          </Card>


          
          <Card style={[styles.card, styles.card1]}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={[styles.cardBase, styles.cbbc0]}>
              <View style={styles.photoFlame}>
                <Text style={styles.lastCard}>絵CARD</Text>
              </View>
              <View style={[styles.cardButtonBase]}>
              </View>
            </View>
          </TouchableOpacity>
          </Card>
         
          
         
        </CardStack>


        <View style={styles.footer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button,styles.red]} onPress={()=>{
              this.swiper.swipeLeft();
            }}>
              {/* <Image source={require('./assets/red.png')} resizeMode={'contain'} style={{ height: 62, width: 62 }} /> */}
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.orange]} onPress={() => {
              this.swiper.goBackFromLeft();
            }}>
              {/* <Image source={require('./assets/back.png')} resizeMode={'contain'} style={{ height: 32, width: 32, borderRadius: 5 }} /> */}
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.green]} onPress={()=>{
              this.swiper.swipeRight();
            }}>
              {/* <Image source={require('./assets/green.png')} resizeMode={'contain'} style={{ height: 62, width: 62 }} /> */}
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
}

