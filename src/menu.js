export function menu(){
    const content = document.getElementById("content");
    content.innerHTML = "";
    
    const title = document.createElement("h1");
    title.innerHTML = "Our menu!";
    content.appendChild(title);

    const firstPlate = document.createElement("h3");
    firstPlate.innerHTML = "Dancing avocado";
    content.appendChild(firstPlate);
    const text1 = document.createElement("div");
    text1.innerHTML = "a fabolous plate featuring a dancing blue dressed avocado!";
    content.appendChild(text1);

    const secondPlate = document.createElement("h3");
    secondPlate.innerHTML = "Iceland stones";
    content.appendChild(secondPlate);
    const text2 = document.createElement("div");
    text2.innerHTML = "tasty iceland stones retrieved in australia!";
    content.appendChild(text2);

};
