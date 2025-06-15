const container = document.querySelector(".container")

for (let i = 0; i < 16; i++){
    for (let j = 0; j < 16; j++){
        const div = document.createElement("div");

        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = 'lightblue';
        });

        container.appendChild(div);
    }
}



const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    const gridDiv = document.querySelector(".container div")
    const style = getComputedStyle(gridDiv);
    let divsize = parseInt(style.width);

    container.innerHTML = '';

    let p = prompt("Enter the side size of the new grid. Must not exceed 30")
    while (parseInt(p) > 30) {
        p = prompt("The side size must not exceed 30. Try again with something smaller.")
    }

    container.style.width = `${(divsize + 2) * parseInt(p)}px`;
    for (let i = 0; i < parseInt(p); i++){
        for (let j = 0; j < parseInt(p); j++){
            const div = document.createElement("div");

            div.addEventListener('mouseenter', () => {
                div.style.backgroundColor = 'lightblue';
            });

            container.appendChild(div);
        }
    }
})