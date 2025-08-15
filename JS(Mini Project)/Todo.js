let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let dlebtn = document.createElement("button");
  dlebtn.innerText = "delete";
  dlebtn.classList.add("delete");
  
  item.appendChild(dlebtn);
  console.log("Item Added");
  ul.appendChild(item);
  inp.value = "";
});

ul.addEventListener("click", function(event) {
  if(event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("Item Deleted");
  }
})
