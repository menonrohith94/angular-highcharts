const mongojs = require('mongojs');
const db = mongojs('highcharts-angular', ['feedbacks']);

class Feedback {
    constructor() {

    }
    fetchAllFeedbacks() {
        return new Promise((resolve, reject) => {
            db.feedbacks.distinct("training",{},(err, docs) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(docs);
                }
            });
        });
    }
    fetchAverageFeedback(technology) {
        return new Promise((resolve, reject) => {
            db.feedbacks.find({ "training": technology }, (err, docs) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(docs);
                }
            });
        });
    }
}
module.exports = new Feedback();