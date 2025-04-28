const slider = document.querySelector(".slider_divider");
const slider_button_left = document.querySelector(".slider_button_left");
const slider_button_right = document.querySelector(".slider_button_right");

const images = [ 'airmax3.webp', 'airmax6.jpg', 'airmax7.jpeg'];
let index = 0;
let intervalId; // interval idarəsi üçün

function moveSlider() {
  if (index < images.length - 1) {
    index++;
  } else {
    index = 0;
  }
  slider.style.backgroundImage = `url(./public/${images[index]})`;
}

// Interval başlatmaq üçün funksiya
function startSlider() {
  intervalId = setInterval(moveSlider, 5000); // 5 saniyə
}

// Interval dayandırmaq üçün funksiya
function stopSlider() {
  clearInterval(intervalId);
}

// Sağ düyməyə klik
slider_button_right.addEventListener("click", () => {
  stopSlider(); // intervalı dayandırırıq
  moveSlider(); // şəkili dəyişirik
});

// Sol düyməyə klik
slider_button_left.addEventListener("click", () => {
  stopSlider(); // intervalı dayandırırıq
  if (index > 0) {
    index--;
  } else {
    index = images.length - 1;
  }
  slider.style.backgroundImage = `url(./public/${images[index]})`;
});

// Mouse ilə şəkilə toxunanda (hover) slider dayansın
slider.addEventListener("mouseenter", stopSlider);

// Mouse şəkildən çıxanda slider yenidən başlasın
slider.addEventListener("mouseleave", startSlider);

// İlk açılışda slider başlasın
startSlider();


const main_divider = document.querySelector(".main_section");
const main_title = document.createElement("div");
main_title.classList.add("main_title");
main_divider.appendChild(main_title);

const header_text_catalog = document.querySelector(".main_section");
const header_text = document.createElement("h2");
header_text.classList.add("header_text_catalog");
header_text.textContent = "Каталог";
main_title.appendChild(header_text);

const catalog_divider_main = document.querySelector(".main_title");
const catalog_divider = document.createElement("div");
catalog_divider.classList.add("catalog_divider");
main_title.appendChild(catalog_divider);

const catalog_divider_h3 = document.querySelector(".catalog_divider");
const catalog_divider_h3_title = document.createElement("h3");
catalog_divider_h3_title.classList.add("catalog_divider_h3");
catalog_divider_h3_title.innerHTML = "Подбор <br>по параметрам";
catalog_divider.appendChild(catalog_divider_h3_title);

const catalog_divider_1 = document.querySelector(".catalog_divider");
const catalog_divider_1_title = document.createElement("p");
catalog_divider_1_title.classList.add("catalog_divider_p");
catalog_divider_1_title.innerHTML = "Цена, руб";
catalog_divider_1.appendChild(catalog_divider_1_title);

const catalog_divider_3 = document.querySelector(".catalog_divider");
const catalog_divider_3_title = document.createElement("div");
catalog_divider_3_title.classList.add("catalog_divider_div");
catalog_divider_3.appendChild(catalog_divider_3_title);

const catalog_divider_4 = document.querySelector(".catalog_divider_div");
const catalog_divider_4_title = document.createElement("input");
catalog_divider_4_title.classList.add("catalog_divider_input");
catalog_divider_4_title.setAttribute("type", "number");
catalog_divider_4.appendChild(catalog_divider_4_title);

const catalog_divider_4_2 = document.querySelector(".catalog_divider_div");
const catalog_divider_4_2_title = document.createElement("div");
catalog_divider_4_2_title.classList.add("catalog_divider_input_div");
catalog_divider_4_2.appendChild(catalog_divider_4_2_title);

const catalog_divider_5 = document.querySelector(".catalog_divider_div");
const catalog_divider_5_title = document.createElement("input");
catalog_divider_5_title.classList.add("catalog_divider_input_2");
catalog_divider_5_title.setAttribute("type", "number");
catalog_divider_5.appendChild(catalog_divider_5_title);

const catalog_divider_input = document.querySelector(".catalog_divider_div");
let input_number = "1850";
let input_number_2 = "25768";
if (input_number && input_number_2) {
  catalog_divider_4_title.value = input_number;
  catalog_divider_5_title.value = input_number_2;
}

const catalog_divider_5_2_3 = document.querySelector(".catalog_divider");
const catalog_divider_5_2_3_title = document.createElement("div");
catalog_divider_5_2_3_title.classList.add("catalog_divider_input_div_2");
catalog_divider_5_2_3.appendChild(catalog_divider_5_2_3_title);

const catalog_divider_5_2 = document.querySelector(
  ".catalog_divider_input_div_2"
);

const catalog_divider_5_2_title = document.createElement("input");
catalog_divider_5_2_title.classList.add("catalog_divider_input_range_min");
catalog_divider_5_2_title.setAttribute(
  "type",
  "range",
  (min = "0"),
  (max = "100000"),
  (value = "100000")
);

catalog_divider_5_2.appendChild(catalog_divider_5_2_title);
const inputs_range = document.querySelectorAll(
  ".catalog_divider_input_range_min"
);

inputs_range.forEach((input) => {
  input.addEventListener("input", () => {
    input_number = input.value;
    catalog_divider_4_title.value = input_number;
  });
});

const catalog_divider_6 = document.querySelector(
  ".catalog_divider_input_div_2"
);
const catalog_divider_6_title = document.createElement("input");
catalog_divider_6_title.classList.add("catalog_divider_input_range_max");
catalog_divider_6_title.setAttribute(
  "type",
  "range",
  (min = "0"),
  (max = "100000"),
  (value = "100000")
);
catalog_divider_6.appendChild(catalog_divider_6_title);

const inputs_range_2 = document.querySelectorAll(
  ".catalog_divider_input_range_max"
);

inputs_range_2.forEach((input) => {
  input.addEventListener("input", () => {
    input_number_2 = input.value;
    catalog_divider_5_title.value = input_number_2;
  });
});

const catalog_divider_7 = document.querySelector(".catalog_divider");
const catalog_divider_7_title = document.createElement("div");
catalog_divider_7_title.classList.add("catalog_divider_gender");
catalog_divider_7.appendChild(catalog_divider_7_title);

const catalog_divider_7_1 = document.querySelector(".catalog_divider_gender");
const catalog_divider_7_1_title = document.createElement("p");
catalog_divider_7_1_title.classList.add("catalog_divider_gender_p");
catalog_divider_7_1_title.innerHTML = "Пол";
catalog_divider_7_1.appendChild(catalog_divider_7_1_title);

const catalog_divider_7_2 = document.querySelector(".catalog_divider_gender");
const catalog_divider_7_2_title = document.createElement("div");
catalog_divider_7_2_title.classList.add("catalog_divider_gender_div");
catalog_divider_7_2.appendChild(catalog_divider_7_2_title);

const catalog_divider_7_2_1 = document.querySelector(
  ".catalog_divider_gender_div"
);
const catalog_divider_7_2_1_title = document.createElement("input");
catalog_divider_7_2_1_title.classList.add("catalog_divider_gender_input");
catalog_divider_7_2_1_title.setAttribute("type", "checkbox");
catalog_divider_7_2_1.appendChild(catalog_divider_7_2_1_title);

const catalog_divider_7_2_2 = document.querySelector(
  ".catalog_divider_gender_div"
);
const catalog_divider_7_2_2_title = document.createElement("p");
catalog_divider_7_2_2_title.classList.add("catalog_divider_gender_p");
catalog_divider_7_2_2_title.innerHTML = "Мужской";

catalog_divider_7_2_2.appendChild(catalog_divider_7_2_2_title);

const catalog_divider_7_2_3 = document.querySelector(
  ".catalog_divider_gender_div"
);
const catalog_divider_7_2_3_title = document.createElement("input");
catalog_divider_7_2_3_title.classList.add("catalog_divider_gender_input");
catalog_divider_7_2_3_title.setAttribute("type", "checkbox");
catalog_divider_7_2_3.appendChild(catalog_divider_7_2_3_title);

const catalog_divider_7_2_4 = document.querySelector(
  ".catalog_divider_gender_div"
);
const catalog_divider_7_2_4_title = document.createElement("p");
catalog_divider_7_2_4_title.classList.add("catalog_divider_gender_p");
catalog_divider_7_2_4_title.innerHTML = "Женский";

catalog_divider_7_2_4.appendChild(catalog_divider_7_2_4_title);

const catalog_divider_7_2_5 = document.querySelector(".catalog_divider_gender");
const catalog_divider_7_2_5_title = document.createElement("p");
catalog_divider_7_2_5_title.classList.add("catalog_divider_gender_p_2");
catalog_divider_7_2_5_title.innerHTML = "Размер";
catalog_divider_7_2_5.appendChild(catalog_divider_7_2_5_title);

const shoe_size = document.querySelector(".catalog_divider");
const shoe_size_div = document.createElement("div");
shoe_size_div.classList.add("shoe_size_div");
shoe_size.appendChild(shoe_size_div);

const shoe_size_div_1 = document.querySelector(".shoe_size_div");
const shoe_size_div_1_title = document.createElement("button");
shoe_size_div_1_title.classList.add("shoe_size_div_1_title");
shoe_size_div_1_title.innerHTML = "35";
shoe_size_div_1.appendChild(shoe_size_div_1_title);
const shoize = [
  {
    id: 1,
    title: "35",
    checked: true,
  },
  {
    id: 2,
    title: "36",
    checked: true,
  },
  {
    id: 3,
    title: "37",
    checked: true,
  },
  {
    id: 4,
    title: "38",
    checked: true,
  },
  {
    id: 5,
    title: "39",
    checked: true,
  },
  {
    id: 6,
    title: "40",
    checked: true,
  },
  {
    id: 7,
    title: "41",
    checked: true,
  },
  {
    id: 8,
    title: "42",
    checked: true,
  },
  {
    id: 9,
    title: "43",
    checked: true,
  },
];
for (let i = 1; i < 9; i++) {
  const shoe_size_div_2 = document.querySelector(".shoe_size_div");
  const shoe_size_div_2_title = document.createElement("button");
  shoe_size_div_2_title.classList.add("shoe_size_div_2_title");
  shoe_size_div_2_title.innerHTML = `${shoize[i].title}`;
  shoe_size_div_2.appendChild(shoe_size_div_2_title);
}

const apply_btn_catalog = document.querySelector(".catalog_divider");
const apply_btn_catalog_title = document.createElement("button");
apply_btn_catalog_title.classList.add("apply_btn_catalog_title");
apply_btn_catalog_title.innerHTML = "Применить";
apply_btn_catalog_title.setAttribute("type", "submit");
apply_btn_catalog.appendChild(apply_btn_catalog_title);

const reset_btn_catalog = document.querySelector(".catalog_divider");
const reset_btn_catalog_title = document.createElement("button");
reset_btn_catalog_title.classList.add("reset_btn_catalog_title");
reset_btn_catalog_title.setAttribute("type", "reset");
reset_btn_catalog_title.innerHTML = "Сбросить";
reset_btn_catalog.appendChild(reset_btn_catalog_title);
reset_btn_catalog_title.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll(".catalog_divider_gender_input");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  const inputs = document.querySelectorAll(".catalog_divider_input_range_min");
  inputs.forEach((input) => {
    input.value = 0;
  });
  const inputs_2 = document.querySelectorAll(
    ".catalog_divider_input_range_max"
  );
  inputs_2.forEach((input) => {
    input.value = 100;
  });

  const inputs_3 = document.querySelectorAll(".catalog_divider_input");
  inputs_3.forEach((input) => {
    input.value = "0";
  });

  const inputs_4 = document.querySelectorAll(".catalog_divider_input_2");
  inputs_4.forEach((input) => {
    input.value = "0";
  });

  const inputs_5 = document.querySelectorAll(".shoe_size_div_1_title");
  inputs_5.forEach((input) => {
    input.classList.remove("shoe_size_div_1_title_active");
  });
  const inputs_6 = document.querySelectorAll(".shoe_size_div_2_title");
  inputs_6.forEach((input) => {
    input.classList.remove("shoe_size_div_2_title_active");
  });
});

const catalog_divider_2 = document.querySelector(".catalog_divider");

const catalog_divider_2_title = document.createElement("div");
catalog_divider_2_title.classList.add("catalog_divider_2");
main_title.appendChild(catalog_divider_2_title);

const sneakers_divider = document.createElement("div");
sneakers_divider.classList.add("sneakers_divider");
sneakers_divider.setAttribute("id", "content");
catalog_divider_2_title.appendChild(sneakers_divider);

const shoes_image = document.querySelector(".sneakers_divider");

for (let i = 0; i < 36; i++) {
  const image_shoes = [
    {
      id: 1,
      name: "mens_shoes",
      title: "./public/image_shoes.png",
      price: "11 000 р₽",
    },
    {
      id: 2,
      name: "womens_shoes",
      title: "./public/image_shoes.png",
      price: "11 000 р₽",
    },
  ];

  const shoes_image_div = document.createElement("div");
  shoes_image_div.classList.add("shoes_image_div");
  shoes_image.appendChild(shoes_image_div);

  const shoes_image_div_img = document.createElement("img");
  shoes_image_div_img.classList.add("shoes_image_div_img");
  shoes_image_div_img.src = `./public/image_shoes.png`;
  shoes_image_div_img.alt = "shoes_image_div_img";
  shoes_image_div_img.title = "shoes_image_div_img";
  shoes_image_div_img.setAttribute("id", "shoes_image_div_img");
  shoes_image_div_img.addEventListener("click", () => {
    const shoes_image_div_img = document.getElementById(
      "shoes_image_div_img"
    );
    shoes_image_div_img.classList.add("shoes_image_div_img_active");
  })

   

  shoes_image_div.appendChild(shoes_image_div_img);

 

  const shoes_image_div_title = document.createElement("div");
  shoes_image_div_title.classList.add("shoes_image_div_title");
  shoes_image_div_title.textContent = "Кроссовки Nike Air Force 1 '07 QS";

  shoes_image_div.appendChild(shoes_image_div_title);

  const shoes_image_div_price = document.createElement("div");
  shoes_image_div_price.classList.add("shoes_image_div_price");
  shoes_image_div_price.textContent = "11 000 р ";
  shoes_image_div.appendChild(shoes_image_div_price);
}

const show_more_btn = document.querySelector(".catalog_divider_2");
const show_more_btn_title = document.createElement("button");
show_more_btn_title.classList.add("show_more_btn_title");
show_more_btn_title.setAttribute("id", "toggleBtn");
show_more_btn_title.setAttribute("type", "button");
show_more_btn_title.textContent = `${shoes_image.children.length} Показать еще`;
show_more_btn.appendChild(show_more_btn_title);

const content = document.getElementById("content");
const toggleBtn = document.getElementById("toggleBtn");
let isExpanded = false; // İzləmək üçün dəyişən

toggleBtn.addEventListener("click", function () {
  if (content.classList.contains('expanded')) {
    content.classList.remove('expanded');
    content.style.maxHeight = "1187px"; 
    toggleBtn.textContent = `${shoes_image.children.length} Показать еще`;
  } else {
    content.classList.add('expanded');
    content.style.maxHeight = content.scrollHeight + "px"; 
    toggleBtn.textContent = "Скрыть";
  }
  isExpanded = !isExpanded; // vəziyyəti dəyişirik
});

// -------bascet_modal_divider---------
const nav_link_bascet = document.querySelector(".nav_link_bascet");

const bascet_div_modal = document.createElement("div");
bascet_div_modal.classList.add("bascet_div_modal");
nav_link_bascet.appendChild(bascet_div_modal);

const blurBg = document.getElementById("modal_blur_bg");

// --------bascet_button---------
document.addEventListener("click", (event) => {
  if (event.target === nav_link_bascet) {
    bascet_div_modal.style.display = "block";
    blurBg.style.display = "block";
  }
});

window.addEventListener("click", (event) => {
  if (event.target !== nav_link_bascet) {
    bascet_div_modal.style.display = "none";
    blurBg.style.display = "none";
  }
});

const product_bascet = [
  {
    Id: 1,
    name: "Женские кроссовки Puma Force 1 Shadow",
    price: "8 678 ₽",
    img: "./public/Group_1.png",
  },

  {
    Id: 2,
    name: "Женские кроссовки Puma Force 1 Shadow",
    price: "8 789 ₽ ",
    img: "./public/Group_1.png",
  },

  {
    Id: 3,
    name: "Женские кроссовки Puma Force 1 Shadow",
    price: "8 789 ₽ ",
    img: "./public/Group_1.png",
  },
];

const bascet_divider_modal_divider =
  document.querySelector(".bascet_div_modal");

const bascet_divider_modal_1 = document.createElement("div");
bascet_divider_modal_1.classList.add("bascet_divider_modal_1");
bascet_divider_modal_divider.appendChild(bascet_divider_modal_1);

for (let i = 0; i < 3; i++) {
  const bascet_divider = document.createElement("div");
  bascet_divider.classList.add("bascet_divider_modal_divider_slider");
  bascet_divider_modal_1.appendChild(bascet_divider);

  const bascet_divider_filex_text_img = document.createElement("img");
  bascet_divider_filex_text_img.classList.add(
    "bascet_divider_modal_divider_slider_img"
  );
  bascet_divider_filex_text_img.src = "./public/Group_1.png";
  bascet_divider.appendChild(bascet_divider_filex_text_img);

  const bascet_divider_filex_text = document.createElement("p");
  bascet_divider_filex_text.classList.add(
    "bascet_divider_modal_divider_slider_text"
  );
  bascet_divider_filex_text.textContent = `${product_bascet[i].name}`;
  bascet_divider.appendChild(bascet_divider_filex_text);

  const bascet_divider_filex_text_2 = document.createElement("p");
  bascet_divider_filex_text_2.classList.add(
    "bascet_divider_modal_divider_slider_text_2"
  );
  bascet_divider_filex_text_2.textContent = `${product_bascet[i].price}`;
  bascet_divider.appendChild(bascet_divider_filex_text_2);

  const bascet_divider_filex_text_img_2 = document.createElement("img");
  bascet_divider_filex_text_img_2.classList.add(
    "bascet_divider_modal_divider_slider_img_2"
  );

  bascet_divider_filex_text_img_2.src = "./public/trash _1.svg";
  bascet_divider.appendChild(bascet_divider_filex_text_img_2);
}

const btn_bascet = document.querySelector(".bascet_div_modal");

const btn_bascet_div = document.createElement("div");
btn_bascet_div.classList.add("btn_bascet_div");
btn_bascet.appendChild(btn_bascet_div);

const btn_bascet_text = document.createElement("button");
btn_bascet_text.classList.add("btn_bascet_text");
btn_bascet_text.textContent = "Перейти в корзину";
btn_bascet_div.appendChild(btn_bascet_text);

const bascet_price = document.querySelector(".btn_bascet_div");
const bascet_price_text = document.createElement("div");
bascet_price_text.classList.add("bascet_price_text");
bascet_price_text.textContent = "Итого:";
const bascet_price_text_2 = document.createElement("div");
bascet_price_text_2.classList.add("bascet_price_text_2");
bascet_price_text_2.textContent = "25 789 ₽";

bascet_price.appendChild(bascet_price_text_2);

bascet_price.appendChild(bascet_price_text);


const about_us_section = document.querySelector(".about_us_section")

const about_us_section_divider = document.createElement("div")
about_us_section_divider.classList.add("about_us_section_divider")
btn_bascet_text.addEventListener("click", () => {
  about_us_section_divider.scrollIntoView({ behavior: "smooth" });
})
about_us_section.appendChild(about_us_section_divider)


// const about_us_section_divider_text = document.createElement("img")
// about_us_section_divider_text.classList.add("about_us_section_divider_img")
// about_us_section_divider_text.src = "./public/Screenshot 2025-04-18 014429.png"
// about_us_section_divider.appendChild(about_us_section_divider_text)