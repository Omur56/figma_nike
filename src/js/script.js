const slider = document.querySelector(".slider_divider");
const slider_button_left = document.querySelector(".slider_button_left");
const slider_button_right = document.querySelector(".slider_button_right");

const images = ["airmax3.webp", "airmax6.jpg", "airmax7.jpeg"];
let index = 0;
let intervalId;

function moveSlider() {
  if (index < images.length - 1) {
    index++;
  } else {
    index = 0;
  }
  slider.style.backgroundImage = `url(./public/${images[index]})`;
}

function startSlider() {
  intervalId = setInterval(moveSlider, 5000);
}

function stopSlider() {
  clearInterval(intervalId);
}

slider_button_right.addEventListener("click", () => {
  stopSlider();
  moveSlider();
});

slider_button_left.addEventListener("click", () => {
  stopSlider();
  if (index > 0) {
    index--;
  } else {
    index = images.length - 1;
  }
  slider.style.backgroundImage = `url(./public/${images[index]})`;
});

slider.addEventListener("mouseenter", stopSlider);

slider.addEventListener("mouseleave", startSlider);

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
  shoes_image_div.appendChild(shoes_image_div_img);

  const shoes_image_div_title_div = document.createElement("div");
  shoes_image_div_title_div.classList.add("shoes_image_div_title_div");
  shoes_image_div.appendChild(shoes_image_div_title_div);

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
  if (content.classList.contains("expanded")) {
    content.classList.remove("expanded");
    content.style.maxHeight = "1187px";
    toggleBtn.textContent = `${shoes_image.children.length} Показать еще`;
  } else {
    content.classList.add("expanded");
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

const about_us_section = document.querySelector(".about_us_section");

const about_us_section_divider = document.createElement("div");
about_us_section_divider.classList.add("about_us_section_divider");
about_us_section.appendChild(about_us_section_divider);

const cricle_about_1 = document.createElement("div");
cricle_about_1.classList.add("cricle_about_1");
about_us_section_divider.appendChild(cricle_about_1);

const cricle_about_2 = document.createElement("div");
cricle_about_2.classList.add("cricle_about_2");
about_us_section_divider.appendChild(cricle_about_2);

const cricle_about_3 = document.createElement("div");
cricle_about_3.classList.add("cricle_about_3");
about_us_section_divider.appendChild(cricle_about_3);

const about_us_section_divider_text = document.createElement("img");
about_us_section_divider_text.classList.add("about_us_section_divider_img");
about_us_section_divider_text.src = "./public/background_about_img.png";
about_us_section_divider.appendChild(about_us_section_divider_text);

const about_us_section_divider_text_3 = document.createElement("h2");
about_us_section_divider_text_3.classList.add(
  "about_us_section_divider_text_2"
);
about_us_section_divider_text_3.textContent = "Пара слов о нас";
about_us_section_divider.appendChild(about_us_section_divider_text_3);

const about_us_section_divider_text_4 = document.createElement("p");
about_us_section_divider_text_4.classList.add(
  "about_us_section_divider_text_4"
);
about_us_section_divider_text_4.textContent =
  "Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт мы можем менять жизни. В том числе с помощью воодушевляющих историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед. ";
about_us_section_divider.appendChild(about_us_section_divider_text_4);

const about_us_section_divider_text_5 = document.createElement("div");
about_us_section_divider_text_5.classList.add(
  "about_us_section_divider_text_5"
);
about_us_section_divider.appendChild(about_us_section_divider_text_5);

const about_us_section_divider_text_6 = document.createElement("div");
about_us_section_divider_text_6.classList.add(
  "about_us_section_divider_text_6"
);
about_us_section_divider_text_5.appendChild(about_us_section_divider_text_6);

const about_us_section_divider_text_7 = document.createElement("p");
about_us_section_divider_text_7.classList.add(
  "about_us_section_divider_text_7"
);
about_us_section_divider_text_7.textContent = "SneakMax";
about_us_section_divider_text_5.appendChild(about_us_section_divider_text_7);

const sports_shoes_section = document.querySelector(".sports_shoes_section");

const sports_shoes_section_divider = document.createElement("div");
sports_shoes_section_divider.classList.add("sports_shoes_section_divider");
sports_shoes_section_divider.classList.add("active_sport_section_divider");
sports_shoes_section_divider.setAttribute("id", "page1");
sports_shoes_section.appendChild(sports_shoes_section_divider);

const warning_p_product_shoes = document.createElement("p");
warning_p_product_shoes.classList.add("warning_p_product_shoes");
warning_p_product_shoes.textContent =
  "1-dən az və ya 3-dən çox seçim etmək olmaz!";
sports_shoes_section_divider.appendChild(warning_p_product_shoes);

const sports_1 = document.createElement("h2");
sports_1.classList.add("sports_text_title");
sports_1.textContent = "Мы подберем идеальную пару для вас";
sports_shoes_section_divider.appendChild(sports_1);

const sports_2 = document.createElement("p");
sports_2.classList.add("sports_text_p");
sports_2.textContent =
  "Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями ";
sports_shoes_section_divider.appendChild(sports_2);

const sports_3 = document.createElement("div");
sports_3.classList.add("sports_title_line");
sports_shoes_section_divider.appendChild(sports_3);

const sports_shoes_section_divider_text = document.createElement("p");
sports_shoes_section_divider_text.classList.add(
  "sports_shoes_section_divider_text"
);
sports_shoes_section_divider_text.textContent =
  "Какой тип кроссовок рассматриваете?";
sports_shoes_section_divider.appendChild(sports_shoes_section_divider_text);

const sports_shoes_section_divider_text_2 = document.createElement("div");
sports_shoes_section_divider_text_2.classList.add(
  "sports_shoes_section_divider_text_2"
);
sports_shoes_section_divider.appendChild(sports_shoes_section_divider_text_2);

for (let i = 0; i < 6; i++) {
  const sports_shoe_divider_cart = document.querySelector(
    ".sports_shoes_section_divider_text_2"
  );

  const sports_shoe_divider = document.createElement("div");
  sports_shoe_divider.classList.add("sports_shoe_divider");
  sports_shoe_divider_cart.appendChild(sports_shoe_divider);

  const sports_shoe_img = document.createElement("img");
  sports_shoe_img.classList.add("sports_shoe_img");
  sports_shoe_img.src = "./public/shoe_sport_img.jpg";
  sports_shoe_divider.appendChild(sports_shoe_img);

  const sports_shoe_title = document.createElement("div");
  sports_shoe_title.classList.add("sports_shoe_title");
  sports_shoe_divider.appendChild(sports_shoe_title);

  const sports_shoe_text = document.createElement("input");
  sports_shoe_text.classList.add("sports_shoe_text_input");
  sports_shoe_text.classList.add("product_shoes_input");
  sports_shoe_text.setAttribute("type", "checkbox");
  sports_shoe_text.type = "checkbox";
  sports_shoe_title.appendChild(sports_shoe_text);

  const sports_shoe_text_2 = document.createElement("p");
  sports_shoe_text_2.classList.add("sports_shoe_text");
  sports_shoe_text_2.textContent = "кеды";
  sports_shoe_title.appendChild(sports_shoe_text_2);
}
const sports_shoes_section_divider_text_bottom_line =
  document.createElement("div");
sports_shoes_section_divider_text_bottom_line.classList.add(
  "sports_shoes_section_divider_bottom_line"
);
sports_shoes_section_divider.appendChild(
  sports_shoes_section_divider_text_bottom_line
);

const sports_shoes_section_divider_text_3 = document.createElement("div");
sports_shoes_section_divider_text_3.classList.add(
  "sports_shoes_section_divider_text_3"
);
sports_shoes_section_divider.appendChild(sports_shoes_section_divider_text_3);

const sports_shoes_section_divider_text_4 = document.createElement("p");
sports_shoes_section_divider_text_4.classList.add(
  "sports_shoes_section_divider_text_4"
);
sports_shoes_section_divider_text_4.textContent = "1 из 3";
sports_shoes_section_divider_text_3.appendChild(
  sports_shoes_section_divider_text_4
);

const sports_shoes_section_divider_text_5 = document.createElement("button");
sports_shoes_section_divider_text_5.classList.add(
  "sports_shoes_section_divider_text_5"
);
sports_shoes_section_divider_text_5.textContent = "Следующий шаг";
console.log(sports_shoes_section_divider_text_5);
sports_shoes_section_divider_text_3.appendChild(
  sports_shoes_section_divider_text_5
);

const what_size_divider = document.createElement("div");
what_size_divider.classList.add("sports_shoes_section_divider");
what_size_divider.setAttribute("id", "page2");
sports_shoes_section.appendChild(what_size_divider);

const what_size_divider_text = document.createElement("h2");
what_size_divider_text.classList.add("sports_shoes_section_divider_text");
what_size_divider_text.setAttribute("id", "page2");
what_size_divider_text.textContent = "Мы подберем идеальную пару для вас";
what_size_divider.appendChild(what_size_divider_text);

const what_size_divider_text_2 = document.createElement("p");
what_size_divider_text_2.classList.add(
  "sports_shoes_section_divider_text_2_page2"
);
what_size_divider_text_2.textContent =
  "Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями ";
what_size_divider.appendChild(what_size_divider_text_2);

const what_size_divider_text_3 = document.createElement("div");
what_size_divider_text_3.classList.add("what_size_divider_top_page2_line");
what_size_divider.appendChild(what_size_divider_text_3);

const what_size_divider_text_4 = document.createElement("p");
what_size_divider_text_4.classList.add("what_size_divider_text_4");
what_size_divider_text_4.textContent = "Какой размер вам подойдет?";
what_size_divider.appendChild(what_size_divider_text_4);

const what_size_divider_text_5 = document.createElement("div");
what_size_divider_text_5.classList.add("what_size_divider_text_5");
what_size_divider.appendChild(what_size_divider_text_5);

const warning_p_product_shoes_page2 = document.createElement("p");
warning_p_product_shoes_page2.classList.add("warning_p_product_shoes");
warning_p_product_shoes_page2.textContent =
  "1-dən az və ya 3-dən çox seçim etmək olmaz!";
what_size_divider.appendChild(warning_p_product_shoes_page2);

const shoe_size_product = [
  {
    id: 1,
    title: "менее 36",
    checked: true,
  },
  {
    id: 2,
    title: "36-38",
    checked: true,
  },
  {
    id: 3,
    title: "39-41",
    checked: true,
  },
  {
    id: 4,
    title: "42-44",
    checked: true,
  },
  {
    id: 5,
    title: "45 и больше",
    checked: true,
  },
];

for (let i = 0; i < 5; i++) {
  const what_size_divider_text_div = document.createElement("div");
  what_size_divider_text_div.classList.add("what_size_divider_text_div");
  what_size_divider_text_5.appendChild(what_size_divider_text_div);

  const what_size_divider_text_6 = document.createElement("input");
  what_size_divider_text_6.classList.add("what_size_divider_text_6");
  what_size_divider_text_6.classList.add("catalog_divider_gender_input");
  what_size_divider_text_6.setAttribute("type", "checkbox");
  what_size_divider_text_div.appendChild(what_size_divider_text_6);

  const what_size_divider_text_7 = document.createElement("label");
  what_size_divider_text_7.classList.add("what_size_divider_text_7");
  what_size_divider_text_7.textContent = `${shoe_size_product[i].title}`;
  what_size_divider_text_div.appendChild(what_size_divider_text_7);
}

const what_size_divider_img_page_2 = document.createElement("img");
what_size_divider_img_page_2.classList.add("what_size_divider_img_page_2");
what_size_divider_img_page_2.src = "./public/shoe_size_img_page2.png";
what_size_divider.appendChild(what_size_divider_img_page_2);

const what_div_page2_product_shoes_bottom_line = document.createElement("div");
what_div_page2_product_shoes_bottom_line.classList.add(
  "what_div_page2_product_shoes_bottom_line"
);
what_size_divider.appendChild(what_div_page2_product_shoes_bottom_line);

const what_div_page2_product_shoes_bottom_page2_next =
  document.createElement("div");
what_div_page2_product_shoes_bottom_page2_next.classList.add(
  "what_div_page2_product_shoes_bottom_page2_next"
);
what_size_divider.appendChild(what_div_page2_product_shoes_bottom_page2_next);

const what_div_page2_product_shoes_bottom_page2_next_text =
  document.createElement("p");
what_div_page2_product_shoes_bottom_page2_next_text.classList.add(
  "what_div_page2_product_shoes_bottom_page2_next_text"
);
what_div_page2_product_shoes_bottom_page2_next_text.textContent = "2 из 3";
what_div_page2_product_shoes_bottom_page2_next.appendChild(
  what_div_page2_product_shoes_bottom_page2_next_text
);

const what_div_page2_product_shoes_bottom_page2_next_back =
  document.createElement("div");
what_div_page2_product_shoes_bottom_page2_next_back.classList.add(
  "what_div_page2_product_shoes_bottom_page2_next_back"
);
what_div_page2_product_shoes_bottom_page2_next.appendChild(
  what_div_page2_product_shoes_bottom_page2_next_back
);

const what_div_page2_product_shoes_bottom_page2_back_btn =
  document.createElement("button");
what_div_page2_product_shoes_bottom_page2_back_btn.classList.add(
  "what_div_page2_product_shoes_bottom_page2_back_btn"
);
what_div_page2_product_shoes_bottom_page2_back_btn.classList.add(
  "sports_shoes_section_divider_text_5"
);
what_div_page2_product_shoes_bottom_page2_back_btn.textContent = "Назад";
what_div_page2_product_shoes_bottom_page2_next_back.appendChild(
  what_div_page2_product_shoes_bottom_page2_back_btn
);

const what_div_page2_product_shoes_bottom_page2_next_btn =
  document.createElement("button");
what_div_page2_product_shoes_bottom_page2_next_btn.classList.add(
  "what_div_page2_product_shoes_bottom_page2_next_text"
);
what_div_page2_product_shoes_bottom_page2_next_btn.classList.add(
  "sports_shoes_section_divider_text_5"
);
what_div_page2_product_shoes_bottom_page2_next_btn.textContent =
  "Следующий шаг";
what_div_page2_product_shoes_bottom_page2_next_back.appendChild(
  what_div_page2_product_shoes_bottom_page2_next_btn
);

const what_div_product_shoes_page3 = document.createElement("div");
what_div_product_shoes_page3.classList.add("what_div_product_shoes_page3");
what_div_product_shoes_page3.setAttribute("id", "page3");
sports_shoes_section.appendChild(what_div_product_shoes_page3);

const what_div_product_shoes_page3_text = document.createElement("h2");
what_div_product_shoes_page3_text.classList.add(
  "what_div_product_shoes_page3_text"
);
what_div_product_shoes_page3_text.textContent =
  "Мы подберем идеальную пару для вас";
what_div_product_shoes_page3.appendChild(what_div_product_shoes_page3_text);

const what_div_product_shoes_page3_text_2 = document.createElement("p");
what_div_product_shoes_page3_text_2.classList.add(
  "what_div_product_shoes_page3_text_2"
);
what_div_product_shoes_page3_text_2.textContent =
  "Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями ";
what_div_product_shoes_page3.appendChild(what_div_product_shoes_page3_text_2);

const what_div_product_shoes_page3_top_line = document.createElement("div");
what_div_product_shoes_page3_top_line.classList.add(
  "what_div_product_shoes_page3_top_line"
);
what_div_product_shoes_page3.appendChild(what_div_product_shoes_page3_top_line);

const what_div_product_shoes_page3_text_3 = document.createElement("p");
what_div_product_shoes_page3_text_3.classList.add(
  "what_div_product_shoes_page3_text_3"
);
what_div_product_shoes_page3_text_3.textContent = "Уточните какие-либо моменты";
what_div_product_shoes_page3.appendChild(what_div_product_shoes_page3_text_3);

const what_div_product_shoes_page3_input_textaera =
  document.createElement("textarea");
what_div_product_shoes_page3_input_textaera.setAttribute("type", "text");
what_div_product_shoes_page3_input_textaera.placeholder = "Введите сообщение";
what_div_product_shoes_page3_input_textaera.classList.add(
  "what_div_product_shoes_page3_input_textaera"
);
what_div_product_shoes_page3.appendChild(
  what_div_product_shoes_page3_input_textaera
);

const what_div_product_shoes_page3_bottom_line = document.createElement("div");
what_div_product_shoes_page3_bottom_line.classList.add(
  "what_div_product_shoes_page3_bottom_line"
);
what_div_product_shoes_page3.appendChild(
  what_div_product_shoes_page3_bottom_line
);

const what_div_product_shoes_page3_bottom_div = document.createElement("div");
what_div_product_shoes_page3_bottom_div.classList.add(
  "what_div_product_shoes_page3_bottom_div"
);
what_div_product_shoes_page3.appendChild(
  what_div_product_shoes_page3_bottom_div
);

const what_div_product_shoes_page3_bottom_div_text =
  document.createElement("p");
what_div_product_shoes_page3_bottom_div_text.classList.add(
  "what_div_product_shoes_page3_bottom_div_text"
);
what_div_product_shoes_page3_bottom_div_text.textContent = "3 из 3";
what_div_product_shoes_page3_bottom_div.appendChild(
  what_div_product_shoes_page3_bottom_div_text
);

const what_div_product_shoes_page3_btn_back_next_div =
  document.createElement("div");
what_div_product_shoes_page3_btn_back_next_div.classList.add(
  "what_div_product_shoes_page3_btn_back_next_div"
);
what_div_product_shoes_page3_bottom_div.appendChild(
  what_div_product_shoes_page3_btn_back_next_div
);

const what_div_product_shoes_page3_back_btn = document.createElement("button");
what_div_product_shoes_page3_back_btn.classList.add(
  "what_div_product_shoes_page3_back_btn"
);
what_div_product_shoes_page3_back_btn.classList.add(
  "what_div_page2_product_shoes_bottom_page2_back_btn"
);
what_div_product_shoes_page3_back_btn.classList.add(
  "sports_shoes_section_divider_text_5"
);
what_div_product_shoes_page3_back_btn.textContent = "Назад";
what_div_product_shoes_page3_btn_back_next_div.appendChild(
  what_div_product_shoes_page3_back_btn
);

const what_div_product_shoes_page3_next_btn = document.createElement("button");
what_div_product_shoes_page3_next_btn.classList.add(
  "what_div_product_shoes_page3_next_btn"
);
what_div_product_shoes_page3_next_btn.classList.add(
  "sports_shoes_section_divider_text_5"
);
what_div_product_shoes_page3_next_btn.textContent = "Следующий шаг";
what_div_product_shoes_page3_btn_back_next_div.appendChild(
  what_div_product_shoes_page3_next_btn
);

const your_selection_section = document.createElement("div");
your_selection_section.classList.add("your_selection_section");
your_selection_section.setAttribute("id", "page4");
sports_shoes_section.appendChild(your_selection_section);

const your_selection_section_text = document.createElement("h2");
your_selection_section_text.classList.add("your_selection_section_text");
your_selection_section_text.textContent = "Ваша подборка готова!";
your_selection_section.appendChild(your_selection_section_text);

const your_selection_section_text_2 = document.createElement("p");
your_selection_section_text_2.classList.add("your_selection_section_text_2");
your_selection_section_text_2.textContent =
  "Оставьте свои контактные данные, чтобы бы мы могли отправить  подготовленный для вас каталог";
your_selection_section.appendChild(your_selection_section_text_2);

const your_selection_section_top_line = document.createElement("div");
your_selection_section_top_line.classList.add(
  "your_selection_section_top_line"
);
your_selection_section.appendChild(your_selection_section_top_line);

const your_selection_section_div_2 = document.createElement("div");
your_selection_section_div_2.classList.add("your_selection_section_div_2");
your_selection_section.appendChild(your_selection_section_div_2);

const your_selection_section_div_2_title_text = document.createElement("h2");
your_selection_section_div_2_title_text.classList.add(
  "your_selection_section_div_2_title_text"
);
your_selection_section_div_2_title_text.textContent = "Получить предложение";
your_selection_section_div_2.appendChild(
  your_selection_section_div_2_title_text
);

const your_selection_section_div_2_text = document.createElement("p");
your_selection_section_div_2_text.classList.add(
  "your_selection_section_div_2_text"
);
your_selection_section_div_2_text.textContent =
  "Получите подборку подходящих для вас моделей на почту";
your_selection_section_div_2.appendChild(your_selection_section_div_2_text);

const your_selection_section_div_btn_input_div = document.createElement("div");
your_selection_section_div_btn_input_div.classList.add(
  "your_selection_section_div_btn_input_div"
);
your_selection_section_div_2.appendChild(
  your_selection_section_div_btn_input_div
);

const your_selection_section_div_2_input = document.createElement("input");
your_selection_section_div_2_input.setAttribute("type", "text");
your_selection_section_div_2_input.placeholder = "Ваше имя";
your_selection_section_div_2_input.setAttribute("id", "name");
your_selection_section_div_2_input.classList.add(
  "your_selection_section_div_2_input"
);
your_selection_section_div_btn_input_div.appendChild(
  your_selection_section_div_2_input
);

const your_selection_section_div_2_input_2 = document.createElement("input");
your_selection_section_div_2_input_2.setAttribute("type", "email");
your_selection_section_div_2_input_2.placeholder = "E-mail";
your_selection_section_div_2_input_2.setAttribute("id", "email");
your_selection_section_div_2_input_2.classList.add(
  "your_selection_section_div_2_input_2"
);
your_selection_section_div_btn_input_div.appendChild(
  your_selection_section_div_2_input_2
);

const your_selection_section_div_warning_text = document.createElement("p");
your_selection_section_div_warning_text.classList.add(
  "your_selection_section_div_warning_text"
);
your_selection_section_div_warning_text.textContent =
  "Пожалуйста, заполните все поля";
your_selection_section_div_btn_input_div.appendChild(
  your_selection_section_div_warning_text
);

const your_selection_section_div_2_btn = document.createElement("button");
your_selection_section_div_2_btn.classList.add(
  "your_selection_section_div_2_btn"
);
your_selection_section_div_2_btn.textContent = "Получить";
your_selection_section_div_2_btn.setAttribute("type", "submit");
your_selection_section_div_2_btn.classList.add(
  "sports_shoes_section_divider_text_5"
);
your_selection_section_div_2_btn.setAttribute("id", "getBtn");
your_selection_section_div_btn_input_div.appendChild(
  your_selection_section_div_2_btn
);

const your_selection_section_div_2_btn_back = document.createElement("button");
your_selection_section_div_2_btn_back.textContent = "Назад";
your_selection_section_div_2_btn_back.classList.add(
  "your_selection_section_div_2_btn_back"
);
your_selection_section_div_2_btn_back.classList.add(
  "sports_shoes_section_divider_text_5"
);
your_selection_section_div_2_btn_back.setAttribute("id", "backBtn");
your_selection_section_div_2_btn_back.setAttribute("type", "button");
your_selection_section_div_btn_input_div.appendChild(
  your_selection_section_div_2_btn_back
);

const your_selection_section_div_2_img = document.createElement("img");
your_selection_section_div_2_img.classList.add(
  "your_selection_section_div_2_img"
);
your_selection_section_div_2_img.src = "./public/iPhone_11_Pro.png";
your_selection_section_div_2_img.alt = "iPhone_11_Pro.png";
your_selection_section.appendChild(your_selection_section_div_2_img);

const your_selection_section_div_2_img_2 = document.createElement("img");
your_selection_section_div_2_img_2.classList.add(
  "your_selection_section_div_2_img_2"
);
your_selection_section_div_2_img_2.src = "./public/send.png";
your_selection_section_div_2_img_2.alt = "send";
your_selection_section.appendChild(your_selection_section_div_2_img_2);

document.getElementById("getBtn").addEventListener("click", function () {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    your_selection_section_div_warning_text.style.display = "block";
  } else {
    your_selection_section_div_warning_text.style.display = "none";
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

document.getElementById("getBtn").addEventListener("click", function () {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "" || !validateEmail(email)) {
    your_selection_section_div_warning_text.style.display = "block";
  } else {
    your_selection_section_div_warning_text.style.display = "none";
  }
});

function setupNavigation() {
  const pages = ["page1", "page2", "page3", "page4"];
  let currentPageIndex = 0;

  function showPage(index) {
    pages.forEach((id, i) => {
      const el = document.getElementById(id);
      if (el) {
        el.style.display = i === index ? "block" : "none";
      }
    });
  }

  function hideAllButtons() {
    const allButtons = [
      document.querySelector("#getBtn"),
      document.querySelector("#backBtn"),
    ];
    allButtons.forEach((btn) => {
      btn.style.display = "none";
    });
  }

  document.querySelectorAll("button").forEach((btn) => {
    if (btn.textContent.includes("Следующий шаг")) {
      btn.addEventListener("click", () => {
        if (currentPageIndex < pages.length - 1) {
          currentPageIndex++;
          showPage(currentPageIndex);
        }
      });
    }

    if (btn.textContent.includes("Назад")) {
      btn.addEventListener("click", () => {
        if (currentPageIndex > 0) {
          currentPageIndex--;
          showPage(currentPageIndex);
        }
      });
    }

    if (btn.textContent === "Получить") {
      btn.addEventListener("click", () => {
        hideAllButtons();
      });
    }
  });

  showPage(currentPageIndex);
}

setupNavigation();

const nextBtn = document.querySelector(".sports_shoes_section_divider_text_5");
const backBtn = document.querySelector(
  ".what_div_page2_product_shoes_bottom_page2_back_btn"
);
const checkboxes = document.querySelectorAll(".product_shoes_input");
const warning = document.querySelector(".warning_p_product_shoes");

your_selection_section_div_2_btn.addEventListener("click", () => {
  if (your_selection_section_div_2_img_2 === your_selection_section_div_2_btn) {
    your_selection_section_div_2_img_2.style.display = "none";
    your_selection_section_div_2_btn.style.display = "none";
    your_selection_section_div_warning_text.style.display = "block";
    your_selection_section_div_2_input.value = "";
    your_selection_section_div_2_input_2.value = "";
  } else {
    your_selection_section_div_2_img_2.style.display = "block";
    your_selection_section_div_2_btn.style.display = "none";
    your_selection_section_div_warning_text.style.display = "none";
  }
});

const our_team_section = document.querySelector(".our_team_section");
const our_team_section_divider = document.createElement("div");
our_team_section_divider.classList.add("our_team_section_divider");
our_team_section.appendChild(our_team_section_divider);

const our_team_section_divider_text = document.createElement("h2");
our_team_section_divider_text.classList.add("our_team_section_divider_text");
our_team_section_divider_text.textContent = "Наша команда";
our_team_section_divider.appendChild(our_team_section_divider_text);

const our_team_section_divider_cricle_1 = document.createElement("div");
our_team_section_divider_cricle_1.classList.add(
  "our_team_section_divider_cricle_1"
);
our_team_section_divider.appendChild(our_team_section_divider_cricle_1);

const our_team_section_divider_cricle_2 = document.createElement("div");
our_team_section_divider_cricle_2.classList.add(
  "our_team_section_divider_cricle_2"
);
our_team_section_divider.appendChild(our_team_section_divider_cricle_2);

const our_team_section_divider_cricle_3 = document.createElement("div");
our_team_section_divider_cricle_3.classList.add(
  "our_team_section_divider_cricle_3"
);
our_team_section_divider.appendChild(our_team_section_divider_cricle_3);

const our_team_section_divider_group = document.createElement("div");
our_team_section_divider_group.classList.add("our_team_section_divider_group");
our_team_section_divider.appendChild(our_team_section_divider_group);

const our_team_section_img_group_divider = document.createElement("div");
our_team_section_img_group_divider.classList.add(
  "our_team_section_img_group_divider"
);
our_team_section_divider_group.appendChild(our_team_section_img_group_divider);
const group_card_img = [
  {
    id: 1,
    img: "./public/image_group1.jpg",
  },
  {
    id: 2,
    img: "./public/image_group2.jpg",
  },
  {
    id: 3,
    img: "./public/image_group3.jpg",
  },
  {
    id: 4,
    img: "./public/image_group4.jpg",
  },
  {
    id: 5,
    img: "./public/image_group5.jpg",
  },
  {
    id: 6,
    img: "./public/image_group6.jpg",
  },
];

for (let i = 0; i < 6; i++) {
  const our_team_section_divider_img_card = document.createElement("div");
  our_team_section_divider_img_card.classList.add(
    "our_team_section_divider_img_card"
  );
  our_team_section_img_group_divider.appendChild(
    our_team_section_divider_img_card
  );
  const our_team_section_divider_img_card_img = document.createElement("img");
  our_team_section_divider_img_card_img.classList.add(
    "our_team_section_divider_img_card_img"
  );
  our_team_section_divider_img_card_img.src = `./public/image_group${
    i + 1
  }.jpg`;
  our_team_section_divider_img_card.appendChild(
    our_team_section_divider_img_card_img
  );
  const our_team_section_divider_img_card_text = document.createElement("p");
  our_team_section_divider_img_card_text.classList.add(
    "our_team_section_divider_img_card_text"
  );
  our_team_section_divider_img_card_text.textContent = "Максим Золотарев";
  our_team_section_divider_img_card.appendChild(
    our_team_section_divider_img_card_text
  );
  const our_team_section_divider_img_card_text_2 = document.createElement("p");
  our_team_section_divider_img_card_text_2.classList.add(
    "our_team_section_divider_img_card_text_2"
  );
  our_team_section_divider_img_card_text_2.textContent = "Администратор";
  our_team_section_divider_img_card.appendChild(
    our_team_section_divider_img_card_text_2
  );
}

const frequently_asked_questions_section = document.querySelector(
  ".frequently_asked_questions_section"
);
const frequently_asked_questions_section_divider =
  document.createElement("div");
frequently_asked_questions_section_divider.classList.add(
  "frequently_asked_questions_section_divider"
);
frequently_asked_questions_section.appendChild(
  frequently_asked_questions_section_divider
);

const frequently_asked_questions_section_divider_text =
  document.createElement("h2");
frequently_asked_questions_section_divider_text.classList.add(
  "frequently_asked_questions_section_divider_text"
);
frequently_asked_questions_section_divider_text.textContent =
  "Часто задаваемые вопросы";
frequently_asked_questions_section_divider.appendChild(
  frequently_asked_questions_section_divider_text
);

const frequently_asked_questions_section_divider_top_line =
  document.createElement("div");
frequently_asked_questions_section_divider_top_line.classList.add(
  "frequently_asked_questions_section_divider_top_line"
);
frequently_asked_questions_section_divider.appendChild(
  frequently_asked_questions_section_divider_top_line
);

const frequently_asked_questions_section_divider_question_1 =
  document.createElement("div");
frequently_asked_questions_section_divider_question_1.classList.add(
  "frequently_asked_questions_section_divider_question_1"
);
frequently_asked_questions_section_divider.appendChild(
  frequently_asked_questions_section_divider_question_1
);

const frequently_asked_questions_section_divider_question_1_div_group =
  document.createElement("div");
frequently_asked_questions_section_divider_question_1_div_group.classList.add(
  "frequently_asked_questions_section_divider_question_1_div_group"
);
frequently_asked_questions_section_divider_question_1.appendChild(
  frequently_asked_questions_section_divider_question_1_div_group
);

const frequently_asked_questions_section_divider_question_1_text =
  document.createElement("p");
frequently_asked_questions_section_divider_question_1_text.classList.add(
  "frequently_asked_questions_section_divider_question_1_text"
);
frequently_asked_questions_section_divider_question_1_text.textContent =
  "Вопрос 1";
frequently_asked_questions_section_divider_question_1_div_group.appendChild(
  frequently_asked_questions_section_divider_question_1_text
);

const frequently_asked_questions_section_divider_question_1_img =
  document.createElement("img");
frequently_asked_questions_section_divider_question_1_img.classList.add(
  "frequently_asked_questions_section_divider_question_1_img"
);
frequently_asked_questions_section_divider_question_1_img.src =
  "./public/close_img.svg";
frequently_asked_questions_section_divider_question_1_div_group.appendChild(
  frequently_asked_questions_section_divider_question_1_img
);

document
  .querySelector(".frequently_asked_questions_section_divider_question_1_img")
  .addEventListener("click", function () {
    if (
      frequently_asked_questions_section_divider_question_1_img.style
        .transform === "rotate(180deg)"
    ) {
      frequently_asked_questions_section_divider_question_1_img.style.transform =
        "rotate(0deg)";
      frequently_asked_questions_section_divider_question_p.style.display =
        "block";
    } else {
      frequently_asked_questions_section_divider_question_1_img.style.transform =
        "rotate(180deg)";
      frequently_asked_questions_section_divider_question_p.style.display =
        "none";
    }
  });

const frequently_asked_questions_section_divider_question_p =
  document.createElement("p");
frequently_asked_questions_section_divider_question_p.classList.add(
  "frequently_asked_questions_section_divider_question_p"
);
frequently_asked_questions_section_divider_question_p.textContent =
  "А это ответ 1: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими другими людьми";
frequently_asked_questions_section_divider_question_1.appendChild(
  frequently_asked_questions_section_divider_question_p
);

const frequently_asked_questions_section_divider_question_line_2 =
  document.createElement("div");
frequently_asked_questions_section_divider_question_line_2.classList.add(
  "frequently_asked_questions_section_divider_question_line_2"
);
frequently_asked_questions_section_divider.appendChild(
  frequently_asked_questions_section_divider_question_line_2
);

const frequently_asked_questions_section_divider_question_2 =
  document.createElement("div");
frequently_asked_questions_section_divider_question_2.classList.add(
  "frequently_asked_questions_section_divider_question_2"
);
frequently_asked_questions_section_divider.appendChild(
  frequently_asked_questions_section_divider_question_2
);

const frequently_asked_questions_section_divider_question_2_div_group =
  document.createElement("div");
frequently_asked_questions_section_divider_question_2_div_group.classList.add(
  "frequently_asked_questions_section_divider_question_1_div_group"
);
frequently_asked_questions_section_divider_question_2.appendChild(
  frequently_asked_questions_section_divider_question_2_div_group
);

const frequently_asked_questions_section_divider_question_2_text =
  document.createElement("p");
frequently_asked_questions_section_divider_question_2_text.classList.add(
  "frequently_asked_questions_section_divider_question_1_text"
);
frequently_asked_questions_section_divider_question_2_text.textContent =
  "Вопрос 2";
frequently_asked_questions_section_divider_question_2_div_group.appendChild(
  frequently_asked_questions_section_divider_question_2_text
);

const frequently_asked_questions_section_divider_question_2_img =
  document.createElement("img");
frequently_asked_questions_section_divider_question_2_img.classList.add(
  "frequently_asked_questions_section_divider_question_2_img"
);
frequently_asked_questions_section_divider_question_2_img.src =
  "./public/plus_image.png";
frequently_asked_questions_section_divider_question_2_div_group.appendChild(
  frequently_asked_questions_section_divider_question_2_img
);

document
  .querySelector(".frequently_asked_questions_section_divider_question_2_img")
  .addEventListener("click", function () {
    if (
      frequently_asked_questions_section_divider_question_2_img.style
        .transform === "rotate(180deg)"
    ) {
      frequently_asked_questions_section_divider_question_2_img.style.transform =
        "rotate(0deg)";
      frequently_asked_questions_section_divider_question_2_p.style.display =
        "block";
    } else {
      frequently_asked_questions_section_divider_question_2_img.style.transform =
        "rotate(180deg)";
      frequently_asked_questions_section_divider_question_2_p.style.display =
        "none";
    }
  });

const frequently_asked_questions_section_divider_question_2_p =
  document.createElement("p");
frequently_asked_questions_section_divider_question_2_p.classList.add(
  "frequently_asked_questions_section_divider_question_p"
);
frequently_asked_questions_section_divider_question_2_p.textContent =
  "А это ответ 2: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими другими людьми";
frequently_asked_questions_section_divider_question_2.appendChild(
  frequently_asked_questions_section_divider_question_2_p
);

const frequently_asked_questions_section_divider_question_line_3 =
  document.createElement("div");
frequently_asked_questions_section_divider_question_line_3.classList.add(
  "frequently_asked_questions_section_divider_question_line_3"
);
frequently_asked_questions_section_divider.appendChild(
  frequently_asked_questions_section_divider_question_line_3
);

const contact_divider_section = document.querySelector(
  ".contact_divider_section"
);
const contact_divider_section_divider = document.createElement("div");
contact_divider_section_divider.classList.add(
  "contact_divider_section_divider"
);
contact_divider_section.appendChild(contact_divider_section_divider);

const contact_divider_section_divider_title_block_divider =
  document.createElement("div");
contact_divider_section_divider_title_block_divider.classList.add(
  "contact_divider_section_divider_title_block_divider"
);
contact_divider_section_divider.appendChild(
  contact_divider_section_divider_title_block_divider
);

const contact_divider_section_divider_title_block_divider_text =
  document.createElement("h2");
contact_divider_section_divider_title_block_divider_text.classList.add(
  "contact_divider_section_divider_title_block_divider_text"
);
contact_divider_section_divider_title_block_divider_text.textContent =
  "Контакты";
contact_divider_section_divider_title_block_divider.appendChild(
  contact_divider_section_divider_title_block_divider_text
);

const contact_divider_section_divider_title_block_divider_p_divder_flex =
  document.createElement("div");
contact_divider_section_divider_title_block_divider_p_divder_flex.classList.add(
  "contact_divider_section_divider_title_block_divider_p_divder_flex"
);
contact_divider_section_divider_title_block_divider.appendChild(
  contact_divider_section_divider_title_block_divider_p_divder_flex
);

const contact_divider_section_divider_title_block_divider_p =
  document.createElement("p");
contact_divider_section_divider_title_block_divider_p.classList.add(
  "contact_divider_section_divider_title_block_divider_p"
);
contact_divider_section_divider_title_block_divider_p.textContent =
  "Главный офис";
contact_divider_section_divider_title_block_divider_p_divder_flex.appendChild(
  contact_divider_section_divider_title_block_divider_p
);

const contact_divider_section_divider_title_block_divider_p_img_div =
  document.createElement("div");
contact_divider_section_divider_title_block_divider_p_img_div.classList.add(
  "contact_divider_section_divider_title_block_divider_p_img_div"
);
contact_divider_section_divider_title_block_divider_p_img_div.textContent = "?";
contact_divider_section_divider_title_block_divider_p_divder_flex.appendChild(
  contact_divider_section_divider_title_block_divider_p_img_div
);

const contact_divider_section_divider_help = document.createElement("div");
contact_divider_section_divider_help.classList.add(
  "contact_divider_section_divider_help"
);
contact_divider_section_divider_title_block_divider_p_img_div.appendChild(
  contact_divider_section_divider_help
);

const contact_divider_section_divider_help_img = document.createElement("img");
contact_divider_section_divider_help_img.classList.add(
  "contact_divider_section_divider_help_img"
);
contact_divider_section_divider_help_img.src = "./public/help_div_img.png";
contact_divider_section_divider_help.appendChild(
  contact_divider_section_divider_help_img
);

const contact_divider_section_divider_number = document.createElement("p");
contact_divider_section_divider_number.classList.add(
  "contact_divider_section_divider_number"
);
contact_divider_section_divider_number.textContent = "+7 800 789 89 89";
contact_divider_section_divider_title_block_divider.appendChild(
  contact_divider_section_divider_number
);
const contact_divider_section_divider_ptext2 = document.createElement("p");
contact_divider_section_divider_ptext2.classList.add(
  "contact_divider_section_divider_ptext2"
);
contact_divider_section_divider_ptext2.textContent =
  "г. Санкт-Петербург, Комсомольская, 43 к1";
contact_divider_section_divider_title_block_divider.appendChild(
  contact_divider_section_divider_ptext2
);

const contact_divider_section_divider_otdel_prodatel =
  document.createElement("p");
contact_divider_section_divider_otdel_prodatel.classList.add(
  "contact_divider_section_divider_otdel_prodatel"
);
contact_divider_section_divider_otdel_prodatel.textContent = "отдел продаж";
contact_divider_section_divider_title_block_divider.appendChild(
  contact_divider_section_divider_otdel_prodatel
);

const contact_divider_section_divider_location = document.createElement("p");
contact_divider_section_divider_location.classList.add(
  "contact_divider_section_divider_location"
);
contact_divider_section_divider_location.textContent = "+7 800 789 89 89";
contact_divider_section_divider_title_block_divider.appendChild(
  contact_divider_section_divider_location
);

const contact_divider_section_divider_ptext = document.createElement("p");
contact_divider_section_divider_ptext.classList.add(
  "contact_divider_section_divider_ptext"
);
contact_divider_section_divider_ptext.textContent =
  "г. Санкт-Петербург, Комсомольская, 43 к1";
contact_divider_section_divider_title_block_divider.appendChild(
  contact_divider_section_divider_ptext
);

const contact_divider_section_divider_image_social_group =
  document.createElement("div");
contact_divider_section_divider_image_social_group.classList.add(
  "contact_divider_section_divider_image_social_group"
);
contact_divider_section_divider_title_block_divider.appendChild(
  contact_divider_section_divider_image_social_group
);

const contact_divider_section_divider_image_social_group_image =
  document.createElement("img");
contact_divider_section_divider_image_social_group_image.classList.add(
  "contact_divider_section_divider_image_social_group_image"
);
contact_divider_section_divider_image_social_group_image.src =
  "./public/Instagram3.svg";
contact_divider_section_divider_image_social_group.appendChild(
  contact_divider_section_divider_image_social_group_image
);

const contact_divider_section_divider_image_social_group_image_2 =
  document.createElement("img");
contact_divider_section_divider_image_social_group_image_2.classList.add(
  "contact_divider_section_divider_image_social_group_image"
);
contact_divider_section_divider_image_social_group_image_2.src =
  "./public/VK3.svg";
contact_divider_section_divider_image_social_group.appendChild(
  contact_divider_section_divider_image_social_group_image_2
);

const contact_divider_section_divider_map_divider =
  document.createElement("div");
contact_divider_section_divider_map_divider.classList.add(
  "contact_divider_section_divider_map_divider"
);
contact_divider_section_divider.appendChild(
  contact_divider_section_divider_map_divider
);

const contact_divider_section_divider_map_divider_code =
  document.createElement("div");
contact_divider_section_divider_map_divider_code.classList.add(
  "contact_divider_section_divider_map_divider_code"
);
contact_divider_section_divider_map_divider_code.innerHTML = `<div style="position: relative;"><div style="position: relative; padding-bottom: 75%; height: 0; overflow: hidden;"><iframe style="position: absolute; top: 0; left: 0; width: 680px; height: 497.41px; border:0;" loading="lazy" allowfullscreen src="https://maps.google.com/maps?q=azerbaijan&output=embed"></iframe></div><a href="http://aiyoutubetitlegenerator.com/" rel="noopener" target="_blank" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;">aiyoutubetitlegenerator.com</a></div>`;
contact_divider_section_divider_map_divider.appendChild(
  contact_divider_section_divider_map_divider_code
);

const social_media_section = document.querySelector(".social_media_section");
const social_media_section_divider = document.createElement("div");
social_media_section_divider.classList.add("social_media_section_divider");
social_media_section.appendChild(social_media_section_divider);

const social_media_divider_form = document.createElement("form");
social_media_divider_form.classList.add("social_media_divider_form");
social_media_section_divider.appendChild(social_media_divider_form);

const social_media_divider_form_text = document.createElement("h2");
social_media_divider_form_text.classList.add("social_media_divider_form_text");
social_media_divider_form_text.textContent = "Есть вопросы?";
social_media_divider_form.appendChild(social_media_divider_form_text);

const social_media_divider_form_text_2 = document.createElement("p");
social_media_divider_form_text_2.classList.add(
  "social_media_divider_form_text_2"
);
social_media_divider_form_text_2.innerHTML = `Заполните форму и наш<br> менеджер свяжется с вами`;
social_media_divider_form.appendChild(social_media_divider_form_text_2);

const social_media_divider_input_1 = document.createElement("input");
social_media_divider_input_1.classList.add("social_media_divider_input_1");
social_media_divider_input_1.type = "text";
social_media_divider_input_1.placeholder = "Введите ваше имя";
social_media_divider_form.appendChild(social_media_divider_input_1);

const social_media_divider_input_2 = document.createElement("input");
social_media_divider_input_2.classList.add("social_media_divider_input_2");
social_media_divider_input_2.type = "text";
social_media_divider_input_2.placeholder = "Введите ваше сообщение";
social_media_divider_form.appendChild(social_media_divider_input_2);

const social_media_divider_button = document.createElement("button");
social_media_divider_button.classList.add("social_media_divider_button");
social_media_divider_button.setAttribute("type", "submit");
social_media_divider_button.textContent = "Отправить";
social_media_divider_form.appendChild(social_media_divider_button);

const social_img_group = document.createElement("div");
social_img_group.classList.add("social_img_group");
social_media_section_divider.appendChild(social_img_group);

const social_media_divider_image_social_group = document.createElement("div");
social_media_divider_image_social_group.classList.add(
  "social_media_divider_image_social_group"
);
social_img_group.appendChild(social_media_divider_image_social_group);

const social_media_divider_image_social_group_image_1 =
  document.createElement("img");
social_media_divider_image_social_group_image_1.classList.add(
  "social_media_divider_image_social_group_image_1"
);
social_media_divider_image_social_group_image_1.src =
  "./public/instagram_logo.png";
social_media_divider_image_social_group.appendChild(
  social_media_divider_image_social_group_image_1
);

const social_media_divider_img_group = document.createElement("div");
social_media_divider_img_group.classList.add("social_media_divider_img_group");
social_img_group.appendChild(social_media_divider_img_group);

const social_media_divider_img_group_image_1 = document.createElement("img");
social_media_divider_img_group_image_1.classList.add(
  "social_media_divider_img_group_image_1"
);
social_media_divider_img_group_image_1.src = "./public/follwer.jpg";
social_media_divider_img_group.appendChild(
  social_media_divider_img_group_image_1
);

const social_media_divider_img_group_image_2 = document.createElement("img");
social_media_divider_img_group_image_2.classList.add(
  "social_media_divider_img_group_image_2"
);
social_media_divider_img_group_image_2.src = "./public/fiweng.jpg";
social_media_divider_img_group.appendChild(
  social_media_divider_img_group_image_2
);

const social_media_divider_img_group_image_3 = document.createElement("img");
social_media_divider_img_group_image_3.classList.add(
  "social_media_divider_img_group_image_3"
);
social_media_divider_img_group_image_3.src = "./public/dog_2.jpg";
social_media_divider_img_group.appendChild(
  social_media_divider_img_group_image_3
);

const social_media_divider_img_group_image_4 = document.createElement("img");
social_media_divider_img_group_image_4.classList.add(
  "social_media_divider_img_group_image_4"
);
social_media_divider_img_group_image_4.src = "./public/menzere_2.jpg";
social_media_divider_img_group.appendChild(
  social_media_divider_img_group_image_4
);

const social_media_divider_img_group_image_5 = document.createElement("img");
social_media_divider_img_group_image_5.classList.add(
  "social_media_divider_img_group_image_5"
);
social_media_divider_img_group_image_5.src = "./public/binalar_2.jpg";
social_media_divider_img_group.appendChild(
  social_media_divider_img_group_image_5
);

const footer_section = document.querySelector(".footer_section");
const footer_section_divider = document.createElement("div");
footer_section_divider.classList.add("footer_section_divider");
footer_section.appendChild(footer_section_divider);

const footer_section_divider_logo_div = document.createElement("div");
footer_section_divider_logo_div.classList.add(
  "footer_section_divider_logo_div"
);
footer_section_divider.appendChild(footer_section_divider_logo_div);

const footer_section_divider_logo = document.createElement("h2");
footer_section_divider_logo.classList.add("footer_section_divider_logo");
footer_section_divider_logo.textContent = "SneakMax";
footer_section_divider_logo_div.appendChild(footer_section_divider_logo);

const footer_section_bottom_nav = document.createElement("div");
footer_section_bottom_nav.classList.add("footer_section_bottom_nav");
footer_section_divider.appendChild(footer_section_bottom_nav);

const footer_section_bottom_nav_link = document.createElement("a");
footer_section_bottom_nav_link.classList.add("footer_section_bottom_nav_link");
footer_section_bottom_nav_link.textContent = "Каталог";
footer_section_bottom_nav.appendChild(footer_section_bottom_nav_link);

const footer_section_bottom_nav_link_2 = document.createElement("a");
footer_section_bottom_nav_link_2.classList.add(
  "footer_section_bottom_nav_link"
);
footer_section_bottom_nav_link_2.textContent = "О нас";
footer_section_bottom_nav.appendChild(footer_section_bottom_nav_link_2);

const footer_section_bottom_nav_link_3 = document.createElement("a");
footer_section_bottom_nav_link_3.classList.add(
  "footer_section_bottom_nav_link"
);
footer_section_bottom_nav_link_3.textContent = "Подбор товара";
footer_section_bottom_nav.appendChild(footer_section_bottom_nav_link_3);

const footer_section_bottom_nav_link_4 = document.createElement("a");
footer_section_bottom_nav_link_4.classList.add(
  "footer_section_bottom_nav_link"
);
footer_section_bottom_nav_link_4.textContent = "Наша команда";
footer_section_bottom_nav.appendChild(footer_section_bottom_nav_link_4);

const footer_section_bottom_nav_link_5 = document.createElement("a");
footer_section_bottom_nav_link_5.classList.add(
  "footer_section_bottom_nav_link"
);
footer_section_bottom_nav_link_5.textContent = "Доставка и оплата";
footer_section_bottom_nav.appendChild(footer_section_bottom_nav_link_5);

const footer_section_bottom_nav_link_6 = document.createElement("a");
footer_section_bottom_nav_link_6.classList.add(
  "footer_section_bottom_nav_link"
);
footer_section_bottom_nav_link_6.textContent = "Контакты";
footer_section_bottom_nav.appendChild(footer_section_bottom_nav_link_6);
