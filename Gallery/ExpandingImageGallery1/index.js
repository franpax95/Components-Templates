const options = document.getElementsByClassName("option");

for (let option of options) {
    option.addEventListener("click", function(e) {
        const active = document.querySelector(".option.active");
        if (active && active.id !== e.target.id) {
            active.classList.remove("active");
            e.target.classList.add("active");
        }
    });
}
