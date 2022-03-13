var listDOM = document.querySelector("#list");
var text = document.querySelector("#textbox");
var select = document.querySelector("#selector");
var color = document.querySelector("#color");

// Açıklama satırı eklenecek.
// Description line will be added.

function button() {
    if (text.value == "") {
        alert("Lütfen boş bırakmayınız.")
    } else {
        if (select.value == "yazi") {
            var liDOM = document.createElement('li');

            if (color.value == "primary") {
                liDOM.classList = "list-group-item list-group-item-action list-group-item-primary"
            } else if (color.value == "secondary") {
                liDOM.classList = "list-group-item list-group-item-action list-group-item-secondary"
            } else if (color.value == "success") {
                liDOM.classList = "list-group-item list-group-item-action list-group-item-success"
            } else if (color.value == "danger") {
                liDOM.classList = "list-group-item list-group-item-action list-group-item-danger"
            } else if (color.value == "warning") {
                liDOM.classList = "list-group-item list-group-item-action list-group-item-warning"
            } else if (color.value == "info") {
                liDOM.classList = "list-group-item list-group-item-action list-group-item-info"
            }
            var bttn = document.createElement('button');
            var bttn = document.createElement('a');
            bttn.classList = "float-right btn border border-dark";
            bttn.innerHTML = `<span class="span">X</span>`
            bttn.style = "width: 10%;"
            liDOM.innerText = text.value;
            liDOM.appendChild(bttn);
            listDOM.append(liDOM);

        } else if (select.value == "kod") {
            var liDOM = document.createElement('li');

            if (color.value == "primary") {
                liDOM.classList = "list-group-item list-group-item-action list-group-item-primary"
            } else if (color.value == "secondary") {
                liDOM.classList = "list-group-item list-group-item-action list-group-item-secondary"
            } else if (color.value == "success") {
                liDOM.classList = "list-group-item list-group-item-action list-group-item-success"
            } else if (color.value == "danger") {
                liDOM.classList = "list-group-item list-group-item-action list-group-item-danger"
            } else if (color.value == "warning") {
                liDOM.classList = "list-group-item list-group-item-action list-group-item-warning"
            } else if (color.value == "info") {
                liDOM.classList = "list-group-item list-group-item-action list-group-item-info"
            }
            liDOM.style = "font-family: Monospace;"
            var bttn = document.createElement('button');
            var bttn = document.createElement('a');
            bttn.classList = "float-right btn border border-dark";
            bttn.innerHTML = `<span class="span">X</span>`
            bttn.style = "width: 10%;"
            liDOM.innerText = text.value;
            liDOM.appendChild(bttn);
            listDOM.append(liDOM);
        }
    }
    text.value = ""
}

listDOM.addEventListener('click', deleteItem);

function deleteItem(e) {

    if (e.target.className === "float-right btn border border-dark") {
        e.target.parentElement.remove()
    } else if (e.target.className === "span") {
        e.target.parentElement.parentElement.remove()
    }

}

function buttonDelete() {
    if (confirm("Tüm listeyi silmek istediğine emin misin?")) {
        while (listDOM.firstChild) {
            listDOM.firstChild.remove();
        }
    }
}