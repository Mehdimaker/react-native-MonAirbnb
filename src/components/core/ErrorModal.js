import React from 'react';
import {View, Text, StyleSheet, Animated, Dimensions, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

const {
  height: deviceHeight
} = Dimensions.get('window');

export default class ErrorModal extends React.Component {
    constructor(props){
        super (props);

        this.state = {
            offset: new Animated.Value(-deviceHeight)
        };
    }

    componentDidMount() {
        Animated.timing(this.state.offset, {
            duration: 350,
            toValue: 0
        }).start();
    }

    closeModal() {
        Animated.timing(this.state.offset, {
            duration: 350,
            toValue: -deviceHeight
        }).start(Actions.pop);
    }

    componentWillReceiveProps(nextProps){
      if (nextProps.showModal){
        Animated.timing(this.state.offset, {
            duration: 350,
            toValue: 0
        }).start();
      }
    }

    render(){
        return (
            <Animated.View style={[styles.container, {backgroundColor:'rgba(52,52,52,0.5)'},
                                  {transform: [{translateY: this.state.offset}]}]}>
                <View style={{  width:250,
                                height:250,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor:'white' }}>
                    <Text>{this.props.data}</Text>
                    <TouchableOpacity onPress={this.closeModal.bind(this)}>
                    <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        zIndex: 1000,
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
