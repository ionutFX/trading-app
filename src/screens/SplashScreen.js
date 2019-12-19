import React, { Component } from 'react'
import { Box, Text } from 'react-native-design-utility'
import { Image } from 'react-native';
import { images } from '../constants/images';

class SplashScreen extends Component {


    componentDidMount(){
        this.checkAuth();
    }


    checkAuth = () => {
        setTimeout( ()=> {
            this.props.navigation.navigate('Auth');
        }, 1000)
    }

    render() {
        return (
            <Box  center>
                <Image source={images.logo} />
                {/* <Text>
                    Anything is Possible
                </Text> */}
            </Box>
        )
    }
}

export default SplashScreen
