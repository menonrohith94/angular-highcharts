const express = require('express');

const bodyParser = require('body-parser');
const feedbackObj = require('./web-api/feedback-api');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
//Web API Routes
app.get('/api/feedbacks', (req, res) => {
    let technology = req.params.technology;
    let promise = feedbackObj.fetchAllFeedbacks();

    promise.then((data) => {
        console.log(data);
        res.json(data);
    }, (reason) => {
        res.send(reason);
    });
});
app.get('/api/avgfeedbacks/:technology', (req, res) => {
    let technology = req.params.technology;
    let promise = feedbackObj.fetchAverageFeedback(technology);

    promise.then((data) => {
        console.log(data);
        res.json(data);
    }, (reason) => {
        res.send(reason);
    });
});
app.listen(9090, () => console.log('Server started at Port : 9090'));