import React from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import {Body, Container, Header, Title} from "native-base";


export default class MusicDetailScreen extends React.Component {
    render() {
        return (
            <Container style={{backgroundColor: 'green' }}>
                <ScrollView>
                    <Header transparent>
                        <Body>
                        <Title>RECORDS</Title>
                        <Text style={{color:'rgb(0,0,0)', opacity:1, }}>text with rgb(0,0,0) => hsb(0,0,0)</Text>
                        <Text style={{color:'#000', opacity:.54}}>text with text opacity:.54 => hsb(0,0,70) </Text>
                        <View style={{opacity:.54}}>
                          <Text style={{color:'#000', }}>text inside view opacity:.54 => hsb(0,0,45) </Text>
                        </View>
                        <View style={{backgroundColor:'rgba(0,0,0,.54)'}}>
                          <Text style={{color:'#FFF'}}>view with rgba(0,0,0,.54) => hsb(0,0,45)</Text>
                        </View>
                        <View style={{backgroundColor:'rgb(0,0,0)', opacity:.54}}>
                          <Text style={{color:'#FFF'}}>view with opacity:.54 => hsb(0,0,45)</Text>
                      </View>
                        </Body>
                    </Header>
                    <Text>MusicDetail Screen</Text>
                </ScrollView>
            </Container>

        );
    }
}