/**
 * Функция-обертка над XMLHttpRequest, осуществляющая запрос
 * url - урл, по которому будет осуществляться запрос
 * callback - функция, которая вызовется при успешном выполнении
 * и первым параметром получит объект-результат запроса
 */
function useRequest(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log("Статус ответа: ", xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };

  xhr.onerror = function () {
    console.log("Ошибка! Статус ответа: ", xhr.status);
  };

  xhr.send();
}

/**
 * Функция обработки полученного результата
 * apiData - объект с результатом запроса
 */
function displayResult(apiData) {
  let cards = "";

  apiData.forEach((item) => {
    const cardBlock = `
			<div class="card">
				<img
					src="${item.download_url}"
					class="card-image"
				/>
				<p>${item.author}</p>
			</div>
		`;
    cards = cards + cardBlock;
  });

  windowResult.innerHTML = cards;
}

const windowResult = document.querySelector(".window__result");
const btnGetNumber = document.querySelector(".get__number");

btnGetNumber.addEventListener("click", () => {
  const value = document.querySelector(".input__number").value;
  if (!value) {
    return;
  }
  if (value < 1 || value > 10) {
    alert("число вне диапазона от 1 до 10");
  } else {
    let requestLink = `https://picsum.photos/v2/list/?limit=${value}`;
    useRequest(requestLink, displayResult);
  }
});
