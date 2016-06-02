# snack-attack

<p align="center">
  <img src="http://i.imgur.com/ZrbhsUp.gif" alt="Snack Attack" />
</p>


This [Amazon AWS Lambda](https://aws.amazon.com/lambda/) function sends a message to a [Hipchat](https://www.hipchat.com/) room letting folks know there are snacks in the kitchen when an [Amazon IoT Button](http://aws.amazon.com/iot/button/) is pressed. 

## Setup

Replace the `HIPCHAT_DOMAIN` with your hipchat domain (eg. 'earthling.hipchat.com') and `NOTIFICATION_PATH` with the integration url for the room you want to post to (eg. '/v2/room/ROOM_ID/notification?auth_token=TOKEN').
