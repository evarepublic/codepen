const cityArr = {
  rus: [
    "Москва",
    "Санк-Петербург",
    "Новосибирск",
    "Екатеринбург",
    "Нижний Новгород",
    "Казань",
    "Челябинск",
  ],
  uk: ["Киев", "Харьков", "Одесса", "Днепр", "Донецк", "Запорожье", "Львов"],
  bel: ["Минск", "Гомель", "Могилёв", "Витебск", "Гродно", "Брест"],
  jap: ["Токио", "Киото", "Осака", "Иокогама"],
};

const country = document.getElementById("country");
const city = document.getElementById("city");
const res = document.querySelector(".result");

const cityOptions = () => {
  res.textContent = "";
  const cities = cityArr[country.value];
  let options = "";
  for (let i = 0; i < cities.length; i++) {
    options += `<option value="${i}">${cities[i]}</option>\n`;
  }
  city.innerHTML = options;
  city.style.display = "inline-block";
};

const showResult = () => {
  const str =
    country.querySelector(`[value="${country.value}"]`).textContent +
    " " +
    city.querySelector(`[value="${city.value}"]`).textContent;
  res.textContent = str;
};

country.addEventListener("change", cityOptions);
city.addEventListener("change", showResult);
