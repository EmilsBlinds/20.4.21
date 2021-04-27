let list = [];

window.addEventListener('load', () => {
    list = JSON.parse(localStorage.getItem("list") || "[]");
    console.log(list)
    render();
});

let addbutton = document.getElementById('addbutton')
document.getElementById('addbutton').addEventListener('click', function(e){
    e.preventDefault();

    let item = {item: item.value};

    item.value = "";

    list.push(item)

    render()
});

function render() {
    let saraksts = document.getElementById('saraksts');
    saraksts.innerHTML = "";

    for(let i = 0; i < list.length; i++) {
        let item = `
        <div class="gramata">
            <h3>${list[i].item}</h3>
        </div>`;

        saraksts.innerHTML += item;
    }
    localStorage.setItem("list", JSON.stringify(list))
}