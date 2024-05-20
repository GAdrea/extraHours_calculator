const startingTime = document.getElementById("starting-time");
const endingTime = document.getElementById("ending-time");
const actualEndingTime = document.getElementById("actual-ending-time");
const hoursForm = document.getElementById("hours-form");
const submitBtn = document.querySelector("button");
const workingHours = document.querySelector(".working-hours");
const result = document.querySelector(".result");
const comment = document.querySelector(".comment");

// hoursForm.addEventListener("submit", getTotalWorkingTime);

// function getTotalWorkingTime(event) {
//   event.preventDefault();
//   const startTime = startingTime.value;
//   const differenceInHours = actualEndingTime.value - startingTime.value;
//   workingHours.textContent = `Tu as bossé pendant ${differenceInHours} heures.`;
// }

/**
 * Fonction qui prend un string au format "HH:MM" et le convertit en minutes.
 * @param {string} time - le temps à convertir
 * @returns {number} - le temps en minutes
 */
function convertToMinutes(time) {
  // on récupère les heures et les minutes à partir du string
  const [hours, minutes] = time.split(":");
  // on convertit les heures en minutes
  const hoursInMinutes = parseInt(hours) * 60;
  // on ajoute les minutes
  const minutesInMinutes = parseInt(minutes);
  // on renvoie le résultat
  return hoursInMinutes + minutesInMinutes;
}

hoursForm.addEventListener("submit", getExtraHoursinMinutes);

function getExtraHoursinMinutes(event) {
  // on empêche le comportement par défaut du formulaire
  event.preventDefault();
  // on récupère le temps de fin de travail attendu
  const endTime = endingTime.value;
  // on récupère le temps de fin de travail réel
  const actualEndTime = actualEndingTime.value;
  // on convertit le temps de fin de travail attendu en minutes
  const endTimeInMinutes = convertToMinutes(endTime);
  // on convertit le temps de fin de travail réel en minutes
  const actualEndTimeInMinutes = convertToMinutes(actualEndTime);
  // on calcule la différence entre les deux
  const differenceInMinutes = actualEndTimeInMinutes - endTimeInMinutes;
  // on affiche le résultat
  result.textContent = `T'as fait ${differenceInMinutes} minutes d'heures supplémentaires. /  残業${differenceInMinutes}分  `;
  // si la différence est négative, on affiche un message d'erreur
  if (differenceInMinutes < 0) {
    setTimeout(() => {
      comment.textContent = `Tu te fous de moi ?! / ふざけんな！  `;
    }, 2000);
  } else if (differenceInMinutes <= 30) {
    // si la différence est inférieure ou égale à 30 minutes, on affiche un message de chance
    setTimeout(() => {
      comment.textContent = `T'as eu de la chance ! / ラッキーじゃないか！`;
    }, 2000);
  } else if (differenceInMinutes <= 60) {
    // si la différence est inférieure ou égale à 1 heure, on affiche un message de routine
    setTimeout(() => {
      comment.textContent = `Comme d'habitude hein? /  相変わらずだね `;
    }, 2000);
  } else if (differenceInMinutes <= 90) {
    // si la différence est inférieure ou égale à 1 heure et demi, on affiche un message de fatigue
    setTimeout(() => {
      comment.textContent = `Faudrait p'tet LEVER le pied ! /  やりすぎじゃない？ `;
    }, 2000);
  } else if (differenceInMinutes <= 120) {
    // si la différence est inférieure ou égale à 2 heures, on affiche un message de suffisance
    setTimeout(() => {
      comment.textContent = `Bon ça suffit maintenant ! / いい加減にしろ！ `;
    }, 2000);
  } else {
    // sinon, on affiche un message d'exasperation
    setTimeout(() => {
      comment.textContent = `Mais merde! Va dormir!! /  はやく寝ろ！クソバカやろう！！ `;
    }, 2000);
  }
}
