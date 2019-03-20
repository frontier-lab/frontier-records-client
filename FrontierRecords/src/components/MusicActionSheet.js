import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Grid, Content, Card, CardItem, Body, Row, Col } from 'native-base';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet'
import { Avatar, Icon } from 'react-native-elements';
import Icons from 'react-native-vector-icons/AntDesign';

const mainActionStyles = {
    overlay: {
        opacity: 0.8,
        backgroundColor: "#000000"
    },
    body: {
        backgroundColor: "#000000"
    },
    titleBox: {
        height: 130,
        opacity: 1,
    },
    buttonBox: {
        height: 60,
        opacity: 1,
    },
    cancelButtonBox: {
        height: 56,
        marginTop: 30,
        opacity: 1,
    }
}

const shareActionStyles = {
    overlay: {
        opacity: 0.8,
        backgroundColor: "#000000"
    },
    body: {
        backgroundColor: "#000000"
    },
    titleBox: {
        height: 150,
        opacity: 1,
    },
    cancelButtonBox: {
        height: 56,
        marginTop: 30,
        opacity: 1,
    }
}


export default class MusicActionSheet extends Component {

    constructor(props) {
        super(props)
        this.options = [{
            title: "가사보기",
            style: { opacity: 0.1, backgroundColor: "#d8d8d8" },
            onPress: () => alert("test1")
        },
        {
            title: "공유하기",
            style: { opacity: 0.15, backgroundColor: "#d8d8d8" },
            onPress: this.showShareActionSheet
        },
        {
            title: "재생목록에 추가",
            style: { opacity: 0.1, backgroundColor: "#d8d8d8" },
            onPress: () => alert("test3")
        },
        {
            title: "내 플레이리스트에 추가",
            style: { opacity: 0.15, backgroundColor: "#d8d8d8" },
            onPress: () => alert("test4")
        },
        {
            title: "신고하기",
            style: { opacity: 0.1, backgroundColor: "#d8d8d8" },
            onPress: () => alert("test5")
        }]
    }

    show = () => {
        this.refs.musicActionSheet.getActionSheet().show()
    }

    hide = (callback) => {
        if (callback) {
            this.refs.musicActionSheet.getActionSheet()._hideSheet(() => {
                this.refs.musicActionSheet.getActionSheet().setState({ visible: false }, () => {
                    callback()
                })
            })
        } else {
            this.refs.musicActionSheet.hide()
        }
    }

    showShareActionSheet = () => {
        this.hide(() => {
            this.refs.shareActionSheet.getActionSheet().show()
        });
    }

    render() {
        return (
            <View>
                <MainActionSheet
                    ref={"musicActionSheet"}
                    title={<MusicActionSheetTitle avatar={this.props.image} title={this.props.title} artist={this.props.artist} />}
                    options={this.options}
                    cancelButtonIndex={0}
                    destructiveButtonIndex={4}
                    onPress={(index) => { /* do something */ }}
                />
                <ShareActionSheet
                    ref={"shareActionSheet"}
                    cancelButtonIndex={0}
                    title={<ShareActionSheetTitle avatar={this.props.image} title={this.props.title} artist={this.props.artist} />}
                    onClose={this.show}
                />
            </View>
        )
    }

}

class MainActionSheet extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };

        this.options = [
            <BackgroundedView>
                <View style={{ position: "absolute", top: 0, width: "100%", height: 0.5, opacity: 0.2, backgroundColor: "#ffffff" }} />
                <TouchableView onPress={() => this.hide()} >
                    <Text style={{ opacity: 0.7, fontSize: 16, fontWeight: "normal", fontStyle: "normal", letterSpacing: -0.47, color: "#ffffff" }}>닫기</Text>
                </TouchableView>
            </BackgroundedView>,
            ...this.props.options.map((data) => {
                return (
                    <ActionSheetContainer onPress={data.onPress} style={data.style} title={data.title} />
                )
            })
        ]
    }

    getActionSheet = () => this.refs.actionSheet

    hide = () => {
        console.log("share hide")
        if (this.props.onClose) {
            this.getActionSheet()._hideSheet(() => {
                this.getActionSheet().setState({ visible: false }, () => {
                    this.props.onClose()
                })
            })
        } else {
            this.getActionSheet().hide();
        }
    }

    render() {
        return (
            <ActionSheet
                styles={mainActionStyles}
                ref={"actionSheet"}
                title={this.props.title}
                options={this.options}
                cancelButtonIndex={0}
                destructiveButtonIndex={4}
                onPress={(index) => { /* do something */ }}
            />


        );
    }
}

class MusicActionSheetTitle extends Component {

    render() {
        return (
            <BackgroundedView>
                <Row style={{ alignItems: "center" }}>
                    <Col style={[common.flex1]}>
                        <Row style={{ justifyContent: "center", alignItems: "center" }}>
                            <Avatar rounded size={90} source={this.props.avatar} />
                        </Row>
                    </Col>
                    <Col style={[common.flex2]}>
                        <Col style={{ alignItems: "flex-start", justifyContent: "center", marginTop: 43, marginBottom: 43, marginRight: 12 }}>
                            <Row style={{
                                height: 21,
                                marginBottom: 7
                            }}>
                                <Text style={{
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
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: "normal",
                                    fontStyle: "normal",
                                    letterSpacing: -0.41,
                                    color: "#bfbfbf"
                                }}>{this.props.artist}</Text>
                            </Row>
                            <Icons name={"right"} size={20} style={{ position: "absolute", right: 0, color: "#ffffff" }} />
                        </Col>
                    </Col>
                </Row>
                <OpacityView style={{ height: 130, opacity: 0.15, backgroundColor: "#d8d8d8" }} />
            </BackgroundedView>
        )
    }
}


class ShareActionSheet extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };

        this.options = [
            <BackgroundedView>
                <View style={{ position: "absolute", top: 0, width: "100%", height: 0.5, opacity: 0.2, backgroundColor: "#ffffff" }} />
                <TouchableView onPress={() => this.hide()} >
                    <Text style={{ opacity: 0.7, fontSize: 16, fontWeight: "normal", fontStyle: "normal", letterSpacing: -0.47, color: "#ffffff" }}>돌아가기</Text>
                </TouchableView>
            </BackgroundedView>
        ]
    }

    hide = () => {
        console.log("share hide")
        if (this.props.onClose) {
            this.getActionSheet()._hideSheet(() => {
                this.getActionSheet().setState({ visible: false }, () => {
                    this.props.onClose()
                })
            })
        } else {
            this.getActionSheet().hide();
        }
    }

    getActionSheet = () => this.refs.actionSheet

    render() {
        return (
            <ActionSheet
                styles={shareActionStyles}
                ref={"actionSheet"}
                title={this.props.title}
                options={this.options}
                cancelButtonIndex={0}
                destructiveButtonIndex={0}
                onPress={(index) => { /* do something */ }}
            />
        )
    }
}

class ShareActionSheetTitle extends Component {

    render() {
        return (
            <BackgroundedView>
                <Col style={{ marginTop: 30 }} >
                    <Text style={{
                        marginLeft: 24,
                        height: 21,
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
                            <Text style={{
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
                            <Text style={{
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
                            <Text style={{
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
                            <Text style={{
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
                            <Text style={{
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


            </BackgroundedView>
        )
    }
}


class BackgroundedView extends Component {
    render() { return (<View style={{ height: "100%", width: "100%", backgroundColor: "#000000" }}>{this.props.children}</View>) }
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
            <BackgroundedView>
                <TouchableView onPress={this.props.onPress}>
                    <Row style={{ width: "100%", justifyContent: "flex-start", alignItems: "center" }}>
                        <Avatar size={32} containerStyle={{ backgroundColor: "#d8d8d8", opacity: 0.1, marginLeft: 16, marginRight: 12 }} />
                        <Text style={{ fontSize: 16, fontWeight: "normal", fontStyle: "normal", letterSpacing: -0.47, color: "#ffffff" }}>{this.props.title}</Text>
                    </Row>
                    <OpacityView style={this.props.style} />
                </TouchableView>
            </BackgroundedView>
        )
    }
}

//https://github.com/beefe/react-native-actionsheet


