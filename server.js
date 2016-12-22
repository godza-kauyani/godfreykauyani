var Twit = require('twit');
var options = require('./config.js')
var T = new Twit(options);
function  Twitter(){
	var params = {
		q:'#nodejs,#javascript,#css',
		result_type:'recent'
	};
	T.get('search/tweets',params,function (err,data){
		if(!err){

		var twitt = data.statuses[0].id_str;
		console.log(twitt);
		T.post('statuses/retweet/:id',{id:twitt},function(err,resp){
			if (resp){
				console.log(resp);
			}
		});
		}
		else{
			console.log('no tweet');
		
		}
	
	})
};
Twitter();

setInterval(retweet, 100000);

