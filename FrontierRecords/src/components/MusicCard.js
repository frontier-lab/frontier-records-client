import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { Container, Grid, Row, Col, Card, CardItem, Body } from 'native-base';
import { Avatar, Icon } from 'react-native-elements';
import styles from '../style/NewAndHot';
import commonStyle from '../style/common';

export default class MusicCard extends Component {

  render() {
    return (
        <Row style={{ alignItems: "center" }}>
            <Col style={[common.flex1]}>
                <Row style={{ justifyContent: "center", alignItems: "center" }}>
                    <Avatar rounded size={90} source={this.props.avatar} />
                </Row>
            </Col>
            <Col style={[common.flex2]}>
                <Col style={{ alignItems: "flex-start", justifyContent: "center", marginTop: 43, marginBottom: 43, marginRight: 12 }}>
                    <Col style={{marginRight: 32}}>
                        <Row style={{
                        height: 21,
                        marginBottom: 7
                    }}>
                        <Text 
                            allowFontScaling={false}
                            numberOfLines={1}
                            style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            fontStyle: "normal",
                            letterSpacing: -0.53,
                            color: "#bfbfbf"
                        }}>{this.props.title}</Text>
                    </Row>
                    <Row style={{
                        height: 17,
                    }}>
                        <Text 
                            allowFontScaling={false}
                            numberOfLines={1}
                            style={{
                            fontSize: 14,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: -0.41,
                            color: "#bfbfbf"
                        }}>{this.props.artist}</Text>
                    </Row>
                    </Col>
                    
                    {this.props.right}
                </Col>
            </Col>
        </Row>
    )
    }
}