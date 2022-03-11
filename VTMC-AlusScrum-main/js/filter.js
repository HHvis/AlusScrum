const filters = document.querySelector("#filters");

filters.addEventListener("input", filterGoods);

function filterGoods() {
  const country = filters.querySelector("#country").value,
    sizes = [...filters.querySelectorAll("#abv input:checked")].map(
      (n) => n.value
    ),
    priceMin = document.querySelector("#price-min").value,
    priceMax = document.querySelector("#price-max").value;

  outputGoods(
    DATA.filter(
      (n) =>
        (!country || n.country === country) &&
        (!sizes.length || sizes.includes(n.abv)) &&
        (!priceMin || priceMin <= n.cost) &&
        (!priceMax || priceMax >= n.cost)
    )
  );
}

function outputGoods(goods) {
  document.getElementById("goods").innerHTML = goods
    .map(
      (n) => `
    <div class="single-goods" style="width: 33%;float: left;">
    <div class="mb-3">
      <div class="text-start">
      <h3 class"py-2 font-bold">${n.name}</h3>
      <img src="${n.image}" class="img-thumbnail mx-auto">
      <p class="font-bold">Šalis: ${n.country}</p>
      <p class="font-bold">Alkoholio vienetai: ${n.abv}%</p>
      <p class="font-bold">Kaina: ${n.cost}$</p>
      
      <div class="overflow-hidden text-center flex justify-center p-6">
      <a href="produktu.html#${n.name}" class="btn ">Daugiau</a>
      <a href="#" id="alus1_krepselis" class="btn">Į krepšelį</a>
</div>
      </div>
      </div>
    </div>
  `
    )
    .join("");
}

const DATA = [
  {
    name: "alus1",
    cost: 2.99,
    country: "Lietuva",
    image: "images/beer1.png",
    abv: "5.4"
  },
  {
    name: "alus2",
    cost: 1.99,
    country: "Belgija",
    image: "images/beer2.png",
    abv: "0.0"
  },
  {
    name: "alus3",
    cost: 12.59,
    country: "Lenkija",
    image: "images/beer3.png",
    abv: "6.5"
  }
];

outputGoods(DATA);