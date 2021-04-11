export default {
    chart: {
        renderTo: 'container',
        type: 'bar'
    },
    title: {
        text: 'jQuery Feedback'
    },
    xAxis: {
        categories: [
            "Infrastructure", 
            "Material", 
            "Trainer Knowledge", 
            "Hardware/Software", 
            "Food"
            ]
    },
    yAxis: {
        title: {
            text: 'Training Feedback'
        }
    },
    series: [{
        name: 'jQuery',
        data: []
    }]
};