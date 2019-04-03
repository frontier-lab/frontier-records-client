import React, { Component, Fragment } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { Grid, Content, Card, CardItem, Body, Row, Col } from 'native-base';
import { Avatar, Icon } from 'react-native-elements';
import Icons from 'react-native-vector-icons/AntDesign';
import BottomUpModal from './BottomUpModal';

export default class MusicActionSheet extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showShare: false
        }
        this.optionModal = React.createRef()
        this.shareModal = React.createRef()
        this.options = [{
            title: "가사보기",
            style: { opacity: 1, backgroundColor: "#d8d8d8" },
            onPress: () => alert("test1")
        },
        {
            title: "공유하기",
            style: { opacity: 1, backgroundColor: "#d8d8d8" },
            onPress: this.transformToShareSheet
        },
        {
            title: "재생목록에 추가",
            style: { opacity: 1, backgroundColor: "#d8d8d8" },
            onPress: () => alert("test3")
        },
        {
            title: "내 플레이리스트에 추가",
            style: { opacity: 1, backgroundColor: "#d8d8d8" },
            onPress: () => alert("test4")
        },
        {
            title: "신고하기",
            style: { opacity: 1, backgroundColor: "#d8d8d8" },
            onPress: () => alert("test5")
        }]
    }

    show = () => {
        this.setState({showShare: false}, () => {
            this.showOptionSheet()
        })
    }

    hide = () => {
        if (this.state.showShare) {
            this.optionModal.current.transformContentHeight(516, 400)
            this.setState({showShare: false})
        } else {
            this.hideOptionSheet(() => {
                this.setState({showShare: false})
            })
        }
        
    }

    transformToShareSheet = () => {
        this.optionModal.current.transformContentHeight(236, 400)
        this.setState({showShare: true})
    }
    showOptionSheet = () => this.optionModal.current.show()
    hideOptionSheet = () => this.optionModal.current.hide()

    renderOptions = () => {
        return this.options.map((data, idx) => {
            return (
                <View key={idx} style={{ height: 60, backgroundColor: '#000000' }}>
                    <ActionSheetContainer onPress={data.onPress} style={data.style} title={data.title} />
                </View>
            )
        })
    }

    renderSheet = () => {
        return this.state.showShare ? 
            <Row style={{ height: 180, }}>
                <ShareActionSheetTitle avatar={this.props.image} title={this.props.title} artist={this.props.artist} />
            </Row>
        :   <Fragment>
                <Row style={{ height: 130 }}>
                    <MusicActionSheetTitle avatar={this.props.image} title={this.props.title} artist={this.props.artist} />
                </Row>
                <Row style={{ height: 330 }}>
                    <Col>{this.renderOptions()}</Col>
                </Row>
            </Fragment>

    }


    render() {
        
        return (
            <View>
                <BottomUpModal
                    ref={this.optionModal}
                    contentHeight={516}
                    initHeightOnScroll={516}
                    backdropOpacity={0.8}
                    backdropColor={"#000000"}
                    animationDuration={450}>
                    <View style={{ flex: 1 }}>
                        {this.renderSheet()}
                        <Row style={{ height: 56 }}>
                            <TouchableOpacity onPress={() => this.hide()} style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
                                <View style={{flex: 1, justifyContent: "center", alignItems: "center",}}>
                                    <Text allowFontScaling={false} style={{ opacity: 0.7, fontSize: 16, fontWeight: "normal", fontStyle: "normal", letterSpacing: -0.47, color: "#ffffff" }}>닫기</Text>
                                </View>
                            </TouchableOpacity>
                        </Row>
                    </View>
                </BottomUpModal>
            </View>
        )
    }
}

class MusicActionSheetTitle extends Component {

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
                        
                        <Icons name={"right"} size={20} style={{ position: "absolute", right: 0, color: "#ffffff" }} />
                    </Col>
                </Col>
            </Row>
        )
    }
}

class ShareActionSheetTitle extends Component {

    render() {
        return (
            <Col style={{ marginTop: 30, justifyContent: "center" }} >
                <Text allowFontScaling={false} style={{
                    marginLeft: 24,
                    fontSize: 18,
                    fontWeight: "bold",
                    fontStyle: "normal",
                    letterSpacing: -0.53,
                    color: "#ffffff"
                }}>
                    공유하기
                        </Text>
                <Row style={{ marginLeft: 30, marginRight: 30, paddingTop: 24, justifyContent: "space-between" }}>
                    <Col style={{ alignItems: "center" }}>
                        <TouchableOpacity>
                            <Avatar size={55} source={require("../assets/img/icSoundcloud.png")} rounded />
                        </TouchableOpacity>
                        <Text allowFontScaling={false} style={{
                            marginTop: 8,
                            height: 12,
                            opacity: 0.7,
                            fontSize: 10,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: -0.29,
                            textAlign: "center",
                            color: "#ffffff"
                        }} >
                            사운드클라우드
                            </Text>
                    </Col>
                    <Col style={{ alignItems: "center" }}>
                        <TouchableOpacity>
                            <Avatar size={55} source={require("../assets/img/icKakaotalk.png")} rounded />
                        </TouchableOpacity>
                        <Text allowFontScaling={false} style={{
                            marginTop: 8,
                            height: 12,
                            opacity: 0.7,
                            fontSize: 10,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: -0.29,
                            textAlign: "center",
                            color: "#ffffff"
                        }} >
                            카카오톡
                            </Text>
                    </Col>
                    <Col style={{ alignItems: "center" }}>
                        <TouchableOpacity>
                            <Avatar size={55} source={require("../assets/img/icInstagram.png")} rounded />
                        </TouchableOpacity>
                        <Text allowFontScaling={false} style={{
                            marginTop: 8,
                            height: 12,
                            opacity: 0.7,
                            fontSize: 10,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: -0.29,
                            textAlign: "center",
                            color: "#ffffff"
                        }} >
                            인스타그램
                            </Text>
                    </Col>
                    <Col style={{ alignItems: "center" }}>
                        <TouchableOpacity>
                            <Avatar size={55} source={require("../assets/img/icFacebook.png")} rounded />
                        </TouchableOpacity>
                        <Text allowFontScaling={false} style={{
                            marginTop: 8,
                            height: 12,
                            opacity: 0.7,
                            fontSize: 10,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: -0.29,
                            textAlign: "center",
                            color: "#ffffff"
                        }} >
                            페이스북
                            </Text>
                    </Col>
                    <Col style={{ alignItems: "center" }}>
                        <TouchableOpacity>
                            <Avatar size={55} source={require("../assets/img/icLink.png")} rounded />
                        </TouchableOpacity>
                        <Text allowFontScaling={false} style={{
                            marginTop: 8,
                            height: 12,
                            opacity: 0.7,
                            fontSize: 10,
                            fontWeight: "normal",
                            fontStyle: "normal",
                            letterSpacing: -0.29,
                            textAlign: "center",
                            color: "#ffffff"
                        }} >
                            링크
                            </Text>
                    </Col>
                </Row>

            </Col>
        )
    }
}


class TouchableView extends Component {
    render() { return (<TouchableOpacity onPress={this.props.onPress} style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center" }}>{this.props.children}</TouchableOpacity>) }
}
class OpacityView extends Component {
    render() { return (<View style={[{ position: "absolute", height: "100%", width: "100%" }, this.props.style]} />) }
}
class ActionSheetContainer extends Component {
    render() {
        return (
            <TouchableView onPress={this.props.onPress}>
                <Row style={{ width: "100%", justifyContent: "flex-start", alignItems: "center" }}>
                    <Avatar size={32} containerStyle={{ backgroundColor: "#d8d8d8", opacity: 1, marginLeft: 16, marginRight: 12 }} />
                    <Text allowFontScaling={false} style={{ fontSize: 16, fontWeight: "normal", fontStyle: "normal", letterSpacing: -0.47, color: "#ffffff" }}>{this.props.title}</Text>
                </Row>
            </TouchableView>
        )
    }
}



