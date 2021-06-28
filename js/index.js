var container = document.getElementById('container');

var input1 = document.getElementById('input-1');
var input2 = document.getElementById('input-2');
var input3 = document.getElementById('input-3');
var input4 = document.getElementById('input-4');
var input5 = document.getElementById('input-5');
var input6 = document.getElementById('input-6');
var input7 = document.getElementById('input-7');
var input8 = document.getElementById('input-8');

var labels = {
  titulo: 'TÍTULO',
  descricao: 'DESCRIÇÃO',
  quartos: 'QUARTOS',
  vagas: 'VAGAS DE GARAGEM',
  areaTerreno: 'ÁREA DE TERRENO',
  areaConstruida: 'ÁREA CONSTRUÍDA',
  localidade: 'LOCALIDADE',
  preco: 'PREÇO'
};

function onClickButton() {
  var dadosInput = {
    titulo: input1.value,
    descricao: input2.value,
    quartos: input3.value,
    vagas: input4.value,
    areaTerreno: input5.value,
    areaConstruida: input6.value,
    localidade: input7.value,
    preco: input8.value
  };

  console.log({ dadosInput });

  createList(dadosInput);
}

function createList(dado) {
  console.log({ dado });
  var ulElement = document.createElement('ul');

  // CSS PARA O UL
  // ulElement.style.margin = '30px';
  // ulElement.style.border = '1px solid #000';
  ulElement.style.listStyle = 'none';

  Object.entries(dado).map(function (array) {
    var key = array[0];
    var value = array[1];

    let li = document.createElement('li');
    var text = document.createTextNode(`${labels[key]} : ${value}`);

    li.appendChild(text);
    ulElement.appendChild(li);
  });

  console.log(ulElement);
  container.appendChild(ulElement);
  container.appendChild(document.createElement('hr'));
}
