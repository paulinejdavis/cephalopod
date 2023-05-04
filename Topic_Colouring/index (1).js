function newMessage(topicName) {
    // Write your code here
    //first select all "p" elements
    const pElements = document.querySelectorAll(`p[data-topic-name="${topicName}"]`);
    //iterate over p elements with forEach and set to red
    pElements.forEach(p => p.style.backgroundColor = 'red');
     
}
  
  // Example case
  document.body.innerHTML = `<div>
    <p data-topic-name="discussion">General discussion</p>
    <p data-topic-name="bugs">Bugs</p>
    <p data-topic-name="animals">Animals</p>
  </div>`;
  newMessage("discussion");
  console.log(document.body.innerHTML);