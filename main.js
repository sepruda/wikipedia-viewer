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

	$("#container").html(""); //tømmer resultatlisten, så nye søgninger ikke tilføjes under tidigere søgninger
  

	data.query.search.forEach(element => { //går hvert element i arrayet fra API'en igennem

	      
	      // A-taget bliver den ydre ramme for at gøre hvert kort til et link
	      const articleLink = document.createElement('a');
	      articleLink.setAttribute('href', 'https://en.wikipedia.org/?curid=' + element.pageid);
	      articleLink.setAttribute('target', '_blank');
	      articleLink.setAttribute('class', 'searchCard');

	      const card = document.createElement('div');
	      card.setAttribute('class', 'card bg-light text-dark mb-4 pl-2 pt-2' );

	      
	      articleLink.appendChild(card);
	     

	      const h1 = document.createElement('h5');
	      h1.textContent = element.title;
	      
	      const p = document.createElement('p');
	      p.innerHTML = `${element.snippet}...`;

	      //link.innerHTML = articleLink + element.pageid;
	      card.appendChild(h1);
	      card.appendChild(p);

	      container.appendChild(articleLink);
	      

	
	 });	
}


