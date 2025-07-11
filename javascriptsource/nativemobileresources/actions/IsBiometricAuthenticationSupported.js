import ReactNativeBiometrics from 'react-native-biometrics';

// This file was generated by Mendix Studio Pro.
// BEGIN EXTRA CODE
// END EXTRA CODE
/**
 * @returns {Promise.<boolean>}
 */
async function IsBiometricAuthenticationSupported() {
    // BEGIN USER CODE
    // Documentation https://github.com/smallcase/react-native-simple-biometrics
    const rnBiometrics = new ReactNativeBiometrics();
    return rnBiometrics
        .isSensorAvailable()
        .then(result => result.available)
        .catch(() => false);
    // END USER CODE
}

export { IsBiometricAuthenticationSupported };
