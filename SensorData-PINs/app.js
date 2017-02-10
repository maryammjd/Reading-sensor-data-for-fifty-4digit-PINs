var mongourl="mongodb://tobeset";
var express=require('express');
var http=require('http');
var app=express();
var server=http.createServer(app);
var socket=require('socket.io').listen(server);
app.use(express.static(__dirname+'/Test'));
server.listen(8080);
console.log('server Started at port 8080');
    require('mongodb').connect(mongourl, function(err, conn){
		console.log("Mongo Connected!");
		 socket.sockets.on('connection', function(socket){
			socket.emit('connected');
			console.log('user connected');
			socket.on('status',function(data){
				console.log(data);
				conn.collection('sensor', function(err, coll){
				object_to_insert = { 'type' : 'status', 'data': data, 'ts': new Date() };
				coll.insert( object_to_insert, {safe:true}, function(err){
				console.log("Status Inserted!");
					});				
		//record_visit(data,'Status');
				});
			});
				
			socket.on('Otime',function(data){
				console.log(data);
				conn.collection('sensor', function(err, coll){
				object_to_insert = { 'type' : 'Otime', 'data': data, 'ts': new Date() };
				coll.insert( object_to_insert, {safe:true}, function(err){
				console.log("Orientation time Inserted!");
					});				
		//record_visit(data,'OTime');
				});
			});
			
			socket.on('Mtime',function(data){
				console.log(data);
				
				conn.collection('sensor', function(err, coll){
				
					object_to_insert = { 'type' : 'Mtime', 'data': data, 'ts': new Date() };

					coll.insert( object_to_insert, {safe:true}, function(err){
						console.log("Motion Time Inserted!");
					});				
		//record_visit(data,'MTime');
		
				});
			});
			
			socket.on('rAlpha',function(data){
				console.log(data);
				
				conn.collection('sensor', function(err, coll){
				
					object_to_insert = { 'type' : 'rAlpha', 'data': data, 'ts': new Date() };

					coll.insert( object_to_insert, {safe:true}, function(err){
						console.log("rAlpha Inserted!");
					});				
		//record_visit(data,'rAlpha');
				});
			});
			
			socket.on('rBeta',function(data){
				console.log(data);
				
				conn.collection('sensor', function(err, coll){
				
					object_to_insert = { 'type' : 'rBeta', 'data': data, 'ts': new Date() };

					coll.insert( object_to_insert, {safe:true}, function(err){
						console.log("rBeta Inserted!");
					});				
		//record_visit(data,'rBeta');
				});
			});
			
			socket.on('rGama',function(data){
				console.log(data);
				
				conn.collection('sensor', function(err, coll){
				
					object_to_insert = { 'type' : 'rGama', 'data': data, 'ts': new Date() };

					coll.insert( object_to_insert, {safe:true}, function(err){
						console.log("rGama Inserted!");
					});				
		//record_visit(data,'rGama');
				});
			});
			
			
			
			socket.on('interval',function(data){
				console.log(data);
				
				conn.collection('sensor', function(err, coll){
				
					object_to_insert = { 'type' : 'interval', 'data': data, 'ts': new Date() };

					coll.insert( object_to_insert, {safe:true}, function(err){
						console.log("Status Inserted!");
					});				
		//record_visit(data,'interval');
				});
			});
			
			socket.on('OX',function(data){
				console.log('OX='+data+' arrived!');
				
				conn.collection('sensor', function(err, coll){
				
					object_to_insert = { 'type' : 'OX', 'data': data, 'ts': new Date() };

					coll.insert( object_to_insert, {safe:true}, function(err){
						console.log("OX Inserted!");
					});				
		//record_visit(data,'OX');
				});
			});
			
			
			socket.on('OY',function(data){
				console.log('OY='+data+' arrived!');
				
				conn.collection('sensor', function(err, coll){
				
					object_to_insert = { 'type' : 'OY', 'data': data, 'ts': new Date() };

					coll.insert( object_to_insert, {safe:true}, function(err){
						console.log("OY Inserted!");
					});		
		//record_visit(data,'OY');					
				});
			});
			
			socket.on('OZ',function(data){
				console.log('OZ='+data+' arrived!');
				
				conn.collection('sensor', function(err, coll){
				
					object_to_insert = { 'type' : 'OZ', 'data': data, 'ts': new Date() };

					coll.insert( object_to_insert, {safe:true}, function(err){
						console.log("OZ Inserted!");
					});	
		//record_visit(data,'OZ');					
				});
			});	
			
			socket.on('MX',function(data){
				console.log('MX='+data+' arrived!');
				
				conn.collection('sensor', function(err, coll){
				
					object_to_insert = { 'type' : 'MX', 'data': data, 'ts': new Date() };

					coll.insert( object_to_insert, {safe:true}, function(err){
						console.log("MX Inserted!");
					});	
		//record_visit(data,'MX');
				});
			});
			
			socket.on('MY',function(data){
				console.log('MY='+data+' arrived!');
				
				conn.collection('sensor', function(err, coll){
				
					object_to_insert = { 'type' : 'MY', 'data': data, 'ts': new Date() };

					coll.insert( object_to_insert, {safe:true}, function(err){
						console.log("MY Inserted!");
					});				
//record_visit(data,'MY');			
			});
			});
			
			socket.on('MZ',function(data){
				console.log('MZ='+data+' arrived!');
				
				conn.collection('sensor', function(err, coll){
				
					object_to_insert = { 'type' : 'MZ', 'data': data, 'ts': new Date() };

					coll.insert( object_to_insert, {safe:true}, function(err){
						console.log("MZ Inserted!");
					});	
//record_visit(data,'MZ');					
				});
			});
			
			socket.on('MGX',function(data){
				console.log('MGX='+data+' arrived!');
				
				conn.collection('sensor', function(err, coll){
				
					object_to_insert = { 'type' : 'MGX', 'data': data, 'ts': new Date() };

					coll.insert( object_to_insert, {safe:true}, function(err){
						console.log("MGX Inserted!");
					});	
//record_visit(data,'MGX');					
				});
			});
			
			socket.on('MGY',function(data){
				console.log('MGY='+data+' arrived!');
				
				conn.collection('sensor', function(err, coll){
				
					object_to_insert = { 'type' : 'MGY', 'data': data, 'ts': new Date() };

					coll.insert( object_to_insert, {safe:true}, function(err){
						console.log("MGY Inserted!");
					});	
//record_visit(data,'MGY');					
				});
			});
			
			socket.on('MGZ',function(data){
				console.log('MGZ='+data+' arrived!');
				
				conn.collection('sensor', function(err, coll){
				
					object_to_insert = { 'type' : 'MGZ', 'data': data, 'ts': new Date() };

					coll.insert( object_to_insert, {safe:true}, function(err){
						console.log("MGZ Inserted!");
					});	
//record_visit(data,'MGZ');					
				});
			});
			

			socket.on('count',function(data){			
				console.log("Count is "+data);
			});
			
			socket.on('disconnected',function(data){
				console.log('Socket Got Disconnected!');
				
				conn.collection('sensor', function(err, coll){
				
					object_to_insert = { 'type' : 'Disconnection', 'data': data, 'ts': new Date() };

					coll.insert( object_to_insert, {safe:true}, function(err){
						console.log("Socket Disconnected Successfully!");
					});				
				});
				//record_visit(data,'count');
			});
		});
	});