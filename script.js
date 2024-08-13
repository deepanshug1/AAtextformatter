document.getElementById("convertButton").addEventListener("click", function () {
  let inputText = document.getElementById("inputText").value;
  let convertedText = inputText.split(" | ").join("\n\n");
  document.getElementById("inputText").value = convertedText;
});
