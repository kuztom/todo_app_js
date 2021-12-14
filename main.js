let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener("submit", addItem);
// Done event
itemList.addEventListener("click", doneItem);
// Delete event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);


// Add item function
function addItem(e) {
    e.preventDefault(); // prevent normal form submission

    // get input value
    let newItem = document.getElementById('item').value;

    // create new 'li' element
    let li = document.createElement("li");
    // add class
    li.className = 'list-group-item';

    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // create 'done' button element
    let doneBtn = document.createElement("button");
    doneBtn.className = 'btn btn-success btn-sm float-right done';
    doneBtn.appendChild(document.createTextNode('V'));

    // create 'delete' button element
    let deleteBtn = document.createElement("button");
    // add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to 'li'
    li.appendChild(deleteBtn);
    li.appendChild(doneBtn);

    // Append 'li' to 'itemList'
    itemList.appendChild(li);

    // clear input field
    document.getElementById('item').value = '';
}

// 'Done' task function
function doneItem(e) {
    if (e.target.classList.contains('done')) {
        if (confirm('Complete this task?')) {
            let li = e.target.parentElement;
            li.classList.add('text-muted', 'bg-light');
            // remove 'done' button if
            li.removeChild(li.childNodes[2]);
        }

    }
}

// Remove task function
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure, delete this?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter items
function filterItems(e) {
    // convert input to lowercase
    let text = e.target.value.toLowerCase();
    // get list
    let items = itemList.getElementsByTagName('li');
    // convert to array
    Array.from(items).forEach(function (item){
        let itemName = item.firstChild.textContent;
    // compare item name to search input
        if(itemName.toLowerCase().indexOf(text) !== -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
