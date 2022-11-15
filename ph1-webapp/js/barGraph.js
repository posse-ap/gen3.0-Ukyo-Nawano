// 棒グラフ
'use strict';

const ctx = document.getElementById('barGraph');

const data = {
    labels: ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15",
    "16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
    datasets: [{
        data: [0,2,8,1,2,3,4,5,6,7,1,2,3,4,7,2,7,4,3,3,4,5,8,3,5,3,2,4,1,7,3,0,9,10],
        backgroundColor:['#2222ff','#88ccff','#2222ff','#88ccff','#2222ff','#88ccff','#2222ff','#88ccff','#2222ff','#88ccff','#2222ff','#88ccff','#2222ff','#88ccff',
        '#2222ff','#88ccff','#2222ff','#88ccff','#2222ff','#88ccff','#2222ff','#88ccff','#2222ff','#88ccff','#2222ff','#88ccff','#2222ff','#88ccff','#2222ff','#88ccff','#2222ff','#88ccff']
    }],
};

const option = {
    scales: {
        xAxes:[
            {
            gridLines:{
                display:false
            },
            ticks:{
                min:"0",
                max: "30",
                minRotation: 0, 
                maxRotation: 0,
                maxTicksLimit: 15
            }
        }
        ],
        yAxes:[
            {
                scaleLabel:{
                    labelString:["0h"]
                },
                gridLines:{
                    display:false
                },
                ticks: {
                    callback: function(value) {
                        return value + 'h';
                    },
                    stepSize:2
            }
        }
    ]
    },
    legend: {
        display: false
    }
};

const exChart = new Chart(ctx, {
    type: 'bar',
    data: data ,
    options: option
});