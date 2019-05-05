import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

export default class App extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            count: 0,
            colors: ['tomato', 'beige', 'blueviolet', 'coral', 'cornflowerblue', 'darksalmon', 'darkcyan', 'goldenrod', 'limegreen'],
            hello: 'Press button above',
            backgroundColor: null
        }
    }
    onPress = () => {

        this.setState({hello: 'Hi from button'});
    };
    onPressColor = () => {
        let random = Math.floor(Math.random() * 8);
        this.setState({backgroundColor: this.state.colors[random]});
    };
    decimals = () => {
        this.setState({
           count: this.state.count+10
        });
    };
    ones = () => {
        this.setState({
            count: this.state.count+1
        });
    };
    render() {
        return (
            <View style={[styles.container, {backgroundColor: this.state.backgroundColor}]}>
                <TouchableOpacity style={styles.button} onPress={this.onPressColor} >
                    <Text>Change background</Text>
                </TouchableOpacity>
                <Button style={styles.button} onPress={this.onPress} title="Say hi"/>
                <Text style={styles.welcome}>{this.state.hello}</Text>
                <Button style={styles.button} onPress={this.decimals} title="+10"/>
                <Button style={styles.button} title="+1" onPress={this.ones}/>
                <Text style={styles.text}>Count = {this.state.count}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    text: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 20,
        margin: 10,
    },
    buttonR: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 20,
        margin: 25,
    },
});
