/*
Genel Plan:

    1-) Form seçimi
    2-) Input Bilgisini UL içerisine ekle
    3-) Form içindeki bilgiyi sıfırla
    4-) Eğer forma bilgi girilmez ise kullanıcıyı uyar
*/

let formDom = document.querySelector("#userForm");
formDom.addEventListener("submit", formHandler);

function formHandler(event) {
  event.preventDefault();

  const fullNameDOM = document.querySelector("#fullName");
  const scoreInputDOM = document.querySelector("#score");

  const alertScoreMessage = "Lütfen 0 ile 100 arasında bir sayı giriniz!!!";
  const alertSuccessMessage = "Başarılı bir şekilde eklendi";
  const alertEmptyMessage = "Lütfen boş bıraktığınız alanları doldurun";
  let alertDOM = document.querySelector("#alert");

  function addAlert(message, alertType) {
   if (document.getElementById("alert-item")) {
      document.getElementById("alert-item").remove();
    }
    
    let divDOM = document.createElement("div");
    divDOM.setAttribute("id", "alert-item");
    divDOM.classList.add(
      "alert",
      alertType,
      "alert-dismissible",
      "fade",
      "show"
    );
    divDOM.innerHTML = `<strong>${message}</strong> 
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      `;
    alertDOM.append(divDOM);
  }

  if (fullNameDOM.value && scoreInputDOM.value) {
    if (scoreInputDOM.value >= 0 && scoreInputDOM.value <= 100) {
      addItem(fullNameDOM.value, scoreInputDOM.value);

      scoreInputDOM.value = "";
      fullNameDOM.value = "";
      addAlert(alertSuccessMessage, "alert-success");
    } else {
      addAlert(alertScoreMessage, "alert-danger");
    }
  } else {
    addAlert(alertEmptyMessage, "alert-warning");
  }
}

let userListDOM = document.querySelector("#userList");

function addItem(userName, score) {
  let liDOM = document.createElement("li");
  liDOM.classList.add("list-group-item");
  liDOM.innerHTML = `${userName} <span class='badge bg-primary float-end'>${score}</span>`;
  userListDOM.append(liDOM);
}
