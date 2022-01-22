$(document).ready(function () {
  //   let container = document.querySelector('div.container-complete-clubs');
  //   let clubs = JSON.parse(localStorage.getItem('clubs') || '[]');
  //   console.log(clubs);
  //   for (let i = 0; i < data.length; i++) {
  //     let clubBox = createElement(data[i].name, data[i].link);
  //     container.appendChild(clubBox);
  //   }
});

function createElement(name, linkAddress, uuid) {
  const element = document.createElement('div');

  //Make a link which has link set to clubLink and outward name as Club name
  var link = document.createElement('a');
  var linkText = document.createTextNode(name);
  link.appendChild(linkText);
  link.href = linkAddress;
  link.title = uuid;
  element.appendChild(link);
  return element;
}
