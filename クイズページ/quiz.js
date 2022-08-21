"use strict";

{
    const question = document.getElementById("quizQuiz");
    const mainImage=document.getElementById('quizPicture');
    // const image=document.getElementsByClassName("quizMain")
    const choices = document.getElementsByClassName("quizAnswer");
    const note=document.getElementById("quizCite");
    // const answerResultF = document.getElementsByClassName("answerResult");
    // const answerResultT = document.getElementsByClassName("answerResultRight");
    
    let isAnswered;

    const quizSet = [{
        quizNumber:0,
        q:"日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？",
        image:"../img/img-quiz01.png",
        a: ["約28万人", "約79万人", "約183万人"],
        n:'経済産業省 2019年3月 － IT 人材需給に関する調査',
    },
    {
        quizNumber:1,
        q:"既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？",
        image:"../img/img-quiz02.png",
        a: ["INTECH", "BIZZTECH", "X-TECH"],
        
    },
    {
        quizNumber:2,
        q:"lotとは何の略でしょう？",
        image:"../img/img-quiz03.png",
        a:["Internat of Things", "Integrate into Technology","Information om Tool"],
    },
    {
        quizNumber:3,
        q:"日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？",
        image:"../img/img-quiz04.png",
        a:["Society5.0","CyPhy","SDGs"],
        n:"Society5.0-科学技術政策-内閣府",
    },
    {
        quizNumber:4,
        q:"イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？",
        image:"../img/img-quiz05.png",
        a:["Web3.0","NFT","メタバース"],
    },
    {
        quizNumber:5,
        q:"先進テクノロジー活用企業と出遅れた企業の収益の差はどれくらいあると言われているでしょう？",
        image:"../img/img-quiz06.png",
        a:["約2倍","約5倍","約11倍"],
        n:"Accenture Technology Vision 2021",
    }
];
let currentNum = 0;


// 画像表示
// const image=[
//     '../img/img-quiz01.png',
//     '../img/img-quiz02.png',
//     '../img/img-quiz03.png',
//     '../img/img-quiz04.png',
//     '../img/img-quiz05.png',
//     '../img/img-quiz06.png',
// ];
// let currentIndex=0;
// const mainImage=document.getElementById('quizPicture');
// mainImage.src=image[currentIndex];
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
        // document.getElementById('correct').style.display="none";
    }else{
        li.classList.add('correct');
        document.getElementById('answerResult').style.display="block";

    }
}

function setQuiz(){
    isAnswered = false;
    question.textContent=quizSet[currentNum].q;

    let currentIndex=0;
    const mainImage=document.getElementById('quizPicture');
    mainImage.src=quizSet[currentIndex].image;

    note.textContent=quizSet[currentNum].n;

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

for(let i=0; i<1; i++){
    setQuiz(i);}

// function createQuiz(){
//     const quizBlock= document.getElementById('quizOne');
//     const quizHtml=`<div class="`
// }

// const createQuizHtml = (quizItem, questionNumber) => {
//     let answersHtml = '';
// }
// setQuiz.forEach
// for(let i = 0; i <=1 ;i++) {
//     setQuiz(i);
    
// };



console.log(setQuiz);
    // for (let currentNum = 0; currentNum < quizSet.length; currentNum++) {
    // Set(currentNum);
    // checkAnswer(currentNum);
    // }
}
