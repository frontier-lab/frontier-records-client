import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Grid, Row, Col } from 'native-base';
import { Avatar } from 'react-native-elements';
import Icons from '../CustomIcon';
import common from '../style/common';
import { styles, constant } from '../style/RecordList';
import MusicActionSheet from './MusicActionSheet';


class Record extends Component {
    
    showMusicActionSheet = () => {
        this.refs.actionSheet.show();
    }

    constructor(props) {
        super(props);
        this.state = {
            image: this.props.image,
            buttonColor: this.props.buttonColor,
        }
    }

    render() {
        return (
            <Row style={{...common.backgroundBlack, ...common.width100}}>
                    <MusicActionSheet 
                    image={this.props.image} title={this.props.title} artist={this.props.artist}
                    ref={"actionSheet"} />
                    <Col style={{...common.backgroundBlack, ...styles.recordContainer}}>
                        <Row style={{justifyContent: 'center', height:280, width: '100%', backgroundColor: 'transparent' }}>
                            {/* 디스크 이미지 */}
                            <Col style={{backgroundColor: 'transparent', justifyContent:'flex-end', alignItems: 'center'}}>
                                <Col style={styles.discWrap}>
                                    <Image
                                        source={this.state.image}
                                        style={styles.discImage} />
                                    <Icons name={'ic_main_play'} size={constant.discPlayBtnSize} color={this.state.buttonColor} style={common.positionAbsolute} />
                                </Col>
                            </Col>

                            {/* 더보기 액션 아이콘 */}
                            <Icons 
                            onPress={this.showMusicActionSheet}
                            name={'ic_more'} size={constant.discInfoBtnSize} style={styles.discInfoBtn} />

                            {/* 시간 + HR */}
                            <Col style={{position:'absolute', bottom:0, height: 28, width: '100%', backgroundColor: 'transparent', paddingRight: 20, paddingLeft: 20}}>
                                <Text style={{
                                    width: 80,
                                    height: 10,
                                    opacity: 0.6,
                                    fontSize: 9,
                                    fontWeight: "normal",
                                    fontStyle: "normal",
                                    letterSpacing: 0,
                                    color: "#ffffff"
                                }}>
                                    1시간 전
                                </Text>
                                <View style={styles.recordHr} />
                            </Col>
                        </Row>
                        {/* 가수 이름 좋아요 공유하기 */}
                        <Row style={{backgroundColor: 'transparent', height: 44, width: '100%', paddingLeft: 20, paddingRight: 20}}>
                            <Row style={{backgroundColor: 'transparent', ...styles.descArtist}}>
                                <Avatar source={this.props.image} size={constant.descArtistAvatarSize} rounded containerStyle={common.backgroundGray} />
                                <Text allowFontScaling={false} style={styles.descArtistName}>
                                    {this.props.artist}
                                </Text>
                            </Row>
                            <Row style={{backgroundColor: 'transparent', justifyContent: 'flex-end', alignItems: 'center'}}>
                                <Icons name={'ic_like'} size={constant.descIconSize} style={styles.descIcon} />
                                <Icons name={'ic_share'} size={constant.descIconSize} style={styles.descIcon} />
                            </Row>
                        </Row>

                        <Row style={{backgroundColor: 'transparent', height: 102, width: '100%'}}>
                            <Col style={{...styles.descContainer}}>
                                <Row style={styles.descArtistContainer}>
                                    <Text style={{
                                        height: 12,
                                        fontSize: 10,
                                        fontWeight: "normal",
                                        fontStyle: "normal",
                                        letterSpacing: 0,
                                        color: "#ffffff"
                                    }}>
                                    좋아요 <Text style={{fontWeight: 'bold', paddingLeft: 4}}>214</Text>개
                                    </Text>
                                </Row>
                                <Row style={styles.descTitleContainer}>
                                    <Text allowFontScaling={false}  style={{
                                        height: 22,
                                        fontSize: 15,
                                        fontWeight: "bold",
                                        fontStyle: "normal",
                                        lineHeight: 22,
                                        letterSpacing: 0,
                                        color: "#ffffff"
                                    }}>
                                    {this.props.title}
                                    </Text>
                                </Row>

                                <Row style={styles.descHashTagContainer}>
                                    
                                    <View style={{
                                        marginTop: 2,
                                        height: 24,
                                        opacity: 0.1,
                                        alignItems: 'center',
                                        borderRadius: 12,
                                        justifyContent: 'center',
                                        backgroundColor: '#ffffff'
                                        }}>
                                        <Text allowFontScaling={false} style={{color: "rgba(255,255,255,0.9)", ...styles.descHashTag}}>
                                            #hiphop&rap 
                                        </Text>
                                    </View>
                                    
                                    
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    
                </Row>
        )
    }
}

class RecordList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid>
                <Col>
                    <Record title={"미안해 (Feat. Beenzino)"} artist={"자이언티 (Zion. T)"} image={require('../assets/img/sample.jpg')} buttonColor={'white'} picker={this.refs.picker} />
                    <Record title={"FREQUENCY (feat Phil McClain)"} artist={"Johnny Balik"} image={require('../assets/img/cover.png')} buttonColor={'white'} picker={this.refs.picker}/>
                    <Record title={"미안해 (Feat. Beenzino)"} artist={"자이언티 (Zion. T)"} image={require('../assets/img/sample.jpg')} buttonColor={'white'} picker={this.refs.picker} />
                    <Record title={"FREQUENCY (feat Phil McClain)"} artist={"Johnny Balik"} image={require('../assets/img/cover.png')} buttonColor={'red'} picker={this.refs.picker} />
                    <Record title={"미안해 (Feat. Beenzino)"} artist={"자이언티 (Zion. T)"} image={require('../assets/img/sample.jpg')} buttonColor={'white'} picker={this.refs.picker} />
                    <Record title={"FREQUENCY (feat Phil McClain)"} artist={"Johnny Balik"} image={require('../assets/img/cover.png')} buttonColor={'red'} picker={this.refs.picker} />
                    <Record title={"미안해 (Feat. Beenzino)"} artist={"자이언티 (Zion. T)"} image={require('../assets/img/sample.jpg')} buttonColor={'white'} picker={this.refs.picker} />
                    <Record title={"FREQUENCY (feat Phil McClain)"} artist={"Johnny Balik"} image={require('../assets/img/cover.png')} buttonColor={'red'} picker={this.refs.picker} />
                    <Record title={"미안해 (Feat. Beenzino)"} artist={"자이언티 (Zion. T)"} image={require('../assets/img/sample.jpg')} buttonColor={'white'} picker={this.refs.picker} />
                </Col>
            </Grid>
        );
    }
}

export default RecordList;
