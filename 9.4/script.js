const windowResult = document.querySelector(".window__result");
const btnGetNumber = document.querySelector(".get__number");

btnGetNumber.addEventListener("click", () => {
  const valueWidth = document.querySelector(".input__number__one").value;
  const valueHeight = document.querySelector(".input__number__two").value;

  // проверка диапазона размеров
  if (
    valueHeight < 100 ||
    valueHeight > 300 ||
    valueWidth < 100 ||
    valueWidth > 300
  ) {
    windowResult.innerHTML = `
	 <div class="card"><p style="color:#FF0000">Одно из чисел вне диапазона от 100 до 300!</p></div>
	 `;
  } else {
    // fetch запрос
    // fetch('https://picsum.photos/100/300')
    fetch(`https://picsum.photos/${valueWidth}/${valueHeight}`)
      .then((response) => {
        // console.log('ok');
        const cards = `
					 <div class="card"><img src="${response.url}" class="card-image"/></div>
					 `;
        windowResult.innerHTML = cards;
      })
      .catch(() => {
        console.log("error");
      });
  }
});
