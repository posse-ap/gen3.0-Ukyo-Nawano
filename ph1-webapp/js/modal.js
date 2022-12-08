"use strict";

const headerButtonOpen = document.getElementById('postHeaderButton');
const footerButtonOpen = document.getElementById('postFooterButton');
const modal = document.getElementById('modalMain');
const buttonClose = document.getElementsByClassName('modalPostButton')[0];
const button0=document.getElementsByClassName('close')[0];
const button1=document.getElementsByClassName('close')[1];
const button2=document.getElementsByClassName('close')[2];
const closeAwesome=document.getElementsByClassName('closeAwesome');
const twitterButton=document.getElementById('modalButton');
const load=document.getElementById('modalLoad');
const awesome=document.getElementById('modalAwesome');
const modalOverlay=document.getElementById('modalOverlay');

// ボタンがクリックされてmodalとoverlay表示
headerButtonOpen.addEventListener('click', modalOpen);
footerButtonOpen.addEventListener('click', modalOpen);
function modalOpen() {
    modal.style.display = 'block';
    modalOverlay.style.display='block'
    modal.classList.add('active')
    modal.classList.remove('nonactive')
    load.classList.remove('nonactiveLoad')
    awesome.classList.remove('nonactive')
};

// modal,load,awesome画面を閉じる
function modalNone(){
    modal.style.display='none';
    awesome.style.display='none';
};
function loadClose() {
    load.style.display = 'none';
};

// ボタンが押されてmodal閉じる
// 完了画面を表示する
buttonClose.addEventListener('click', modalLoad);
function modalLoad() {
    modal.style.display='none';
    load.style.display = 'block';
    awesome.style.display='block';
    modalOverlay.style.display='block';
    modal.classList.remove('nonactive');
    window.setTimeout(loadClose,3000);
};

// ×が押されて閉じる
// モーダルコンテンツ以外がクリックされて閉じる
button0.addEventListener('click', modalClose);
button1.addEventListener('click', modalClose);
modalOverlay.addEventListener('click',modalClose);
button2.addEventListener('click', modalClose);
function modalClose() {
    modalOverlay.style.display='none';
    modal.classList.add('nonactive')
    modal.classList.remove('active')
    load.classList.add('nonactiveLoad')
    awesome.classList.add('nonactive')
    setTimeout(modalNone,700)
    setTimeout(loadClose,3000)
};

// twitterに投稿する
twitterButton.addEventListener('click', tweet);
let twitterText=document.getElementById("postTwitter").value;
function tweet(){
    let twitter=document.getElementById("twitter");
    if(twitter.checked) {
    window.open("https://twitter.com/intent/tweet?text="+ twitterText);
    }
};

// カレンダー
const learnData = document.getElementById('learnDate');
const flatpicker = flatpickr(learnData);
