import React, {Component} from 'react';
import { ScrollView, StatusBar } from 'react-native';
import {Container, Header, Content, Body, Title} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import {NavigationScreenProps, StackActions} from 'react-navigation';
import { FrontierHeader } from '../components/Header';
import { NewAndHot } from '../components/NewAndHot';
import common from '../style/common';
import RecordList from '../components/RecordList';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class HomeScreen extends React.Component{
    render() {
        return (
            <Container style={common.backgroundBlack}>
                
                <FrontierHeader />
                <ScrollView>
                    <Content>
                        <NewAndHot />
                        <RecordList />
                    </Content>
                </ScrollView>
            </Container>
        );
    }
}