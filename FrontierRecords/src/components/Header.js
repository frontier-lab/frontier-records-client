import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Header, Left, Body, Right } from 'native-base';
import { LinearTextGradient } from 'react-native-text-gradient';
import { Avatar } from 'react-native-elements';

export class FrontierHeader extends Component {
    render() {
        return (
            <Header transparent>
                <Left style={{ flex: 1 }} />
                <Body style={{ flex: 1, alignItems: 'center' }}>
                <LinearTextGradient
                    style={{
                        fontSize: 22,
                        fontWeight: "900",
                        fontStyle: "normal",
                        lineHeight: 25,
                        letterSpacing: 0,
                        textAlign: 'center'
                    }}
                    locations={[0, 1]}
                    colors={['#424bff', '#b700ff']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }} >
                    RECORDS
                </LinearTextGradient>
                </Body>
                <Right style={{ flex: 1 }}>
                    <Avatar size={28} rounded

                            containerStyle={{ backgroundColor: 'gray' }}
                    />
                </Right>
            </Header>
        )
    }
}

export default FrontierHeader;
