if (localStorage.getItem('initialized') === null) {
  $.getJSON('data/clubs.json', function (data) {
    for (let i = 0; i < data.length; i++) {
      localStorage.setItem('club-' + uuidv4(), data[i]);
    }

    localStorage.setItem('initialized', 'true');
  }).fail(function () {
    console.log('An error has occurred.');
  });
} else {
  console.log('Clubs already saved to local storage.');
}

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
