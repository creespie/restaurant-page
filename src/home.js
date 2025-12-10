export function home(){
    const content = document.getElementById("content");
    content.innerHTML = "";
    
    const title = document.createElement("h2");
    title.innerHTML = "welcome to cooking with webpack";
    content.appendChild(title);

    const text1 = document.createElement("div");
    text1.innerHTML = "lorem irem etc";
    content.appendChild(text1);

    const text2 = document.createElement("div");
    text2.innerHTML = "this is an ethical restaurant!";
    content.appendChild(text2);

    const text3 = document.createElement("div");
    text3.innerHTML = "we only serve grass fed avocaodos dancing in the moonlight";
    content.appendChild(text3);

    const text4 = document.createElement("div");
    text4.innerHTML = "our only dessert appears to be iceland stones";
    content.appendChild(text4);
};
