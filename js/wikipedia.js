function dowiki(place,lang) {
		if (lang=='EN') {
			var URL = 'https://en';
		}
		else if (lang=='ES') {
			var URL = 'https://es';
		}
		
        URL += '.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=';
        URL += "&titles=" + place;
        URL += "&rvprop=content";
        URL += "&callback=?";
        $.getJSON(URL, function (data) {
            var obj = data.query.pages;
            var ob = Object.keys(obj)[0];
            console.log(obj[ob]["extract"]);
            try{
                document.getElementById('wikiarticle').textContent = obj[ob]["extract"];
            }
            catch (err) {
                document.getElementById('wikiarticle').textContent = err.message;
            }

        });
    }