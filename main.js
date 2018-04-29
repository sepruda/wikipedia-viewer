var subButton = document.getElementById('btn');
subButton.addEventListener('click', returnSearch);
$("#search").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#btn").click();
    }
});

function returnSearch () {
	
	let url = 'https://en.wikipedia.org/w/api.php?';
	let param = {
    'action' : 'query',
    'format' : 'json',
    'limit' : 10,
    'list' : 'search',
    'srsearch' : searchStr(),
	}

	$.getJSON(url, param, showSearch);
}

function searchStr() {

	var felt = $('#search').val();
	return felt;
}

function showSearch(data) {
	console.log(data);
	for (var i = 0 ; i < 10 ; i++) {
		var pageTitle = data.query.search[i].title;
		var pageSnippet = data.query.search[i].snippet;

	}
	data.query.search.forEach(element => {

	      const card = document.createElement('div');
	      card.setAttribute('class', 'card bg-light text-dark mb-4 pl-2 pt-2', );
	      const articleLink = 'https://en.wikipedia.org/?curid=';

	      const h1 = document.createElement('h5');
	      h1.textContent = element.title;
	      
	      const p = document.createElement('p');
	      p.innerHTML = `${element.snippet}...`;

	      const link = document.createElement('a')
	      link.innerHTML = articleLink + element.pageid;


	      container.appendChild(card);
	      card.appendChild(h1);
	      card.appendChild(p);
	      card.appendChild(link);

	
	 });	
}


