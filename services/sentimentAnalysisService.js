var Sentiment = require('sentiment');
var sentiment = new Sentiment();

module.exports = comment => {
        const res  = sentiment.analyze(comment);
        console.log(`[Analysis] ${comment}`, res);
        return res;
}
