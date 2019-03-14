import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {Container, Header, Content, Body, Title} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import {NavigationScreenProps, StackActions} from 'react-navigation';
import { FrontierHeader } from '../components/Header';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});


const styles = StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default class HomeScreen extends React.Component{
    render() {
        return (
            <Container>
                <ScrollView>
                    <FrontierHeader />
                    <Content>
                        <ScrollView horizontal={true}>
                            <Grid>
                                <Row>
                                    <Col style={{width: 200, height: 200, backgroundColor: '#635DB7'}}/>
                                    <Col style={{width: 200, height: 200, backgroundColor: '#00CE9F'}}/>
                                    <Col style={{width: 200, height: 200, backgroundColor: '#635DB7'}}/>
                                    <Col style={{width: 200, height: 200, backgroundColor: '#00CE9F'}}/>
                                    <Col style={{width: 200, height: 200, backgroundColor: '#635DB7'}}/>
                                    <Col style={{width: 200, height: 200, backgroundColor: '#00CE9F'}}/>
                                </Row>
                            </Grid>
                        </ScrollView>
                        <Grid>
                            <Row style={{height: 400}}>
                                <Text style={styles.welcome}>Welcome to React Native!</Text>
                                <Text>To get started, edit App.js</Text>
                                <Text style={styles.instructions}>{instructions}</Text>
                                <Text>Home Screen</Text>
                            </Row>
                            <Row style={{backgroundColor: '#635DB7', height: 400}}>
                                <Text style={styles.welcome}>Welcome to React Native!</Text>
                                <Text>To get started, edit App.js</Text>
                                <Text style={styles.instructions}>{instructions}</Text>
                                <Text>Home Screen</Text>
                            </Row>
                            <Row style={{backgroundColor: '#00CE9F', height: 400}}></Row>
                            <Row style={{backgroundColor: '#635DB7', height: 400}}></Row>
                            <Row style={{backgroundColor: '#00CE9F', height: 400}}></Row>
                            <Row style={{backgroundColor: '#635DB7', height: 400}}></Row>
                            <Row style={{backgroundColor: '#00CE9F', height: 400}}></Row>
                            <Row style={{backgroundColor: '#635DB7', height: 400}}></Row>
                            <Row style={{backgroundColor: '#00CE9F', height: 400}}></Row>
                        </Grid>
                    </Content>
                </ScrollView>
            </Container>
        );
    }
}