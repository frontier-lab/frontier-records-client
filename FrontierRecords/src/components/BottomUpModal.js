
import React, { Component } from "react";
import { View, Text, ScrollView, Dimensions, Modal, TouchableWithoutFeedback, TouchableOpacity, Animated, Easing, Platform } from "react-native";

const deviceHeight = Dimensions.get("window").height
class BottomUpModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
        }
        this.contentHeight = new Animated.Value(this.props.contentHeight);
        this.contentOffsetY = new Animated.Value(0);
        this.backgroundContentHeight = new Animated.Value(0);
        this.backdropOpacity = this.backgroundContentHeight.interpolate({
            inputRange: [0, this.contentHeight._value],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        });
        this.scrollSheet = React.createRef();
    }

    componentWillMount() {
        this.contentOffsetY.addListener( ({ value }) => {
            console.log(this.backgroundContentHeight._value, this.backdropOpacity.__getValue())
            this.scrollSheet.current.getNode().scrollTo({ x: 0, y: value, animated: false });
        });
        this.contentHeight.addListener( ({ value }) => {
                this.backgroundContentHeight.setValue(value)
        });
    }

    hide = (duration, callback) => {
        Animated.timing(this.contentOffsetY, {
            toValue: 0,
            duration: duration? duration : this.props.animationDuration,
            easing: this.props.closeEasing
        }).start(() => {
            this.setState({ isVisible: false }, () => {
                this.contentHeight.setValue(this.props.contentHeight)
                this.backgroundContentHeight.setValue(0);
                if (callback) {
                    callback()
                }
            })
        })
    }
    show = (duration, callback) => {
        this.setState({ isVisible: true }, () => {
            Animated.timing(this.contentOffsetY, {
                toValue: this.contentHeight._value,
                duration: duration? duration : this.props.animationDuration,
                easing: this.props.showEasing
            }).start(() => {
                if (callback) {
                    callback()
                }
            });
        })
    }


    handleScroll = (event) => {
        const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent
        this.contentOffsetY._value = contentOffset.y
    }

    handlerScrollEnd = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y
        this.contentOffsetY._value = event.nativeEvent.contentOffset.y
        const velocityY = event.nativeEvent.velocity.y
        console.log(offsetY)
        if (offsetY < (this.contentHeight._value/2) || (Platform.OS === 'ios' ? velocityY < -1 : velocityY > 1) ) { 
            this.hide(200);
        } else if (offsetY < this.contentHeight._value) {
            this.show(200);
        }
    }

    transformContentHeight = (number, duration) => {
        Animated.parallel([
            Animated.timing(this.contentOffsetY, {
                toValue: number,
                duration: duration? duration : this.props.animationDuration,
                easing: this.props.showEasing
            }),
            Animated.timing(this.contentHeight, {
                toValue: number,
                duration: duration? duration : this.props.animationDuration,
                easing: Easing.linear()
            })
        ]).start()
    }

    render() {
        const onScrollEvent = Animated.event(
                                [{nativeEvent: { contentOffset: { y: this.backgroundContentHeight } }}],
                                { listener: this.handleScroll },
                                { useNativeDriver: true })
        return (
            <Modal transparent visible={this.state.isVisible}>

                <Animated.View style={{ position: "absolute", bottom: 0, backgroundColor: "black", height: this.backgroundContentHeight, width: "100%" }} />
                <Animated.ScrollView refreshing={false} onScrollEndDrag={this.handlerScrollEnd} scrollEventThrottle={8} onScroll={onScrollEvent} ref={this.scrollSheet} style={{ flex: 1, flexDirection: 'column', paddingBottom: 56 }}>
                    <Animated.View style={{ height: deviceHeight, width: "100%", opacity: this.backdropOpacity }}>
                        <TouchableWithoutFeedback onPress={() => this.hide()} style={{ flex: 1 }}>
                            <View style={{ backgroundColor: this.props.backdropColor, opacity: this.props.backdropOpacity, flex: 1 }}>
                            </View>
                        </TouchableWithoutFeedback>
                    </Animated.View>    
                    <Animated.View style={[{ backgroundColor: "black", height: this.contentHeight, width: "100%" }]}>
                        {this.props.children}
                    </Animated.View>
                </Animated.ScrollView>
            </Modal>
        );
    }
}

BottomUpModal.defaultProps = {
    contentHeight: 500,
    initHeightOnScroll: deviceHeight / 2,
    backdropOpacity: 0.5,
    backdropColor: 'gray',
    animationDuration: 400,
    showEasing: Easing.bezier(.28,.6,.32,.98),
    closeEasing: Easing.linear()
}

export default BottomUpModal;