var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mapreduce_matches');

Schema = mongoose.Schema;

var matchScheme = new Schema({
	scorers: Array,
	hometeam: String,
	awayteam: String
});

mongoose.model('Match', matchScheme); 


var Match = mongoose.model('Match'); 

//map을 위한 함수 지정입니다.
var map = function () {
	this.scorers.forEach(function (element) {
		emit(element, { count: 1});
	});
};

//reduce를 위한 함수 지정입니다.
var reduce = function (key, values) {
	var total = 0;
	for (var i=0; i<values.length; i++) {
		total += values[i].count;
	}
	
	return { goal: total };
};

//mapreduce 처리를 위한 명령을 작성합니다.
var command = {
	mapreduce: "matches",
	map: map.toString(),
	reduce: reduce.toString(),
	out: "scorers"
};

//mongoose를 이용하여 실제 명령을 수행한다.
mongoose.connection.on('open', function() {
	mongoose.connection.db.executeDbCommand(command, function(err, dbres) {
		mongoose.connection.db.collection('scorers', function(err, collection) {
			//수행 결과를 정렬하여 출력합니다.
			collection.find({}).sort({"value":-1}).toArray(function (err, result) {
				if (err) {
					console.log(err);
				}
				else {
					console.log(result);
					
					process.exit(1);
				}
			});
		});
	});
});
