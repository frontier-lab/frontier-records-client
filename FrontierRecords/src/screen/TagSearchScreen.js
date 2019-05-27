import React, {Component} from 'react';
import { ScrollView, StatusBar, TouchableWithoutFeedback } from 'react-native';
import {Container, Header, Content, Body, Title} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import {NavigationScreenProps, StackActions} from 'react-navigation';
import FrontierHeader from '../components/Header';
import TagSearchResult from '../components/TagSearchResult';
import common from '../style/common';
import RecordList from '../components/RecordList';
import Icons from 'react-native-vector-icons/AntDesign';


export default class TagSearchScreen extends React.Component{

    static navigationOptions = ({ navigation, navigationOptions }) => {
        console.log(navigationOptions);
        // Notice the logs ^
        // sometimes we call with the default navigationOptions and other times
        // we call this with the previous navigationOptions that were returned from
        // this very function
        
        return {
          title: "#" + navigation.getParam('searchText', ''),
          headerStyle: {backgroundColor: 'black',  borderBottomWidth: 0},
          headerTitleStyle: {color: 'white', fontWeight: 'bold', alignSelf: 'center'},
          headerLeft: <Icons style={{paddingLeft: 15}} name={"left"} size={25} color={'white'} onPress={() => navigation.goBack()} />
        };
      };

    // static navigationOptions = {
    //     // headerTitle instead of title
    //     //  header: <FrontierHeader />,
    //     headerStyle: {backgroundColor: 'black', borderBottomWidth: 0}
    // //      headerLeft: <TouchableWithoutFeedback onPress={() => this.props.onClickBack()}>
    // //      <Text style={{color: 'black'}}>Back</Text>
    // //  </TouchableWithoutFeedback>

    // }; 

    // onClickBack = () => {
    //     this.props.navigation.goBack()
    // }

    constuctor(props) {
        this.searchText = this.props.navigation.getParam("searchText")
    }

    render() {
        return (
            <Container style={common.backgroundBlack}>
                
                <ScrollView>
                <StatusBar translucent={false} backgroundColor="black" barStyle="light-content" />
                    <Content>
                        <TagSearchResult />
                    </Content>  
                </ScrollView>
            </Container>
        );
    }
}