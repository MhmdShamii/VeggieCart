const items = [
  {
    id: 1,
    img: "./rec/watermeloen.jpg",
    name: "Watermeloen",
    disc: "fresh out of the farm watermeloens",
    instock: true,
    price: 5,
    unit: "$/kg",
  },
  {
    id: 2,
    img: "./rec/strawberry.webp",
    name: "strawberry",
    disc: "fresh out of the farm strawberry",
    instock: true,
    price: 2,
    unit: "$/kg",
  },
  {
    id: 3,
    img: "./rec/Carrot.jpg",
    name: "Carrot",
    disc: "fresh out of the farm Carrot",
    instock: true,
    price: 0.5,
    unit: "$/kg",
  },
  {
    id: 4,
    img: "./rec/GrapesGreen.jpg",
    name: "GrapesGreen",
    disc: "fresh out of the farm GrapesGreen",
    instock: true,
    price: 0.5,
    unit: "$/kg",
  },
  {
    id: 5,
    img: "./rec/fig.jpg",
    name: "Fig",
    disc: "fresh out of the farm Fig",
    instock: true,
    price: 0.5,
    unit: "$/kg",
  },
  {
    id: 6,
    img: "./rec/potato.jpg",
    name: "Potato",
    disc: "fresh out of Bikaa Potato",
    instock: true,
    price: 1.5,
    unit: "$/kg",
  },
  {
    id: 7,
    img: "./rec/cherries.jpg",
    name: "Cherry",
    disc: "fresh out of farm Cherry",
    instock: true,
    price: 1,
    unit: "$/kg",
  },
  {
    id: 8,
    img: "./rec/jenerek.webp",
    name: "Jenerek",
    disc: "fresh out of farm Jenerek",
    instock: true,
    price: 5,
    unit: "$/kg",
  },
];

function renderProducts(productsArray) {
  const itemList = document.querySelector(".itemList");
  itemList.innerHTML = "";

  productsArray.forEach((product) => {
    let quantity = 1;
    function increment() {
      quantity++;
    }

    if (product.instock) {
      const item = document.createElement("li");
      item.className = "item";
      item.dataset.id = product.id;

      item.innerHTML = `
        <img src="${product.img}" alt="${product.name}" />
        <div class="info">
        <div class="head">
        <p class="name">${product.name}</p>
        <p class="dis">${product.disc}</p>
        <p class="price">${product.price} <span class="unit">${
        product.unit
      }</span></p>
        </div>
        <div class="quantity-controls">
        <button class="quantity-btn minus">
        <i class="fas fa-minus"></i>
        </button>
        <span class="quantity">${quantity}</span>
        <button class="quantity-btn plus" onclick="${increment()}">
        <i class="fas fa-plus"></i>
        </button>
        <button class="add-to-cart">
        <i class="fas fa-cart-plus"></i>
        </button>
        </div>
        
        </div>
        `;

      itemList.appendChild(item);
    }
  });
}

renderProducts(items);
