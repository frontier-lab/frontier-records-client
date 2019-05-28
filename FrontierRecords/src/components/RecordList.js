import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Grid, Row, Col, Content } from 'native-base';
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
                    <Col style={{...styles.recordContainer}}>
                        {/* 디스크 이미지 업로드 시간 HR */}
                        <Row style={styles.discContainer}>
                            {/* 디스크 이미지 */}
                            <Col style={styles.discWrap}>
                                <Col style={styles.discImageWrap}>
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
                            <Col style={styles.uploadInfoWrap}>
                                <Text style={styles.uploadInfoText}>
                                    1시간 전
                                </Text>
                                <View style={styles.discHr} />
                            </Col>
                        </Row>
                        {/* 가수 이름 좋아요 공유하기 */}
                        <Row style={styles.artistLikeShareContainer}>
                            <Row style={styles.artistWrap}>
                                <Avatar source={this.props.image} size={constant.artistAvatarSize} rounded containerStyle={common.backgroundGray} />
                                <Text allowFontScaling={false} style={styles.artistText}>
                                    {this.props.artist}
                                </Text>
                            </Row>
                            <Row style={styles.likeShareWrap}>
                                <Icons name={'ic_like'} size={constant.likeShareIconSize} style={styles.likeShareIcon} />
                                <Icons name={'ic_share'} size={constant.likeShareIconSize} style={styles.likeShareIcon} />
                            </Row>
                        </Row>

                        {/* 좋아요 개수 곡 타이틀 */}
                        <Col style={styles.likeCountTitleContainer}>
                            <Row style={styles.likeCountContainer}>
                                <Text allowFontScaling={false} style={styles.likeCountText}>
                                좋아요 <Text style={styles.likeCountCount}>214</Text>개
                                </Text>
                            </Row>
                            <Row style={styles.titleContainer}>
                                <Text allowFontScaling={false}  style={styles.titleText}>
                                    {this.props.title}
                                </Text>
                            </Row>
                        </Col>
                        {/* 태그 */}
                        <Row style={styles.hashTagContainer}>
                            {this.props.tags.map((tag, i) => {
                                return (
                                    <View style={styles.hashTagWrap} key={i}>
                                        <Text allowFontScaling={false} style={styles.hashTagText}>
                                            #{tag.length > 20 ? tag.substring(0, 20) + "...": tag}
                                        </Text>
                                    </View>
                                )
                            })}
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
                    <Record tags={['Hiphop&Rap','RnB', '소울', '알엔비','소울', '소울', '소울', '이국적', '자기전에생각나는곡꼭들어야하는그런곡내마음의심금을울리는곡', '지려버리곡']} title={"미안해 (Feat. Beenzino)"} artist={"자이언티 (Zion. T)"} image={require('../assets/img/sample.jpg')} buttonColor={'white'} picker={this.refs.picker} />
                    <Record tags={['알엔비','소울', '이국적']} title={"FREQUENCY (feat Phil McClain)"} artist={"Johnny Balik"} image={require('../assets/img/cover.png')} buttonColor={'white'} picker={this.refs.picker}/>
                    <Record tags={['이별','발라드',]} title={"미안해 (Feat. Beenzino)"} artist={"자이언티 (Zion. T)"} image={require('../assets/img/sample.jpg')} buttonColor={'white'} picker={this.refs.picker} />
                    <Record tags={['여름에어울리는곡', 'Hiphop&Rap','RnB', '소울', '알엔비','소울', '이국적']}title={"FREQUENCY (feat Phil McClain)"} artist={"Johnny Balik"} image={require('../assets/img/cover.png')} buttonColor={'red'} picker={this.refs.picker} />
                    <Record tags={['이별','발라드',]} title={"미안해 (Feat. Beenzino)"} artist={"자이언티 (Zion. T)"} image={require('../assets/img/sample.jpg')} buttonColor={'white'} picker={this.refs.picker} />
                    <Record tags={['알엔비','소울', '이국적']} title={"FREQUENCY (feat Phil McClain)"} artist={"Johnny Balik"} image={require('../assets/img/cover.png')} buttonColor={'red'} picker={this.refs.picker} />
                    <Record tags={['알엔비','소울', '이국적']} title={"미안해 (Feat. Beenzino)"} artist={"자이언티 (Zion. T)"} image={require('../assets/img/sample.jpg')} buttonColor={'white'} picker={this.refs.picker} />
                    <Record tags={['알엔비','소울', '이국적']} title={"FREQUENCY (feat Phil McClain)"} artist={"Johnny Balik"} image={require('../assets/img/cover.png')} buttonColor={'red'} picker={this.refs.picker} />
                    <Record tags={['알엔비','소울', '이국적']} title={"미안해 (Feat. Beenzino)"} artist={"자이언티 (Zion. T)"} image={require('../assets/img/sample.jpg')} buttonColor={'white'} picker={this.refs.picker} />
                </Col>
            </Grid>
        );
    }
}

export default RecordList;
