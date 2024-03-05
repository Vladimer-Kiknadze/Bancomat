// html ში id ელემენტების "გაცოცხლება" , ანუ ფუნქციალურობა document.getElementById მეშვეობით
const loginArea = document.getElementById("login-area"),
  TBC = document.getElementById("TBC-bank"),
  deposit = document.getElementById("deposit"),
  withdraw = document.getElementById("withdraw"),
  balance = document.getElementById("balance"),
  depositInput = document.getElementById("deposit-input"),
  withdrawInput = document.getElementById("withdraw-input"),
  depositBtn = document.getElementById("deposit-btn"),
  withdrawBtn = document.getElementById("withdraw-btn"),
  submitBtn = document.getElementById("submit-btn");

// როდესაც login გავივლით შემდეგ შევიდეთ Tbc bank atm ში.
submitBtn.addEventListener("click", () => {
  loginArea.style.display = "none"; // ლოგინ არეა display none რადგან აღარ გამოჩნდეს და
  TBC.classList.remove("d-none"); // რადგან TBC ანყოფილებაზე გვაქვს მიცემული ჩვენ ბუთსტრაპის მეშვეობით d-none, რომ გამოჩნდეს ვუკეთებთ ამ კლასს remove-ს
});

// თანხის შეტანის განყოფილების ფუნქცია addEventListener - ის მეშვეობით . როდესაც ჩვენ დეპოზიტს გავაკეთებთ ინახება ეს ცვლად value-ში
// შემდეგ ეს ცვლადი ინახება depositValue-ს ცვლადში , რადგან აისახოს რამდენი დეპოზიტი გავაკეთეთ.
depositBtn.addEventListener(`click`, () => {
  const value = depositInput.value;
  const depositValue = Number(deposit.innerText) + Number(value);
  const balanceValue = Number(balance.innerText) + Number(value);
  deposit.innerText = depositValue;
  balance.innerText = balanceValue;
  depositInput.value = "";
});

// withdraw-შიც იგივე ხდება უბრალოდ დამატებულია ვალიდაცია
withdrawBtn.addEventListener("click", () => {
  const value = withdrawInput.value;
  if (Number(value) === 0) {
    alert("მიუთითეთ თანხა გამოსატანად!");
  } else if (Number(value) > Number(balance.innerText)) {
    alert("თქვენ არ გაქვთ საკმარისი თანხა ბალანსზე!");
  } else {
    const balanceValue = Number(balance.innerText) - Number(value);
    const withdrawValue = Number(withdraw.innerText) + Number(value);
    withdraw.innerText = withdrawValue;
    balance.innerText = balanceValue;
    withdrawInput.value = "";
  }
});
