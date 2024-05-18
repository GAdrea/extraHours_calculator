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
    comment.textContent = `Tu te fous de moi ?! / ふざけんな！`;
  } else if (differenceInMinutes <= 30) {
    comment.textContent = `T'as eu de la chance ! / ラッキーじゃないか！`;
  } else if (differenceInMinutes <= 60) {
    comment.textContent = `Comme d'habitude hein? / 相変わらずだね`;
  } else if (differenceInMinutes <= 90) {
    comment.textContent = `Faudrait p'tet lever le pied ! / やりすぎじゃない？`;
  } else if (differenceInMinutes <= 120) {
    comment.textContent = `Bon ça suffit maintenant ! / いい加減にしろ！`;
  } else {
    comment.textContent = `Mais merde! Va dormir!! / はやく寝ろ！クソバカヤロウ！`;
  }
}
