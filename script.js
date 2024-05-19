const endingTime = document.getElementById("ending-time");
const actualEndingTime = document.getElementById("actual-ending-time");
const hoursForm = document.getElementById("hours-form");
const submitBtn = document.querySelector("button");
const result = document.querySelector(".result");
const comment = document.querySelector(".comment");

function convertToMinutes(time) {
  const [hours, minutes] = time.split(":");
  return parseInt(hours) * 60 + parseInt(minutes);
}

hoursForm.addEventListener("submit", getExtraHoursinMinutes);

function getExtraHoursinMinutes(event) {
  event.preventDefault();
  const endTime = endingTime.value;
  const actualEndTime = actualEndingTime.value;
  const endTimeInMinutes = convertToMinutes(endTime);
  const actualEndTimeInMinutes = convertToMinutes(actualEndTime);
  const differenceInMinutes = actualEndTimeInMinutes - endTimeInMinutes;
  result.textContent = `T'as fait ${differenceInMinutes} minutes d'heures supplémentaires. / 残業 ${differenceInMinutes} 分`;
  if (differenceInMinutes < 0) {
    setTimeout(() => {
      comment.textContent = `Tu te fous de moi ?! / ふざけんな！`;
    }, 2000);
  } else if (differenceInMinutes <= 30) {
    setTimeout(() => {
      comment.textContent = `T'as eu de la chance ! / ラッキーじゃないか！`;
    }, 2000);
  } else if (differenceInMinutes <= 60) {
    setTimeout(() => {
      comment.textContent = `Comme d'habitude hein? / 相変わらずだね`;
    }, 2000);
  } else if (differenceInMinutes <= 90) {
    setTimeout(() => {
      comment.textContent = `Faudrait p'tet lever le pied ! / やりすぎじゃない？`;
    }, 2000);
  } else if (differenceInMinutes <= 120) {
    setTimeout(() => {
      comment.textContent = `Bon ça suffit maintenant ! / いい加減にしろ！`;
    }, 2000);
  } else {
    setTimeout(() => {
      comment.textContent = `Mais merde! Va dormir!! / はやく寝ろ！クソバカヤロウ！`;
    }, 2000);
  }
}
