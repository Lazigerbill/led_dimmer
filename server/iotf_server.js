var Client = Meteor.npmRequire("ibmiotf").IotfApplication;
var config = {
    "org" : Meteor.settings.iotf_org,
    "id" : Meteor.settings.iotf_id,
    "auth-key" : Meteor.settings.iotf_auth_key,
    "auth-token" : Meteor.settings.iotf_auth_token
}

var appClient = new Client(config);

appClient.connect();

appClient.on("error", function (err) {
    console.log("Error : "+err);
});

appClient.on("connect", function () {
	console.log('connected to fucking IBM');
	appClient.subscribeToDeviceEvents();
	// appClient.on("deviceEvent", function (deviceType, deviceId, eventType, format, payload) {
 //  	// console.log("Device Event from :: "+deviceType+" : "+deviceId+" of event "+eventType+" with payload : "+payload);	
	// });
});

Meteor.methods({
	sub: function(value){
		this.unblock()
		console.log(value);
		// var Client = Meteor.npmRequire("ibmiotf").IotfApplication;
		// var config = {
		//     "org" : Meteor.settings.iotf_org,
		//     "id" : Meteor.settings.iotf_id,
		//     "auth-key" : Meteor.settings.iotf_auth_key,
		//     "auth-token" : Meteor.settings.iotf_auth_token
		// }
		// var appClient = new Client(config);
		// console.log(appClient);
		// appClient.on("connect", function () {
		// 	console.log('connected to fucking IBM');
		// 	appClient.subscribeToDeviceEvents();
		// });

		// appClient.on("deviceEvent", function (deviceType, deviceId, eventType, format, payload) {
		//   console.log("Device Event from :: "+deviceType+" : "+deviceId+" of event "+eventType+" with payload : "+payload);	
		// });
	}
});