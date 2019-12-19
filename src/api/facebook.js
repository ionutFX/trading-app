import  Constants  from 'expo-constants';
import * as Facebook from 'expo-facebook';

const permissions = ['public_profile', 'email'];

const loginAsync= async () =>{
    try {   

        await Facebook.initializeAsync(Constants.manifest.facebookAppId);
        const { type, token} = await Facebook.logInWithReadPermissionsAsync( {permissions});
      
        
        if (type ==='success'){
            return Promise.resolve(token);
        }

        Promise.reject("no success");

    } catch (error) {
        console.log('error', error);
        return Promise.reject(error);
    }
}

export const FacebookApi = {
    loginAsync,
}