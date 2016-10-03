import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ whenPressed }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={whenPressed} style={buttonStyle}>
            <Text style={textStyle}>Click Me!!!</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        alignSelf: 'center',
        color: '#007aff',
        fontWeight: '600',
        fontSize: 16
    },
    buttonStyle: {
        flex: 1,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        marginLeft: 5,
        marginRight: 5
    }
};

export default Button;
