const fruitForm = document.querySelector("#inputSection form");
const fruitList = document.querySelector('#fruitSection ul');

fruitForm.addEventListener("submit", extractFruit);

function extractFruit(e) {
    e.preventDefault();
    let fruitInput = e.target.fruitInput.value;
    if(fruitInput) {
        addFruit(fruitInput);
    }
    e.target.reset();
};

function addFruit(fruit) {
    //create list item
    const li = document.createElement('li');

    //assign text to list item
    li.textContent = fruit; 

    li.addEventListener('click', removeFruit, {once: true});

    //append list item to the HTML list
    fruitList.appendChild(li);

}

function removeFruit(e) {
    console.log(e)
    e.target.remove();
}