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

// ボタンがクリックされてmodal表示
headerButtonOpen.addEventListener('click', modalOpen);
function modalOpen() {
modal.style.display = 'block';
};
footerButtonOpen.addEventListener('click', modalOpen);
function modalOpen() {
modal.style.display = 'block';
};

// ボタンと×印が押されてmodal閉じる
buttonClose.addEventListener('click', modalClose);
function modalClose() {
modal.style.display = 'none';
};
buttonClose.addEventListener('click', modalLoad);
function modalLoad() {
load.style.display = 'block';
window.setTimeout(loadClose,3000);
window.setTimeout(loadAwesome,5000);
};


const loadClose=
function() {
load.style.display = 'none';
};
const loadAwesome=buttonClose.addEventListener('click', modalAwesome);
function modalAwesome() {
awesome.style.display = 'block';
};

// ×が押されて閉じる
button0.addEventListener('click', modalClose);
function modalClose() {
modal.style.display = 'none';
load.style.display='none';
awesome.style.display='none';
};
button1.addEventListener('click', modalClose);
function modalClose() {
modal.style.display = 'none';
load.style.display='none';
awesome.style.display='none';
};
button2.addEventListener('click', modalClose);
function modalClose() {
modal.style.display = 'none';
load.style.display='none';
awesome.style.display='none';
};

// モーダルコンテンツ以外がクリックされた時
addEventListener('click', outsideClose);
function outsideClose(e) {
if (e.target == modal) {
    modal.style.display = 'none';
}
};

twitterButton.addEventListener('click', tweet);
let twitterText=document.getElementById("postTwitter").value;
function tweet(){
    let twitter=document.getElementById("twitter");
    if(twitter.checked) {
    window.open("https://twitter.com/intent/tweet?text="+ twitterText);
    }
};

const learnData = document.getElementById('learnDate');
const flatpicker = flatpickr(learnData);

