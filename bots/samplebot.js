var SampleBot = function() {};

SampleBot.prototype = new Bot("Sample");

SampleBot.prototype.setup = function() {};

SampleBot.prototype.run = function() {};

var samplebot = new SampleBot();

registerBot(samplebot);