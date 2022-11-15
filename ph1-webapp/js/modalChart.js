'use strict';

const type = 'doughnut';

const options = {
    cutoutPercentage: 40,
    legend: {
        display:false
        // position:'bottom'
    }
};

// 学習言語
const languageData = {
    labels: ['HTML','CSS', 'JavaScript','PHP','Laravel','SQL','SHELL','情報システム基礎知識'],
    datasets: [{
    data: [122, 53, 33,30,49,38,20,39],
    backgroundColor: ['#2222ff', '#3344ff','#4466ff','#5588ff','#6699ff','#77aaff','#88ccff','#99ddff','#aaeeff']
    }],
};

const languageChart = document.getElementById('languageChart').getContext('2d');
const lanChart = new Chart(languageChart, {
    type: type,
    data: languageData,
    options: options,
    }
);

// 学習コンテンツ
const subjectData = {
    labels: ['ドットインストール','N予備校', 'POSSE課題'
    ],
    datasets: [{
    data: [122, 53, 33],
    backgroundColor: ['#2222ff','#5588ff','#88ccff']
    }],
};
const subjectChart = document.getElementById('subjectChart').getContext('2d');
const subChart = new Chart(subjectChart, {
    type: type,
    data: subjectData,
    options: options
});