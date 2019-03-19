import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Grid, Content, Card, CardItem, Body, Row, Col } from 'native-base';
import { Avatar } from 'react-native-elements';
import Icons from 'react-native-vector-icons/AntDesign';
import common from '../style/common';
import { styles, constant } from '../style/RecordList';

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
            <Row style={{...common.backgroundBlack, ...common.width100}}>
                    <Col style={{...common.backgroundBlack, ...styles.recordContainer}}>
                        <Row style={{...styles.discContainer, ...common.backgroundBlack}}>
                            <Col style={common.alignItemCenter}>
                                <Col listItemPadding={0} style={common.backgroundBlack}>
                                    <Col style={styles.discWrap}>
                                        <Image
                                            source={this.state.image}
                                            style={styles.discImage} />
                                        <Icons name={'play'} size={constant.discPlayBtnSize} color={this.state.buttonColor} style={common.positionAbsolute} />
                                    </Col>
                                </Col>
                                <Icons name={'ellipsis1'} size={constant.discInfoBtnSize} style={styles.discInfoBtn} />
                            </Col>
                        </Row>
                        <Row style={common.backgroundBlack}>
                            <Col style={{...styles.descContainer}}>
                                <Row style={styles.descArtistContainer}>
                                    <Col style={common.flex2}>
                                        <Row style={styles.descArtist}>
                                            <Avatar size={constant.descArtistAvatarSize} rounded containerStyle={common.backgroundGray} />
                                            <Text style={styles.descArtistName}>
                                                Johnny Balik
                                            </Text>
                                        </Row>
                                    </Col>

                                    <Col style={common.flex1}>
                                        <Row style={styles.descIconWrap}>
                                            <Icons name={'staro'} size={constant.descIconSize} style={styles.descIcon} />
                                            <Icons name={'sharealt'} size={constant.descIconSize} style={styles.descIcon} />
                                        </Row>
                                    </Col>
                                </Row>
                                <Row style={styles.descTitleContainer}>
                                    <Text style={styles.descTitle}>
                                        FREQUENCY (feat Phil McClain)
                                    </Text>
                                </Row>
                                <Row style={styles.descHashTagContainer}>
                                    <Text style={styles.descHashTag}>
                                        #Hiphop&Rap #ArtinbStudio
                                    </Text>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <View style={styles.recordHr} />
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
                    <Record image={require('../assets/img/cover.png')} buttonColor={'white'} />
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
