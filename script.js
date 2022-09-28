function ButtonClick(){
    let btnCar = document.getElementsByClassName('btn-car');
    let main = document.getElementById("main");
    btnCar.addEventListener("click",(e)=>{
        let item = document.createElement("div");
        let p = document.createElement("p");
        let img = document.createElement('img');
        p.innerText = "Test";
        img.src = "../web exam/pic.png";
        img.height = "400px";
        img.width = "600px";
        main.append(img);
        item.append(p);
    });
}
addEventListener('DOMContentLoaded',ButtonClick)