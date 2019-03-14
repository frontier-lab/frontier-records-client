import React from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import {Body, Container, Header, Title} from "native-base";


export default class DetailsScreen extends React.Component {
    render() {
        return (
            <Container style={{backgroundColor: 'blue' }}>
                <ScrollView>
                    <Header transparent>
                        <Body>
                        <Title>RECORDS</Title>
                        </Body>
                    </Header>
                    <Text>Details Screen</Text>
                </ScrollView>
            </Container>

        );
    }
}