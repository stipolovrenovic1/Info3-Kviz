var nBrojOdgovora = [];
const nBrojDostupnihOdgovora = [3, 4, 5, 6];
var nTrenutnoPitanje = 0;
var nOdabraniOdgovori = [];
var nOdabraniOdgovoriSvi = [];
var slideDugmad = document.querySelectorAll(".slideGumb");
var odgovoriDugmad;

document.addEventListener('DOMContentLoaded', pripremiKviz, false);


function pripremiKviz()
{
	for(var i = 0; i < 4; i++)
	{
		nBrojOdgovora.push(Math.floor(Math.random() * (8 - 2 + 1)) + 2);
	}

	document.getElementById("pitanjeTekst").innerText = "Ovo je pitanje broj 1.";

	stvoriOdgovore(nBrojOdgovora[0]);
}

function stvoriOdgovore(brojOdgovora)
{
	document.getElementById("odgovori").innerHTML = "";

	for(var i = 0; i < brojOdgovora; i++)
	{
		if(i % 2 == 0 && i > 0)
		{
			document.getElementById("odgovori").appendChild(document.createElement("br"));
			document.getElementById("odgovori").appendChild(document.createElement("br"));
		}
		
		var odgovorGumb = document.createElement("button");
		odgovorGumb.className = "odgovor";
		odgovorGumb.value = i + 1;
		odgovorGumb.innerText = i + 1;
		odgovorGumb.onclick = function()
		{			
		
			if(nOdabraniOdgovori.length == nBrojDostupnihOdgovora[nTrenutnoPitanje])
			{
				var warningText = document.getElementById("warning");
				warningText.style.display = "block";

				setTimeout(() => {
					warningText.style.webkitAnimation = "fadeout 3s forwards";
					warningText.style.MozAnimation = "fadeout 3s forwards";
					warningText.style.OAnimation = "fadeout 3s forwards";
					warningText.style.msAnimation = "fadeout 3s forwards";
			  		warningText.style.animation = "fadeout 3s forwards";
				},"3000")

			    setTimeout(() => {
			      warningText.style.webkitAnimation = null;
			      warningText.style.MozAnimation = null;
				  warningText.style.OAnimation = null;
				  warningText.style.msAnimation = null;
			      warningText.style.animation = null;
			  	  warningText.style.display = "none";
				},"5500")
			}
			else
			{
				if(nOdabraniOdgovori.includes(this.value))
				{
					nOdabraniOdgovori.splice(nOdabraniOdgovori.indexOf(this.value), 1);
					nOdabraniOdgovoriSvi[nTrenutnoPitanje] = nOdabraniOdgovori;
					this.style.backgroundColor = "#2B78BB";
					if(nOdabraniOdgovori.length == 0)
					{
						slideDugmad[nTrenutnoPitanje].style.backgroundColor = "#2B78BB";
						if(nTrenutnoPitanje == 3)
						{
							document.getElementById('rezultatiGumb').disabled = true;
						}
					}
				}
				else
				{
					nOdabraniOdgovori.push(this.value);
					nOdabraniOdgovoriSvi[nTrenutnoPitanje] = nOdabraniOdgovori;
					this.style.backgroundColor = "lightBlue";

					if(nOdabraniOdgovori.length > 0)
					{
						slideDugmad[nTrenutnoPitanje].style.backgroundColor = "orange";
					}

					if(nTrenutnoPitanje == 3)
					{
						var n = 0;

						for(var i = 0; i < nOdabraniOdgovoriSvi.length; i++)
						{
							if(nOdabraniOdgovoriSvi[i].length >= 1)
							{
								n++;
							}
							else
							{
								break;
							}
						}

						if(n == 4)
						{
							document.getElementById('rezultatiGumb').disabled = false;
						}
					}
				}
			}
		};
		document.getElementById("odgovori").appendChild(odgovorGumb);
	}

	odgovoriDugmad = document.querySelectorAll(".odgovor");
}

function promijeniSlide(vrstaPromjene, brojSlida)
{
	switch(vrstaPromjene)
	{
		case "prethodni_slide":
			nTrenutnoPitanje--;
		break;

		case "sljedeci_slide":
			nTrenutnoPitanje++;
		break;

		case "specificni_slide":
			nTrenutnoPitanje = brojSlida;
		break;
	}

	if(nOdabraniOdgovoriSvi[nTrenutnoPitanje] != undefined && nOdabraniOdgovoriSvi[nTrenutnoPitanje].length > 0)
	{
		nOdabraniOdgovori = nOdabraniOdgovoriSvi[nTrenutnoPitanje]
	}
	else
	{
		nOdabraniOdgovori = [];
	}

	switch(true)
	{
		case(nTrenutnoPitanje == 3):
			document.getElementById("sljedeciGumb").style.display = "none";
			document.getElementById("rezultatiGumb").style.display = "inline";
			document.getElementById("prethodniGumb").disabled = false;
		break;

		case(nTrenutnoPitanje == 0):
			document.getElementById("sljedeciGumb").style.display = "inline";
			document.getElementById("rezultatiGumb").style.display = "none";
			document.getElementById("prethodniGumb").disabled = true;
		break;

		default:
			document.getElementById("sljedeciGumb").style.display = "inline";
			document.getElementById("rezultatiGumb").style.display = "none";
			document.getElementById("prethodniGumb").disabled = false;
		break;
	}

	document.getElementById("pitanjeTekst").style.webkitAnimation = null;
	document.getElementById("pitanjeTekst").style.MozAnimation = null;
	document.getElementById("pitanjeTekst").style.oAnimation = null;
	document.getElementById("pitanjeTekst").style.msAnimation = null;
	document.getElementById("pitanjeTekst").style.animation = null;
	document.getElementById("pitanjeTekst").style.opacity = 0;
	document.getElementById("pitanjeTekst").innerHTML = "Ovo je pitanje broj " + (nTrenutnoPitanje + 1) + ".";
	document.getElementById("pitanjeTekst").style.webkitAnimation = "fadein 1.5s forwards";
	document.getElementById("pitanjeTekst").style.MozAnimation = "fadein 1.5s forwards";
	document.getElementById("pitanjeTekst").style.OAnimation = "fadein 1.5s forwards"
	document.getElementById("pitanjeTekst").style.msAnimation = "fadein 1.5s forwards";
	document.getElementById("pitanjeTekst").style.animation = "fadein 1.5s forwards";
	stvoriOdgovore(nBrojOdgovora[nTrenutnoPitanje]);

	if(nOdabraniOdgovori.length > 0)
	{

		for(var i = 0; i < odgovoriDugmad.length; i++)
		{
			if(nOdabraniOdgovori.includes(odgovoriDugmad[i].value))
			{
				odgovoriDugmad[i].style.backgroundColor = "lightBlue";
			}
		}
	}
}

function prikaziRezultate()
{
	document.getElementById('slideTraka').style.display = "none";
	document.getElementById('prethodniGumb').style.display = "none";
	document.getElementById('rezultatiGumb').style.display = "none";
	document.getElementById('noviKvizGumb').style.display = "inline";
	var rezultati = document.getElementById("odgovori");
	document.getElementById("pitanjeTekst").innerHTML = "REZULTATI:";
	rezultati.innerHTML = "";

	for(var i = 0; i < 4; i++)
	{
		var rezultat = document.createElement("p");
		var tekst = (i+1) + ". ";
		console.log(tekst);
		for(var j = 0; j < nOdabraniOdgovoriSvi[i].length; j++)
		{
			if(j < (nOdabraniOdgovoriSvi[i].length - 1))
			{
				tekst += " " + nOdabraniOdgovoriSvi[i][j] + ",";
			}
			else
			{
				tekst += " " + nOdabraniOdgovoriSvi[i][j] + ".";
			}

		}

		rezultat.style.backgroundColor = "lightBlue";
		rezultat.style.color = "white";
		rezultat.style.fontWeight = "bold";
		rezultat.style.textAlign = "center";
		rezultat.style.width = "200px";
		rezultat.style.marginLeft = "3%";
		rezultat.style.padding = "10px";
		rezultat.style.borderRadius = "5px";
		rezultat.style.webkitAnimation = "fadein 1.5s forwards";
		rezultat.style.MozAnimation = "fadein 1.5s forwards";
		rezultat.style.OAnimation = "fadein 1.5s forwards";
		rezultat.style.msAnimation = "fadein 1.5s forwards";
		rezultat.style.animation = "fadein 1.5s forwards";

		rezultat.innerText = tekst;
		rezultati.appendChild(rezultat);
	}
}