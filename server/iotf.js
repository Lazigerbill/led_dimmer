var Client = require("ibmiotf").IotfApplication;
var config = {
    "org" : Meteor.settings.iotf_org,
    "id" : Meteor.settings.iotf_id,
    "auth-key" : Meteor.settings.iotf_auth_key,
    "auth-token" : Meteor.settings.iotf_auth_token
}

var appClient = new Client(config);
