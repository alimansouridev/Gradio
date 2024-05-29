// Variables globales
var numberOfNotes = 0;
// Les valeurs associées à chaque note
var gradeValues = {
  "A+": 100,
  A: 92,
  "A-": 84,
  "B+": 78,
  B: 75,
  "B-": 71,
  "C+": 68,
  C: 65,
  "C-": 61,
  "D+": 58,
  D: 55,
  "D-": 51,
  "Echec (Retake 1)": 40,
  "Echec (Retake 2)": 25,
  "Echec (Retake 3)": 0,
};

// Fonction pour ajouter une nouvelle note
function addGradeInput() {
  var gradeInputs = document.getElementById("gradeInputs");
  var newGradeInput = document.createElement("div");
  newGradeInput.className = "gradeInput";

  var newLabel = document.createElement("label");
  var newSelect = document.createElement("select");
  var newRemoveButton = document.createElement("button");

  var grades = Object.keys(gradeValues);

  newLabel.textContent = "Note " + (numberOfNotes + 1) + " :";
  newSelect.className = "gradeSelect";
  newSelect.name = "grade" + (numberOfNotes + 1);

  // Ajout des options de notes au sélecteur
  grades.forEach(function (grade) {
    var option = document.createElement("option");
    option.value = grade;
    option.textContent = grade;
    newSelect.appendChild(option);
  });

  newRemoveButton.textContent = "Supprimer cette note";
  newRemoveButton.onclick = function () {
    removeGradeInput(newGradeInput);
  };

  // Ajout des éléments créés au conteneur des notes
  newGradeInput.appendChild(newLabel);
  newGradeInput.appendChild(newSelect);
  newGradeInput.appendChild(newRemoveButton);
  gradeInputs.appendChild(newGradeInput);

  numberOfNotes++;
  document.getElementById("result").innerHTML = ""; // Effacer le résultat précédent
  console.log("Nombre de notes : " + numberOfNotes);
}

// Fonction pour supprimer une note
function removeGradeInput(gradeInput) {
  gradeInput.parentNode.removeChild(gradeInput);
  numberOfNotes--;
  document.getElementById("result").innerHTML = ""; // Effacer le résultat précédent
  console.log("Nombre de notes : " + numberOfNotes);
}

// Fonction pour calculer la moyenne
function calculateAverage() {
  var gradeSelects = document.querySelectorAll(".gradeSelect");

  var total = 0;
  var count = 0;

  // Parcours de chaque sélecteur de note
  gradeSelects.forEach(function (gradeSelect, index) {
    var grade = gradeSelect.options[gradeSelect.selectedIndex].value;
    console.log("Note " + (index + 1) + " : " + grade);

    // Vérification si la note est définie dans les valeurs associées
    if (gradeValues.hasOwnProperty(grade)) {
      var gradeValue = gradeValues[grade];
      console.log("Valeur de la note : " + gradeValue);
      total += gradeValue;
      count++;
    } else {
      console.log("Valeur de la note non trouvée");
    }
  });

  console.log("Total : " + total);
  console.log("Nombre de notes : " + count);

  // Affichage du résultat
  if (count > 0) {
    var average = total / count;
    document.getElementById("result").innerHTML =
      "Votre moyenne est : " + average.toFixed(2) + "%";
  } else {
    document.getElementById("result").innerHTML =
      "Veuillez sélectionner au moins une note.";
  }
}
