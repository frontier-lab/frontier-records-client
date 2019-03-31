
import React, { Component } from "react";
import { View, Text, ScrollView, Dimensions, Modal, TouchableWithoutFeedback, TouchableOpacity, Animated, Easing } from "react-native";

const deviceHeight = Dimensions.get("window").height
class BottomUpModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
        }
        this.sheetHeight = new Animated.Value(0)
        this.sheetY = new Animated.Value(0)
        this.backdropOpacity = this.sheetY.interpolate({
            inputRange: [0, this.getHeightOnScroll()],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        });
        this.scrollSheet = React.createRef()
    }

    componentWillMount() {
        this.animatedListenerId = this.sheetY.addListener(
            ({ value }) => {
                this.scrollSheet.current.scrollTo({ x: 0, y: value, animated: false })
            });
    }

    hide = (callback) => {
        Animated.timing(this.sheetY, {
            toValue: 0,
            duration: this.props.animationDuration,
            easing: Easing.linear()
        }).start(() => {
            this.setState({ isVisible: false }, () => {
                if (callback) {
                    callback()
                }
            })
        })
    }
    show = (callback) => {
        this.setState({ isVisible: true }, () => {
            Animated.timing(this.sheetY, {
                toValue: this.getHeightOnScroll(),
                duration: this.props.animationDuration,
                easing: Easing.elastic()
            }).start(() => {
                if (callback) {
                    callback()
                }
            });
        })
    }

    getHeightOnScroll = () => Math.min(this.props.contentHeight + this.props.closeButtonHeight, this.props.initHeightOnScroll)

    handleScroll = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y
        this.sheetY._value = offsetY
        this.sheetHeight.setValue(offsetY)
    }

    render() {
        return (
            <Modal transparent visible={this.state.isVisible}>

                <Animated.View style={{ position: "absolute", bottom: 0, backgroundColor: "black", height: this.sheetHeight, width: "100%" }} />
                <ScrollView scrollEventThrottle={16} onScroll={this.handleScroll} ref={this.scrollSheet} transparent style={{ flex: 1, flexDirection: 'column', paddingBottom: 56 }}>
                    <Animated.View style={{ height: deviceHeight, width: "100%", opacity: this.backdropOpacity }}>
                        <TouchableWithoutFeedback onPress={() => this.hide()} style={{ flex: 1 }}>
                            <View style={{ backgroundColor: this.props.backdropColor, opacity: this.props.backdropOpacity, flex: 1 }}>
                            </View>
                        </TouchableWithoutFeedback>
                    </Animated.View>
                    <View style={{ backgroundColor: "black", height: this.props.contentHeight, width: "100%" }}>
                        {this.props.children}
                    </View>
                    <View style={{ height: this.props.closeButtonHeight, borderTop: 1, backgroundColor: "black" }}>
                        <TouchableOpacity onPress={() => this.hide()} style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
                            <View style={{flex: 1, justifyContent: "center", alignItems: "center",}}>
                                <Text style={this.props.closeButtonStyle}>{this.props.closeButtonText}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Modal>
        );
    }
}

BottomUpModal.defaultProps = {
    contentHeight: 500,
    initHeightOnScroll: deviceHeight / 2,
    closeButtonHeight: 56,
    closeButtonText: "닫기",
    closeButtonStyle: { opacity: 0.7, fontSize: 16, fontWeight: "normal", fontStyle: "normal", letterSpacing: -0.47, color: "#ffffff" },
    backdropOpacity: 0.5,
    backdropColor: 'gray',
    animationDuration: 400
}

export default BottomUpModal;