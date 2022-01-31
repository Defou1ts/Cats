
const imageElement = document.querySelector('img');

function takeRandomCat() {
   fetch('http://aws.random.cat//meow')
      .then((resp) => resp.json())
      .then(function (data) {
         imageElement.src = data.file
      })
}

const takeRandomCatButton = document.querySelector('button');

takeRandomCatButton.addEventListener('click', takeRandomCat)