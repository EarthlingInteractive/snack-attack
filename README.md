# snack-attack

<p align="center">
  <img src="http://i.imgur.com/ZrbhsUp.gif" alt="Snack Attack" />
</p>


This [Amazon AWS Lambda](https://aws.amazon.com/lambda/) function sends a message to a slack room letting folks know there are snacks in the kitchen when an [Amazon IoT Button](http://aws.amazon.com/iot/button/) is pressed. 

## Setup

Replace the  `NOTIFICATION_PATH` with the webhook url for the room you want to post to (eg. '/services/XXXXXXX/XXXXXXX/XXXXXXXXXX').
