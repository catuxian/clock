const now = new Date();
const valM = now.getMinutes(), valS = now.getSeconds(), valH = now.getHours();

const degS = valS * 6;
const degM = valM * 6 + valS * 0.1;
const degH = valH * 30 + valM * 0.5;
let kf=document.createElement('style');
kf.innerHTML = `
@keyframes js {
    from {transform: rotate(${degS}deg);}
    to {transform: rotate(${degS + 360}deg);}
}
@keyframes jm {
    from {transform: rotate(${degM}deg);}
    to {transform: rotate(${degS + 360}deg);}
}
@keyframes jh {
    from {transform: rotate(${degH}deg);}
    to {transform: rotate(${degH + 360}deg);}
}`;
document.querySelector("head").append(kf);// 在被選元素的結尾內容插入kf

