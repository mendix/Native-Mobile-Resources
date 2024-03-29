// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @returns {Promise.<MxObject>}
 */
export async function SelectContact() {
	// BEGIN USER CODE
  // Documentation: https://github.com/apache/cordova-plugin-contacts
  return new Promise(function (resolve, reject) {
    if (!navigator.contacts) {
      return reject(new Error("cordova-plugin-contacts not enabled"));
    }
    navigator.contacts.pickContact(function (contact) {
      createMxObject(contact).
      then(function (object) {return resolve(object);}).
      catch(function (error) {return reject(error);});
    }, function (error) {return error.code === 6 /* OPERATION_CANCELLED_ERROR */ ? resolve() : reject(errorMessage(error));});
  });
  function createMxObject(contact) {
    return new Promise(function (resolve, reject) {
      mx.data.create({
        entity: "HybridMobileActions.Contact",
        callback: function callback(mxObject) {
          var name = contact.displayName || contact.nickname || contact.name && contact.name.formatted;
          if (name) {
            mxObject.set("DisplayName", name);
          }
          if (contact.name && contact.name.givenName) {
            mxObject.set("FirstName", contact.name.givenName);
          }
          if (contact.name && contact.name.middleName) {
            mxObject.set("MiddleName", contact.name.middleName);
          }
          if (contact.name && contact.name.familyName) {
            mxObject.set("LastName", contact.name.familyName);
          }
          var email = contact.emails && contact.emails[0].value;
          if (email) {
            mxObject.set("Email", email);
          }
          var phoneNumber = contact.phoneNumbers && contact.phoneNumbers[0].value;
          if (phoneNumber) {
            mxObject.set("PhoneNumber", phoneNumber);
          }
          resolve(mxObject);
        },
        error: function error() {return reject("Could not create 'HybridMobileActions.Contact' object");} });

    });
  }
  function errorMessage(error) {
    switch (error.code) {
      case 0 /* UNKNOWN_ERROR */:
        return "Found an unknown error while handling the request.";
      case 1 /* INVALID_ARGUMENT_ERROR */:
        return "Invalid argument found.";
      case 2 /* TIMEOUT_ERROR */:
        return "Operation timed out.";
      case 3 /* PENDING_OPERATION_ERROR */:
        return "Pending operation error.";
      case 4 /* IO_ERROR */:
        return "IO error encountered.";
      case 5 /* NOT_SUPPORTED_ERROR */:
        return "Operation not supported.";
      case 20 /* PERMISSION_DENIED_ERROR */:
        return "Permission denied.";
      default:
        return;}

  }
	// END USER CODE
}
