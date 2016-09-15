var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mapreduce_matches'); //데이터베이스에 연결합니다.

var Schema = mongoose.Schema;

var matchScheme = new Schema({
	scorers: Array,
	hometeam: String,
	awayteam: String
});

var matchModel = mongoose.model('Match', matchScheme); 

//경기 기록을 JSON 형태로 작성합니다.
var matchData = [
	{scorers: ["Van Persie", "Van Persie", "Ki Sung Yueng"], hometeam: "ManUtd", awayteam: "Swansea"},
	{scorers: ["Park Ji Sung", "Ki Sung Yueng"], hometeam: "QPR", awayteam: "Swansea"},
	{scorers: ["Van Persie", "Wayne Rooney", "Park Ji Sung"], hometeam: "ManUtd", awayteam: "QPR"},
	{scorers: ["Ki Sung Yueng", "Ki Sung Yueng"], hometeam: "Swansea", awayteam: "Chelsea"},
];

//모든 경기를 저장합니다.
for (var i=0; i < matchData.length; i++) {
	var match = new matchModel();
	
	match.scorers = matchData[i].scorers;
	match.hometeam = matchData[i].hometeam;
	match.awayteam = matchData[i].awayteam;

    console.log(i + ': ', match);

	match.save(function (err) {
		console.log(err);
		if (err) {
			console.log(err);
			throw err;
		}
	});
}

process.exit(1);