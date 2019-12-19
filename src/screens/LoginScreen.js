import React, { Component } from 'react'
import { Box, Text } from 'react-native-design-utility'
import { Image, Alert } from 'react-native'
import { images } from '../constants/images'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesome } from '@expo/vector-icons'
import { theme } from '../constants/theme'
import { FacebookApi } from "../api/facebook";

class LoginScreen extends Component {

    onFacebookButtonPress = async () =>{
        try {
            const token = await FacebookApi.loginAsync();
            console.log(token)
        } catch (error) {
            console.log("error", error);
        }
        
        
    
    
    }
    render() {
        return (
            <Box f={1} center>
                <Box f={1} center>
                    <Image source={images.logo}/>
                </Box>
                <Box f={0.9} center  w="100%">
                    <TouchableOpacity onPress={this.onFacebookButtonPress}>
                        <Box dir="row" align="center" bg="facebookBlue"  self="center"  w="100%" shadow={1} radius="sm" px="lg" py="xs">
                            <Box mr="sm">
                                <Box bg="white" h={32} w={32} >
                                    <FontAwesome name="facebook" size={30} color={theme.color.facebookBlue} style={ {marginHorizontal: 6, marginVertical: 2}}/>
                                </Box>
                            </Box>
                            <Box>
                                <Text color="white">Login with Facebook</Text>
                            </Box>
                        </Box>
                    </TouchableOpacity>
                </Box>
            </Box>
        )
    }
}

export default LoginScreen
