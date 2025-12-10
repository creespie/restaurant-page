export function menu(){
    const content = document.getElementById("content");
    content.innerHTML = "";
    
    const container   = document.createElement("div");
    content.appendChild(container);
    container.classList.add("container");
    
    const title = document.createElement("h2");
    title.innerHTML = "Here is our menu";
};
