function highlightSelection() {
  var userSelection = window.getSelection().getRangeAt(0);
  highlightRange(userSelection);

}

function highlightRange(range) {
  var newNode = document.createElement("div");
  newNode.setAttribute(
     "style",
     "background-color: yellow; display: inline;"
  );
  range.surroundContents(newNode);
}