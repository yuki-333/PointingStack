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



export default class FruitsScreen extends Component {
  static navigationOptions = {
      title: '果物',
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
      this.setState({reads0: 'りんご'})
    }
    doDelete0 = () => {
      this.setState({reads0: ''})
    }

    doAction1 = () => {
      this.setState({reads1: 'みかん'})
    }
    doDelete1 = () => {
      this.setState({reads1: ''})
    }

    doAction2 = () => {
      this.setState({reads2: 'かき'})
    }
    doDelete2 = () => {
      this.setState({reads2: ''})
    }

    doAction3 = () => {
      this.setState({reads3: 'もも'})
    }
    doDelete3 = () => {
      this.setState({reads3: ''})
    }

    doAction4 = () => {
      this.setState({reads4: 'いちご'})
    }
    doDelete4 = () => {
      this.setState({reads4: ''})
    }

    doAction5 = () => {
      this.setState({reads5: 'れもん'})
    }
    doDelete5 = () => {
      this.setState({reads5: ''})
    }

    doAction6 = () => {
      this.setState({reads6: 'さくらんぼ'})
    }
    doDelete6 = () => {
      this.setState({reads6: ''})
    }

    doAction7 = () => {
      this.setState({reads7: 'なし'})
    }
    doDelete7 = () => {
      this.setState({reads7: ''})
    }

    doAction8 = () => {
      this.setState({reads8: 'ばなな'})
    }
    doDelete8 = () => {
      this.setState({reads8: ''})
    }

    doAction9 = () => {
      this.setState({reads9: 'ぱいなっぷる'})
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
                <Image style={styles.imgSize2}  resizeMode='contain' source={require("../assets/images/Fruits/Ringo.jpg")}/>
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
                <Image style={styles.imgSize3}  resizeMode='contain' source={require("../assets/images/Fruits/Mikan.jpg")}/>
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
                <Image style={styles.imgSize2}  resizeMode='contain' source={require("../assets/images/Fruits/Kaki.jpg")}/>
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
                <Image style={styles.imgSize3}  resizeMode='contain' source={require("../assets/images/Fruits/Momo.jpg")}/>
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
                <Image style={styles.imgSize2}  resizeMode='contain' source={require("../assets/images/Fruits/Itigo.jpg")}/>
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
                <Image style={styles.imgSize2}  resizeMode='contain' source={require("../assets/images/Fruits/Lemon.jpg")}/>
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
                <Image style={styles.imgSize2}  resizeMode='contain' source={require("../assets/images/Fruits/Sakuranbo.jpg")}/>
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
                <Image style={styles.imgSize2}  resizeMode='contain' source={require("../assets/images/Fruits/Nasi.jpg")}/>
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
                <Image style={styles.imgSize2}  resizeMode='contain' source={require("../assets/images/Fruits/Banana.jpg")}/>
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
                <Image style={styles.imgSize2}  resizeMode='contain' source={require("../assets/images/Fruits/Pineapple.jpg")}/>
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

