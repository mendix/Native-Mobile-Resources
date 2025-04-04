import AsyncStorage from '@react-native-async-storage/async-storage';

// This file was generated by Mendix Studio Pro.
// BEGIN EXTRA CODE
// END EXTRA CODE
/**
 * Retrieve a local stored Mendix object identified by a unique key. When object is the client state it will be returned, if not it will be re-created. Note: when re-creating the local mendix object the Mendix Object ID will never be the same.
 * @param {string} key - This field is required.
 * @param {string} entity - This field is required.
 * @returns {Promise.<MxObject>}
 */
async function GetStorageItemObject(key, entity) {
    // BEGIN USER CODE
    if (!key) {
        return Promise.reject(new Error("Input parameter 'Key' is required"));
    }
    if (!entity) {
        return Promise.reject(new Error("Input parameter 'Entity' is required"));
    }
    return getItem(key).then(result => {
        if (result === null) {
            return Promise.reject(new Error(`Storage item '${key}' does not exist`));
        }
        const value = JSON.parse(result);
        return getOrCreateMxObject(entity, value).then(newObject => {
            const newValue = serializeMxObject(newObject);
            return setItem(key, JSON.stringify(newValue)).then(() => newObject);
        });
    });
    function getItem(key) {
        if (navigator && navigator.product === "ReactNative") {
            return AsyncStorage.getItem(key);
        }
        if (window) {
            const value = window.localStorage.getItem(key);
            return Promise.resolve(value);
        }
        return Promise.reject(new Error("No storage API available"));
    }
    function setItem(key, value) {
        if (navigator && navigator.product === "ReactNative") {
            return AsyncStorage.setItem(key, value);
        }
        if (window) {
            window.localStorage.setItem(key, value);
            return Promise.resolve();
        }
        return Promise.reject(new Error("No storage API available"));
    }
    function getOrCreateMxObject(entity, value) {
        return getMxObject(value.guid).then(existingObject => {
            if (existingObject) {
                return existingObject;
            }
            else {
                return createMxObject(entity, value);
            }
        });
    }
    function getMxObject(guid) {
        return new Promise((resolve, reject) => {
            mx.data.get({
                guid,
                callback: mxObject => resolve(mxObject),
                error: error => reject(error)
            });
        });
    }
    function createMxObject(entity, value) {
        return new Promise((resolve, reject) => {
            mx.data.create({
                entity,
                callback: mxObject => {
                    Object.keys(value)
                        .filter(attribute => attribute !== "guid")
                        .forEach(attributeName => {
                        const attributeValue = value[attributeName];
                        mxObject.set(attributeName, attributeValue);
                    });
                    resolve(mxObject);
                },
                error: () => reject(new Error(`Could not create '${entity}' object`))
            });
        });
    }
    function serializeMxObject(object) {
        return object.getAttributes().reduce((accumulator, attributeName) => {
            accumulator[attributeName] = object.get(attributeName);
            return accumulator;
        }, { guid: object.getGuid() });
    }
    // END USER CODE
}

export { GetStorageItemObject };
