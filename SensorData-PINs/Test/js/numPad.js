var socket;
var count=0;
var innerCount=1;
var clickCount=0;
var topElement=0;
var ev="click";

function socketInit()
{
    socket=io.connect();
	socket.on('connected',function(){
		console.log('user Connected to Browsers!');
		if (window.DeviceOrientationEvent){
			console.log("Orientation is Supported!");
			window.addEventListener('deviceorientation',function(event){
				var gamma=event.gamma;
				var beta=event.beta;
				var alpha=event.alpha;						
				
				var time=new Date();
				socket.emit('OX',gamma);
				socket.emit('OY',beta);
				socket.emit('OZ',alpha);	
				socket.emit('Otime',time)			
			});		
		}
		else if (window.OrientationEvent){
			alert("MozOrientation is Supported!");
		}
		else{		
			alert("Not Supported!");
		}

		if (window.DeviceMotionEvent){
			console.log("Motion is Supported!");

			window.addEventListener('devicemotion',function(event){
				var time=new Date();
				socket.emit('Mtime',time);
				var acceleration=event.acceleration;
				var gacc=event.accelerationIncludingGravity;
				var interval = event.interval;
				var rotationRate = event.rotationRate;
				
				var ax=acceleration.x;
				var ay=acceleration.y;
				var az=acceleration.z;			
								
				var ralpha=rotationRate.alpha;
				var rbeta=rotationRate.beta;
				var rgama=rotationRate.gamma;
	
				socket.emit('MX',ax);
				socket.emit('MY',ay);
				socket.emit('MZ',az);
				
				socket.emit('rAlpha',ralpha);
				socket.emit('rBeta',rbeta);
				socket.emit('rGama',rgama);
				
				socket.emit('interval',interval);
				
				var gx=gacc.x;
				var gy=gacc.y;
				var gz=gacc.z;
				
				socket.emit('MGX',gx);
				socket.emit('MGY',gy);
				socket.emit('MGZ',gz);				
			});		 
		}
		
		else{		
			alert("Motion Not Supported!");
		}
    });
	
	socket.on('disconnect', function () {		
		alert("Disconnected!");
	});
}

function orient(){
	socketInit();
}

function disconncet(){
	socket.disconnect();
}

function showCount(){
}

var pins = [
    "5113", 
	"3268",
	"2917",
	"8460",
	"8508",
	"2427",
	"7497",
	"8030",
	"1887",
	"3695",
	"7203",
	"2486",
	"2641",
	"4051",
	"9422",
	"9336",
	"6034",
	"5586",
	"1095",
	"2098",
	"5159",
	"6491",
	"7107",
	"6343",
	"5779",
	"6875",
	"9431",
	"4654",
	"8331",
	"8160",
	"4971",
	"2274",
	"6138",
	"6575",
	"9602",
	"9951",
	"9496",
	"1035",
	"2278",
	"5078",
	"9140",
	"6258",
	"2880",
	"7772",
	"1096",
	"4303",
	"2516",
	"3484",
	"3200",
	"1986"
];

function keyDown()
{
	socket.emit('status','Key Down');
	socket.emit('status','Key Up');
}

function endConnection()
{

	socket.disconnect();
}

function endCall()
{
	socket.emit('status','Key Down');
	socket.emit('status','Key Up');
	socket.emit('status',document.getElementById("numpadtxt").value);
	document.getElementById("clickNow").innerHTML="Done! Thanks...";
	document.getElementById("testArea").innerHTML="<button type='button' class='btn btn-lg btn-danger' id='finish'>End</button>";
	socket.emit('status','Typing Ends');	
	document.getElementById('finish').addEventListener("click",function(event){
	    socket.emit('status','User Finishes');
		setTimeout(function(){endConnection();},1000);
	},true);
}

function nextPIN()
{
	if (count<50)
	{
	if (count == 0 && innerCount ==1)
	innerCount = 2;
	
		socket.emit('status','Key Down');
		socket.emit('status','Key Up');
		socket.emit('status',document.getElementById("numpadtxt").value);
		socket.emit('status','Typing Ends');
		document.getElementById("clickNow").innerHTML="PIN:"+pins[count];//+ "   "+ "No:" + innerCount;			
		
		document.getElementById("clickCounts").innerHTML=count+1;
		document.getElementById("rounds").innerHTML=innerCount;
		document.getElementById("numpadtxt").value="";
		document.getElementById("numpadtxt").focus();
		socket.emit('status','Typing Begins');
		socket.emit('status',pins[count]);
		if (innerCount<5)
			innerCount++;
		else
		{
			innerCount=1;
			count++;
		}
	}
	else
	{
		endCall();
	}
}


