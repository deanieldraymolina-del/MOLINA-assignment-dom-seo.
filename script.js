
function changeText() {
  document.getElementById("myParagraph").innerText =
    "Art lets me see the world from a different perspective!";
}

function addListItem() {
  let newItem = document.createElement("li");
  newItem.innerText = "It helps me deepen my understanding and learn from Art and perspectives.";
  document.getElementById("myList").appendChild(newItem);
}


function removeElement() {
  let list = document.getElementById("myList");
  if (list.lastChild) {
    list.removeChild(list.lastChild); 
  } else {
    let para = document.getElementById("myArt");
    if (para) para.remove(); 
  }
}
