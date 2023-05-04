function setup() {
    // Write your code here.
    //selects and iterates over array
    const removeThatButton = document.getElementsByClassName("remove");
    for (let i = 0; i < removeThatButton.length; i++) {
        removeThatButton[i].addEventListener("click", function(event) {
        event.target.parentNode.remove();
        });
    }
}

  
  
  // Example case.
  document.body.innerHTML = `
  <div class="image">
    <img src="https://bit.ly/3lmYVna" alt="First">
    <button class="remove">X</button>
  </div>
  <div class="image">
    <img src="https://bit.ly/3flyaMj" alt="Second">
    <button class="remove">X</button>
  </div>`;
  
  setup();
  
  document.getElementsByClassName("remove")[0].click();
  console.log(document.body.innerHTML);