<!DOCTYPE html>
<html>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link href="css/style.css" rel="stylesheet"/>
<head>
	<title>Info 3 Kviz</title>
</head>
<body>
	<nav id="slideTraka">
		<button class="slideGumb" onclick="promijeniSlide('specificni_slide', 0)">1</button>
		<button class="slideGumb" onclick="promijeniSlide('specificni_slide', 1)">2</button>
		<button class="slideGumb" onclick="promijeniSlide('specificni_slide', 2)">3</button>
		<button class="slideGumb" onclick="promijeniSlide('specificni_slide', 3)">4</button>
	</nav>
	<div id="warning">
		<p>Već ste odabrali maksimalan mogući broj odgovora za ovo pitanje.</p>
	</div>
	<h2 id="pitanjeTekst"></h2>
	<div id="odgovori"></div>
	<br>
	<br>
	<div id="ostaliGumbi">
		<button id="prethodniGumb" disabled onclick="promijeniSlide('prethodni_slide')">Prethodno pitanje</button>
		<button id="sljedeciGumb" onclick="promijeniSlide('sljedeci_slide')">Sljedeće pitanje</button>
		<button id="rezultatiGumb" onclick="prikaziRezultate()" disabled>Prikaži rezultate</button>
		<button id="noviKvizGumb" onclick="window.location.reload();">Novi kviz</button>
	</div>
<script src="js/script.js"></script>
</body>
</html>