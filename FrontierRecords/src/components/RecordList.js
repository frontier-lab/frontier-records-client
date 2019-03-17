import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Grid, Content, Card, CardItem, Body, Row, Col } from 'native-base';
import { Avatar } from 'react-native-elements';
import Icons from 'react-native-vector-icons/AntDesign';
import common from '../style/common';
import styles from '../style/NewAndHot';


class Record extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.image,
            buttonColor: this.props.buttonColor
        }

    }
    render() {
        return (
            <Row style={{ backgroundColor: 'black', width: '100%' }}>
                    <Col style={{ height: 363, alignItems: 'center', marginTop: 20, backgroundColor: 'black' }}>
                        <Row style={{ height: 250, backgroundColor: 'black' }}>
                            <Col style={{ alignItems: 'center' }}>
                                <Col listItemPadding={0} style={{ backgroundColor: 'black' }}>
                                    <Col style={{ width: 250, height: 250, justifyContent: 'center', alignItems: 'center', }}>
                                        <Image
                                            source={this.state.image}
                                            style={{ width: 250, height: 250, borderRadius: 250 / 2 }} />
                                        <Icons name={'play'} size={50} color={this.state.buttonColor} style={{ position: 'absolute' }} />
                                    </Col>
                                </Col>
                                <Icons name={'ellipsis1'} size={25} style={{ position: 'absolute', color: 'white', top: 0, right: 20, }} />
                            </Col>
                        </Row>
                        <Row style={{ backgroundColor: 'black' }}>
                            <Col style={{ marginLeft: 24, marginRight: 24, marginTop: 0, backgroundColor: 'black' }}>
                                <Row style={{ height: 32, justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Col style={{ flex: 2 }}>
                                        <Row style={{ backgroundColor: 'black', justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Avatar size={23} rounded containerStyle={{ backgroundColor: 'gray' }} />
                                            <Text style={{
                                                marginLeft: 6,
                                                width: 200,
                                                height: 16,
                                                opacity: 0.5,
                                                fontSize: 13,
                                                fontWeight: "normal",
                                                fontStyle: "normal",
                                                letterSpacing: 0,
                                                color: "#ffffff"
                                            }}>
                                                Johnny Balik
                                    </Text>
                                        </Row>
                                    </Col>

                                    <Col style={{ backgroundColor: 'black', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                                        <Row style={{ backgroundColor: 'black', justifyContent: 'flex-end', alignItems: 'center' }}>
                                            <Icons name={'staro'} size={25} style={{ color: 'white', marginRight: 10 }} />
                                            <Icons name={'sharealt'} size={25} style={{ color: 'white', marginRight: 10 }} />
                                        </Row>

                                    </Col>
                                </Row>
                                <Row style={{ backgroundColor: 'black', height: 17, justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Text style={{
                                        opacity: 0.8,
                                        fontSize: 14,
                                        fontWeight: "bold",
                                        fontStyle: "normal",
                                        letterSpacing: 0,
                                        color: "#ffffff"
                                    }}>
                                        FREQUENCY (feat Phil McClain)
                                    </Text>
                                </Row>
                                <Row style={{ backgroundColor: 'black', height: 16, justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Text style={{
                                        height: 16,
                                        opacity: 0.4,
                                        fontSize: 13,
                                        fontWeight: "normal",
                                        fontStyle: "normal",
                                        letterSpacing: 0,
                                        color: "#ffffff"
                                    }}>
                                        #Hiphop&Rap #ArtinbStudio
                                    </Text>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <View style={{
                        position: 'absolute',
                        top: 260,
                        alignSelf: 'center',
                        width: '90%',
                        marginLeft: 20,
                        marginRight: 20,
                        height: 2,
                        opacity: 0.4,
                        borderStyle: "solid",
                        borderBottomWidth: 1,
                        borderBottomColor: "#ffffff"
                    }}>
                    </View>
                </Row>
        )
    }
}

class RecordList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Grid>
                <Col>
                <Record image={require('../assets/img/cover.png')} buttonColor={'red'} />
                <Record image={require('../assets/img/sample.jpg')} buttonColor={'white'} />
                <Record image={require('../assets/img/cover.png')} buttonColor={'red'} />
                <Record image={require('../assets/img/sample.jpg')} buttonColor={'white'} />
                <Record image={require('../assets/img/cover.png')} buttonColor={'red'} />
                <Record image={require('../assets/img/sample.jpg')} buttonColor={'white'} />
                <Record image={require('../assets/img/cover.png')} buttonColor={'red'} />
                <Record image={require('../assets/img/sample.jpg')} buttonColor={'white'} />
                </Col>
            </Grid>
        );
    }
}

export default RecordList;
