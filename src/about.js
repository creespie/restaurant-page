export function about(){
    const content = document.getElementById("content");
    content.innerHTML = "";
    
    const title = document.createElement("h1");
    title.innerHTML = "we are located in Paris, west Virginia";
    content.appendChild(title);

    const text1 = document.createElement("div");
    text1.innerHTML = "come pay us a fast visit!";
    content.appendChild(text1);

    const text2 = document.createElement("div");
    text2.innerHTML = "you can reserve a dive with our instructors at amazon.com!";
    content.appendChild(text2);

    const text3 = document.createElement("div");
    text3.innerHTML = "we expect to see you soon!";
    content.appendChild(text3);
};
