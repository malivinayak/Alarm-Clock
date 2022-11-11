const currentTime = document.querySelector("h1");
const buttons = document.querySelectorAll("button");
const setAlarmBtn = buttons[0];
const quickAlarm1 = buttons[1], quickAlarm2 = buttons[2], quickAlarm3 = buttons[3], quickAlarm4 = buttons[4];
const content = document.querySelector(".content");
const selectMenu = document.querySelectorAll("select");

let isAlarmSet = false;
let alarmTime;
let alarmTone = new Audio("./assets/sounds/ringtone.mp3");
let HH, MM, SS, AmPm;

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
    HH = date.getHours(), MM = date.getMinutes(), SS = date.getSeconds(), AmPm = "AM";

    if (HH >= 12) {
        HH = HH - 12;
        AmPm = "PM";
    }
    else AmPm = "AM";

    // If hour is zero then set it to 12
    HH = HH == 0 ? HH = 12 : HH;

    HH = HH < 10 ? "0" + HH : HH;
    MM = MM < 10 ? "0" + MM : MM;
    SS = SS < 10 ? "0" + SS : SS;

    time = `${HH}:${MM}:${SS} ${AmPm}`;
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

function setQuickAlarm1() {
    SS = Number(SS) + 10;
    SS = SS < 10 ? "0" + SS : SS;
    if (SS >= 60) {
        SS = SS - 60;
        MM = Number(MM) + 1;
        if (MM >= 60) {
            MM = MM - 60;
            HH = Number(HH) + 1;
            if (HH >= 12) {
                HH = HH % 12;
                HH = HH < 10 ? "0" + HH : HH;
                AmPm = "PM";
            }
        }
        SS = SS; MM = MM; HH = HH;
        MM = MM < 10 ? "0" + MM : MM;
        SS = SS < 10 ? "0" + SS : SS;
    }
    selectMenu[0].value = HH;
    selectMenu[1].value = MM;
    selectMenu[2].value = SS;
    selectMenu[3].value = AmPm;
    let time = `${HH}:${MM}:${SS} ${AmPm}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("Second") || time.includes("AM/PM") || time.includes(null)) {
        return alert("Please Select a valid Time");
    }
    alarmTime = time;
    content.classList.add("disable");
    setAlarmBtn.innerText = "Clear Alarm";
    isAlarmSet = true;
}

function setQuickAlarm2() {
    SS = Number(SS) + 30;
    SS = SS < 10 ? "0" + SS : SS;
    if (SS >= 60) {
        SS = SS - 60;
        MM = Number(MM) + 1;
        if (MM >= 60) {
            MM = MM - 60;
            HH = Number(HH) + 1;
            if (HH >= 12) {
                HH = HH % 12;
                HH = HH < 10 ? "0" + HH : HH;
                AmPm = "PM";
            }
        }
        SS = SS; MM = MM; HH = HH;
        MM = MM < 10 ? "0" + MM : MM;
        SS = SS < 10 ? "0" + SS : SS;
    }
    selectMenu[0].value = HH;
    selectMenu[1].value = MM;
    selectMenu[2].value = SS;
    selectMenu[3].value = AmPm;
    let time = `${HH}:${MM}:${SS} ${AmPm}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("Second") || time.includes("AM/PM") || time.includes(null)) {
        return alert("Please Select a valid Time");
    }
    alarmTime = time;
    content.classList.add("disable");
    setAlarmBtn.innerText = "Clear Alarm";
    isAlarmSet = true;
}

function setQuickAlarm3() {
    MM = Number(MM) + 1;
    MM = MM < 10 ? "0" + MM : MM;
    if (MM >= 60) {
        MM = MM - 60;
        HH = Number(HH) + 1;
        if (HH >= 12) {
            HH = HH % 12;
            HH = HH < 10 ? "0" + HH : HH;
            AmPm = "PM";
        }
        MM = MM < 10 ? "0" + MM : MM;
    }
    selectMenu[0].value = HH;
    selectMenu[1].value = MM;
    selectMenu[2].value = SS;
    selectMenu[3].value = AmPm;
    let time = `${HH}:${MM}:${SS} ${AmPm}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("Second") || time.includes("AM/PM") || time.includes(null)) {
        return alert("Please Select a valid Time");
    }
    alarmTime = time;
    content.classList.add("disable");
    setAlarmBtn.innerText = "Clear Alarm";
    isAlarmSet = true;
}

function setQuickAlarm4() {
    MM = Number(MM) + 5;
    MM = MM < 10 ? "0" + MM : MM;
    if (MM >= 60) {
        MM = MM - 60;
        HH = Number(HH) + 1;
        if (HH >= 12) {
            HH = HH % 12;
            HH = HH < 10 ? "0" + HH : HH;
            AmPm = "PM";
        }
        MM = MM < 10 ? "0" + MM : MM;
    }
    selectMenu[0].value = HH;
    selectMenu[1].value = MM;
    selectMenu[2].value = SS;
    selectMenu[3].value = AmPm;
    let time = `${HH}:${MM}:${SS} ${AmPm}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("Second") || time.includes("AM/PM") || time.includes(null)) {
        return alert("Please Select a valid Time");
    }
    alarmTime = time;
    content.classList.add("disable");
    setAlarmBtn.innerText = "Clear Alarm";
    isAlarmSet = true;
}
setAlarmBtn.addEventListener("click", setAlarm);
quickAlarm1.addEventListener("click", setQuickAlarm1);
quickAlarm2.addEventListener("click", setQuickAlarm2);
quickAlarm3.addEventListener("click", setQuickAlarm3);
quickAlarm4.addEventListener("click", setQuickAlarm4);