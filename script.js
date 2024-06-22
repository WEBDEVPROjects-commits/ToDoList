
document.querySelector(".content").children[1].addEventListener("click", (e) => {
    var x = document.querySelector(".content").children[0].value
    var html = `<div class="task">
    <input type="checkbox" id="checkbox" >
    <p>${x}</p>
    <img src="bin.png" alt="image" class="bin-image">
    </div>`
    document.querySelector(".container").insertAdjacentHTML("beforeend", html)
    document.querySelector(".container").lastElementChild.children[2].addEventListener("click", (e) => {
        e.target.closest(".task").remove();
    }
    )
})
