import React, { Component } from "react";
import { View } from "react-native";
import Button from 'react-native-button';
import BottomUpModal from '../components/BottomUpModal';


class Example extends Component {
  constructor(props) {
    super(props)
    this.bottomUpModal = React.createRef()
    this.bottomUpModal2 = React.createRef()
  }

  show = () => {
    this.bottomUpModal.current.show()
  }
  show2 = () => {
    this.bottomUpModal2.current.show()
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <View style={{justifyContent: "center", alignItems: "center", backgroundColor: "red", width: "100%", height: "100%"}}>
          <Button onPress={this.show}>testtest</Button>
        </View>
        <BottomUpModal ref={this.bottomUpModal}>
        <View style={{justifyContent: "center", alignItems: "center", backgroundColor: "red", width: "100%", height: "100%"}}>
          <Button onPress={this.show2}>testtest</Button>
        </View>
          <BottomUpModal ref={this.bottomUpModal2} contentHeight={300}>
          </BottomUpModal>
        </BottomUpModal>
      </View>
    );
  }
}


export default Example;