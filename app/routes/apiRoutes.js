var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        var user = req.body;
        for(var i = 0; i < user.scores.length; i++){
            user.scores[i] = parseInt(user.scores[i]);
        }
        var bestFriendIndex = 0;
        var minDiff = 40;
        for(var i = 0; i < friends.length; i++){
            var totalDiff = 0;
            for(var j = 0; j < friends[i].scores.length; j++){
                var diff = Math.abs(user.scores[j] - friends[i].scores[j]);
                totalDiff += diff;
            }
            if(totalDiff < minDiff){
                bestFriendIndex = i;
                minDiff = totalDiff;
            }
        }
        friends.push(user);
        res.json(friends[bestFriendIndex]);
    });
}