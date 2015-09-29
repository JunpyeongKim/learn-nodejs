/**
 * Redis Publisher/Subscriber
 *
 */

var redis = require('redis');
var subscriber = redis.createClient()
var publisher = redis.createClient();
var msg_count = 0;

subscriber.on('subscribe', function (channel, count) {
    console.log('Subscriber Event: subscribe(', channel, ',', count, ')');

    publisher.publish('Test Channel', 'Publisher send a message.');
    console.log('Publisher issued Event #1...');
    publisher.publish('Test Channel', 'Publisher send a second message.');
    console.log('Publisher issued Event #2...');
    publisher.publish('Test Channel', 'Publisher send last message.');
    console.log('Publisher issued Event #3...');
});

subscriber.on('message', function (channel, message) {
    console.log('Channel Name: ' + channel + ', Message: ' + message);

    msg_count += 1;
    if (msg_count === 3) {
        subscriber.unsubscribe();
        subscriber.end();
        publisher.end();
    }
});

//
subscriber.subscribe('Test Channel');
