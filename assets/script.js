const currentTime = document.querySelector("h1");
const setAlarmBtn = document.querySelector("button");
const content = document.querySelector(".content");
const selectMenu = document.querySelectorAll("select");

let isAlarmSet = false;
let alarmTime;
let alarmTone = new Audio("./assets/sounds/ringtone.mp3")

for (let i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[3].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
    let date = new Date();
    let time;
    let HH = date.getHours(), MM = date.getMinutes(), SS = date.getSeconds(), ampm;

    if (HH >= 12) {
        HH = HH - 12;
        ampm = "PM"
    }

    // If hour is zero then set it to 12
    HH = HH == 0 ? HH = 12 : HH;

    HH = HH < 10 ? "0" + HH : HH;
    MM = MM < 10 ? "0" + MM : MM;
    SS = SS < 10 ? "0" + SS : SS;

    time = `${HH}:${MM}:${SS} ${ampm}`;
    currentTime.innerHTML = (time);

    if (time == alarmTime) {
        isAlarmSet = true;
        alarmTone.play();
        alarmTone.loop = true;
    }

}, 1000);

function setAlarm() {

    if (isAlarmSet) {
        alarmTime = "";
        alarmTone.pause();
        setAlarmBtn.innerText = "Set Alarm";
        content.classList.remove("disable");
        isAlarmSet = false;
        return;
    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value} ${selectMenu[3].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("Second") || time.includes("AM/PM")) {
        return alert("Please Select a valid Time");
    }
    alarmTime = time;
    content.classList.add("disable");
    setAlarmBtn.innerText = "Clear Alarm";
    isAlarmSet = true;
}
setAlarmBtn.addEventListener("click", setAlarm);