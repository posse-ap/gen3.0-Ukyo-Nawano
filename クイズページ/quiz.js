"use strict";

{
    const question = document.getElementById("quizQuiz");
    // const image=document.getElementsByClassName("quizMain")
    const choices = document.getElementsByClassName("quizAnswer");
    const note=document.getElementById
    // const answerResultF = document.getElementsByClassName("answerResult");
    // const answerResultT = document.getElementsByClassName("answerResultRight");
    
    let isAnswered;

    const quizSet = [{
        q:"日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？",
        // i:img.src="../img/img-quiz01.png",
        a: ["約28万人", "約79万人", "約183万人"],
        n:'経済産業省 2019年3月 － IT 人材需給に関する調査',
    },
    {
        q:"既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？",
        a: ["INTECH", "BIZZTECH", "X-TECH"],
        correctNumber: 2,
    },
];
let currentNum = 0;

// 画像表示
const image=[
    '../img/img-quiz01.png',
    '../img/img-quiz02.png',
    '../img/img-quiz03.png',
    '../img/img-quiz04.png',
    '../img/img-quiz05.png',
    '../img/img-quiz06.png',
];
let currentIndex=0;
const mainImage=document.getElementById('quizPicture');
mainImage.src=image[currentIndex];
// 正解表示
document.getElementById("answerResult").style.display ="none";
document.getElementById("answerResultRight").style.display ="none";
function checkAnswer(li){
    if(isAnswered===true){
        return;
    }
    isAnswered=true;
    if(li.textContent===quizSet[currentNum].a[1]){
        li.classList.add('correct');
        document.getElementById('answerResultRight').style.display="block";
        document.getElementById('correct').style.display="none";
    }else{
        li.classList.add('correct');
        document.getElementById('answerResult').style.display="block";

    }
}

function setQuiz(){
    isAnswered = false;
    question.textContent=quizSet[currentNum].q;

    

    quizSet[currentNum].a.forEach(choice=>{
        let li=document.createElement("li");
        li.textContent=choice;

        li.addEventListener("click",()=>{
            checkAnswer(li);
        })

        choices[currentNum].appendChild(li);
    });
}
setQuiz();



console.log(mainImage);
    // for (let currentNum = 0; currentNum < quizSet.length; currentNum++) {
    // Set(currentNum);
    // checkAnswer(currentNum);
    // }
}
