function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
  
    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Mozzafiato";
  
    header.appendChild(restaurantName);
    header.appendChild(createNav());
  
    return header;
  }

function initHomePage(){
    const content = document.getElementById("content");

    content.appendChild(createHeader());
}

export { initHomePage};