var enemy;
var hero;

var characters = [{
		id: 'yoda',
		color: 'green'
	}, {
		id: 'kenobi',
		color: 'blue'
	}, {
		id: 'Dooku',
		color: 'red'
	}, {
		id: 'grievous',
		color: 'orange'
	}];

	function addClickListeners() {
		$('.character').click(assignCharacter);
	}

	function assignCharacter(){
		if (hero && enemy) return;

		if (hero) {
			enemy = $(this).appendTo('#enemy');
			$('#attack').show();
		} else {
			hero = $(this).appendTo('#hero');
		}
	}

function buildCharacters() {
	
	for (var i = 0; i < characters.length; i++) {
		var currentCharacter = characters[i];
		$('#characters').append('<div class="character" id=' + currentCharacter.id + ' style="width: 100px; height: 100px; background-color: ' + currentCharacter.color + ' "></div>')
	}
}
	buildCharacters();
	addClickListeners();