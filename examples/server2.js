var dnode_ez = require('../index');
var server = dnode_ez();
server.on('foobar',function(val) {console.log("Server foobar! "+val);});
server.listen(5050);
server.on('bind',function() {
	var emitterOnClient = server.getEmitter('justAnotherEmitter');
	emitterOnClient.emit('wow');
});
