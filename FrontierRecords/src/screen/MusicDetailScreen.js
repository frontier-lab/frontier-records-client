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
                        </Body>
                    </Header>
                    <Text>MusicDetail Screen</Text>
                </ScrollView>
            </Container>

        );
    }
}