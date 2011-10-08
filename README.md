dnode-ez
========

DNode-ez makes [Dnode](https://github.com/substack/dnode) even easier!

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


Awesome!


What else? 
==========

Suppose in the client:

	var emitter = new EventEmitter;
	emitter.on('wow', function(val) { console.log("wow!" + val); });
	client.bind(emitter, 'justAnotherEmitter');

Now, on the server:

	server.on('bind',function(id) {
		var clientEmitter = server.getEmitter(id);
		clientEmitter.emit('wow,' so cool!');
        // a switch / multiple clientEmitters would provide useful here.
	}

Results on the client:

	> wow! so cool!

What am i seeing?
=================

The first example shows triggering an event remotely (where that event is hosted remotely as well).

The second example shows an event being triggered locally, from a remote source.


Extra useful stuff
==================

    client.on / server.on('connect',function(remote) {});

Connect is a reserved keyword in dnode-ez and will trigger on a connection with remote being passed.

    dnode_ez({
        name:'scooby',
        profession:'snacker'
    })

You can specify an object at construction and its members will be automagically rolled into the remote object that is offered to other connections.

Consider again the first example:
 
The server:
	
	server.listen(5050);
	var baz = function(val) { console.log("Foobar! " + val);};
	server.on('foobar',baz);

The client:

	client.connect(5050);
	client.emit('foobar','<-- Cool!');

The function baz that is tied to event 'foobar' will also always recieve two additional variables, the remote and the connection object
as defined in Dnode. Thus we could rewrite as such:

    server.listen(5050);
    var baz = function(val, remote, conn) {
        console.log(conn.id + " said Foobar! " + val);
    };

