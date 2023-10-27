function validate() {
  let name = document.getElementById("name");
  let group = document.getElementById("group");
  let phone = document.getElementById("phone");
  let faculty = document.getElementById("faculty");
  let adress = document.getElementById("adress");

  var name_reg = /^[А-ЯЄІЇҐ][А-ЯЄІЇҐа-яєіїґ]{2,14}\s[А-ЯЄІЇҐ]\.\s[А-ЯЄІЇҐ]\.$/;
  var group_reg = /^[А-ЯҐЄІЇA-Zа-яґєіїa-z]{2}-\d{2}$/;
  var phone_reg = /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;
  var faculty_reg = /^[А-ЯҐЄІЇA-Zа-яґєіїa-z]{2,4}$/;
  var adress_reg = /^[А-ЯҐЄІЇA-Zа-яґєіїa-z-]{3,17}$/;

  if (!name_reg.test(name.value)) {
    name.style.border = "2px solid red";
    return false;
  } else {
    name.style.border = "1px solid #9ACD32";
  }

  if (!group_reg.test(group.value)) {
    group.style.border = "2px solid red";
    return false;
  } else {
    group.style.border = "1px solid #9ACD32";
  }

  if (!phone_reg.test(phone.value)) {
    phone.style.border = "2px solid red";
    return false;
  } else {
    phone.style.border = "1px solid #9ACD32";
  }

  if (!faculty_reg.test(faculty.value)) {
    faculty.style.border = "2px solid red";
    return false;
  } else {
    faculty.style.border = "1px solid #9ACD32";
  }

  if (!adress_reg.test(adress.value)) {
    adress.style.border = "2px solid red";
    return false;
  } else {
    adress.style.border = "1px solid #9ACD32";
  }

  // Збереження даних для виведення
  var dataToDisplay = "ПІБ: " + name.value + "<br>" +
                      "Група: " + group.value + "<br>" +
                      "Телефон: " + phone.value + "<br>" +
                      "Факультет: " + faculty.value + "<br>" +
                      "Адреса: " + adress.value;

  // Функція для відкриття нового вікна та виведення даних
  function openNewWindow(data) {
    var newWindow = window.open('', 'Введені дані', 'width=400, height=200');
    newWindow.document.write('<h2>Введені дані:</h2>');
    newWindow.document.write('<p>' + data + '</p>');
    newWindow.focus();
  }

  // Виклик функції для відкриття нового вікна та виведення даних
  openNewWindow(dataToDisplay);

  // Повернення false, оскільки ми відкриваємо нове вікно, і форма не повинна бути відправлена
  return false;
}