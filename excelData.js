// Inclure la bibliothèque xlsx
import * as XLSX from "xlsx";

// Fonction pour consigner les résultats dans un fichier Excel
function saveResultsToExcel(totalWorkingHours, differenceInMinutes) {
  // Créer un nouveau classeur
  const workbook = XLSX.utils.book_new();

  // Créer une nouvelle feuille de calcul
  const worksheetData = [
    [
      "Date de début",
      "Heure de début",
      "Date de fin",
      "Heure de fin",
      "Heures travaillées",
      "Heures supplémentaires",
    ],
    [
      startingDate.value,
      startingTime.value,
      endingDate.value,
      endingTime.value,
      totalWorkingHours.toFixed(2),
      differenceInMinutes,
    ],
  ];
  const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

  // Ajouter la feuille de calcul au classeur
  XLSX.utils.book_append_sheet(workbook, worksheet, "Résultats");

  // Écrire le classeur dans un fichier
  XLSX.writeFile(workbook, "resultats.xlsx");
}
