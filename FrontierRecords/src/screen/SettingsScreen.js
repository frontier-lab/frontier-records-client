import React from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import {Body, Container, Header, Title} from "native-base";


export default class SettingsScreen extends React.Component {
    render() {
        return (
            <Container style={{backgroundColor: 'yellow' }}>
                <ScrollView>
                    <Header transparent>
                        <Body>
                        <Title>RECORDS</Title>
                        </Body>
                    </Header>
                    <Text>Settings Screen</Text>
                </ScrollView>

            </Container>

        );
    }
}