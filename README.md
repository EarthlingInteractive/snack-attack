# snack-attack

This amazon lambda function sends a message to hipchat letting folks know there are snacks in the kitchen when a Amazon IoT Button is pressed. 

## Setup

Replace the `HIPCHAT_DOMAIN` with your hipchat domain (eg. 'earthling.hipchat.com') and `NOTIFICATION_PATH` with the integration url for the room you want to post to (eg. '/v2/room/ROOM_ID/notification?auth_token=TOKEN').
