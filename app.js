let sum = 0;

const incre = document.querySelector(".incre");
const delet = document.querySelector(".delet");
const dec = document.querySelector(".dec");

incre.addEventListener("click", () => {
    sum++;
    document.querySelector("h1").textContent = sum;
});

dec.addEventListener("click", () => {
    if (sum > 0) { 

        sum--;
        
        document.querySelector("h1").textContent = sum;
    }
});

delet.addEventListener("click", () => {
    sum = 0;
    document.querySelector("h1").textContent = sum;
});
