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
	// appClient.subscribeToDeviceEvents();
	// appClient.on("deviceEvent", function (deviceType, deviceId, eventType, format, payload) {
 //  	console.log("Device Event from :: "+deviceType+" : "+deviceId+" of event "+eventType);	
	// });
});

Meteor.methods({
	sub: function(value){
		this.unblock();
		var config = {
		    "org" : Meteor.settings.iotf_org,
		    "id" : "commander",
		    "auth-key" : Meteor.settings.iotf_auth_key,
		    "auth-token" : Meteor.settings.iotf_auth_token
		}
		var appClient = new Client(config);
		appClient.connect();
		// appClient.log.setLevel('trace');
		appClient.on("connect", function () {
			var myData={'level' : value};
	       myData = JSON.stringify(myData);
	       appClient.publishDeviceCommand("led_pod","pod001", "led_test", "json", myData);
	       appClient.disconnect()
			// console.log(value);
		});

		appClient.on("error", function (err) {
		    console.log("Error : "+err);
		});
	}
});