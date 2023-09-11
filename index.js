import analyzer from './analyzer.js';

const userInput = document.querySelector("textarea");
const wordCountResult = document.querySelector("[data-testid='word-count']");
const characterCountResult = document.querySelector("[data-testid='character-count']");
const characterNoSpacesCountResult = document.querySelector("[data-testid='character-no-spaces-count']");
const numberCountResult = document.querySelector("[data-testid='number-count']");
const numberSumResult = document.querySelector("[data-testid='number-sum']");
const wordLengthAverageResult = document.querySelector("[data-testid='word-length-average']");
const resetButton = document.getElementById("reset-button");

function updateResults() {
  const text = userInput.value;
  wordCountResult.textContent = `Recuento de palabras: ${analyzer.getWordCount(text)}`;
  characterCountResult.textContent = `Recuento de caracteres: ${analyzer.getCharacterCount(text)}`;
  characterNoSpacesCountResult.textContent = `Recuento de caracteres (sin espacios ni puntuación): ${analyzer.getCharacterCountExcludingSpaces(text)}`;
  numberCountResult.textContent = `Recuento de números: ${analyzer.getNumberCount(text)}`;
  numberSumResult.textContent = `Suma total de números: ${analyzer.getNumberSum(text)}`;
  wordLengthAverageResult.textContent = `Longitud media de palabras: ${analyzer.getAverageWordLength(text)}`;
}

userInput.addEventListener("keyup", updateResults);
resetButton.addEventListener("click", function() {
  userInput.value = "";
  updateResults();
});
