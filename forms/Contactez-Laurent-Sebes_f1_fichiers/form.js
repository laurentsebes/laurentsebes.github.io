
function dei(ido)
	{
	return document.getElementById(ido);
	}

function del_error(id, defaultclass)
	{
	if (defaultclass == null)	defaultclass = "button";
	else				defaultclass = "";
	if (document.getElementById(id)) 		document.getElementById(id).className = defaultclass;
	//if (document.getElementById('error_' + id)) 	document.getElementById('error_' + id).style.display = 'none';
	
	if (id == "a_cgv" && document.getElementById('label_' + id))	document.getElementById('label_' + id).className = 'inline';
	}
	
function passwordStrength(password)
	{
	var desc = new Array();
	var score   = 0;

	//if password bigger than 6 give 1 point
	if (password.length > 6) score++;

	//if password has both lower and uppercase characters give 1 point	
	if ( ( password.match(/[a-z]/) ) && ( password.match(/[A-Z]/) ) ) score++;

	//if password has at least one number give 1 point
	if (password.match(/\d+/)) score++;

	//if password has at least one special caracther give 1 point
	if ( password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) )	score++;

	//if password bigger than 12 give another 1 point
	if (password.length > 12) score++;

	var tds = document.getElementById("passwordquality").getElementsByTagName("td");
	for (i=0; i<tds.length; i++)
		{
		if (document.getElementById("passwordquality_q" + i) != null)	document.getElementById("passwordquality_q" + i).style.display = 'none';
		tds[i].className = "";
		if (score >= i && password != "")	 tds[i].className = "q" + score;
		}
	
	if (password != "")	document.getElementById("passwordquality_q" + score).style.display = '';
	}
	
function changeEtat(obj, tab)
	{
	for (var i=0; i<tab.length; i++)
		{
		document.getElementById("div_" + obj.id + "_etat" + tab[i]).style.display = 'none';
		if (obj.value == tab[i])	document.getElementById("div_" + obj.id + "_etat" + tab[i]).style.display = '';
		}
	}
	
// Permet de tester la valeur texte de plusieurs champs
function test_vide(ido, mini, class_name)
	{
	var tab = ido.split('|');
	// Pour tous les éléments :
	for (var i=0; i< tab.length; i++)
		{
		ido = tab[i];
		// La valeur ne doit ni etre vide, et avoir la longueur mini
		if(dei(ido).value.replace(" ","") == "" || dei(ido).value.length < mini)
			{
			// Sinon, on ajoute la class erreur passée en paramtre (si ce n'est pas déja le cas)
			if(dei(ido).className.indexOf(class_name) < 0)	{ dei(ido).className+= " "+class_name;}
				
			dei(ido).focus();
			return false;
			}
		}
	return true;
	}

// Permet de tester la valeur numérique de plusieurs champs
function test_numeric(ido, class_name)
	{
	var tab = ido.split('|');
	// Pour tous les éléments :
	for (var i=0; i< tab.length; i++)
		{
		ido = tab[i];
		// La valeur doit $etre numérique
		if(isNaN(dei(ido).value))
			{
			// Sinon, on ajoute la class erreur passée en paramtre (si ce n'est pas déja le cas)
			if(dei(ido).className.indexOf(class_name) < 0)
				dei(ido).className+= " "+class_name;
			dei(ido).value = "";
			dei(ido).focus();
			return false;
			}
		}
	return true;
	}
	
// Permet de retirer d'un champ la classe erreur passée en paramètre
function init_vide(ido, class_name)
	{
	var is_good_class = ido.className.indexOf(class_name);
	if(is_good_class > 0)
		ido.className = ido.className.replace(class_name,"");
	return true;
	}
