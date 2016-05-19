/**
 * This lambda function sends a message to hipchat letting folks know there are snacks in the kitchen.
 * The following JSON template shows what is sent as the payload:
    {
        "serialNumber": "GXXXXXXXXXXXXXXXXX",
        "batteryVoltage": "xxmV",
        "clickType": "SINGLE" | "DOUBLE" | "LONG"
    }
 *
 * A "LONG" clickType is sent if the first press lasts longer than 1.5 seconds.
 * "SINGLE" and "DOUBLE" clickType payloads are sent for short clicks.
 *
 * For more documentation, follow the link below.
 * http://docs.aws.amazon.com/iot/latest/developerguide/iot-lambda-rule.html
 */

const AWS = require('aws-sdk');
const https = require('https');

exports.handler = (event, context, callback) => {
    console.log('Received event:', event.clickType);

    var options = {
		hostname: 'HIPCHAT_DOMAIN',
		port: 443,
		path: 'NOTIFICATION_PATH',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}
    };

    var req = https.request(options, (res) => {
        console.log('statusCode: ', res.statusCode);
        console.log('headers: ', res.headers);

        res.on('data', (d) => {
            console.log('response', d);
            if (callback) {
                callback();
            }
        });
    });
    req.write(JSON.stringify({color: "green", message: "@all There are snacks in the kitchen!", notify: true, message_format: "text"}));
    req.end();

    req.on('error', (e) => {
        console.error(e);
        if (callback) {
            callback();
        }
    });
};
