dnode-ez
========

DNode-ez makes Dnode even easier!

The server:
	
	server.listen(5050);
	var baz = function(val) { console.log("Foobar! " + val);};
	server.on('foobar',baz);

The client:

	client.connect(5050);
	client.emit('foobar','<-- Cool!');

Results in:

	//  on the server
	> Foobar! <-- Cool!

Where

	var dnode_ez = require('dnode-ez');
	var server = dnode_ez();
	var client = dnode_ez();
