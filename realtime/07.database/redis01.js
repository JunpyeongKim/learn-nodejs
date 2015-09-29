/**
 * Redis Basic
 *
 */

var redis = require('redis');
var client = redis.createClient();

client.on('error', function (err) {
    console.log('Error:', err);
});

client.set('String Key', 'String Value');
client.hset('Hash Key', 'HashTest 1', '1');
client.hset(['Hash Key', 'HashTest 2', '2']);

client.get('String Key', function (err, reply) {
    console.log('String Key:', reply.toString());
});

client.hkeys('Hash Key', function (err, replies) {
    console.log(replies.length + 'replies:');
    replies.forEach(function (reply, i) {
        console.log('    ' + i + ': ' + reply);
    });
});

client.hgetall('Hash Key', function (err, obj) {
    console.log('obj:', obj);
});
