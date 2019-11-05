jQuery(document).ready(function(){
    var myArray = ["a", "A", "i", "I", "o", "O", "u", "U", "w", "W", "z", "Z", "e", "E", "aż", "Aż", "bo", "Bo", "by", "By", "iż", "Iż", "ni", "Ni", "że", "Że", "do", "Do", "ku", "Ku", "na", "Na", "od", "Od", "po", "Po", "we", "We", "za", "Za", "ze", "Ze", "hę", "Hę", "no", "No", "ot", "Ot", "aa", "Aa", "aj", "Aj", "am", "Am", "au", "Au", "ba", "Ba", "ee", "Ee", "eh", "Eh", "ej", "Ej", "fe", "Fe", "fi", "Fi", "fi", "Fi", "fu", "Fu", "ha", "Ha", "he", "He", "ho", "Ho", "ii", "Ii", "oj", "Oj", "oo", "Oo", "ot", "Ot", "oż", "Oż", "pa", "Pa", "uf", "Uf", "uu", "Uu", "co", "Co", "ki", "Ki", "se", "Se", "ja", "Ja", "ty", "Ty", "ci", "Ci", "on", "On", "mu", "Mu", "go", "Go", "oń", "Oń", "ją", "Ją", "my", "My", "wy", "Wy", "im", "Im", "je", "Je", "ma", "Ma", "mą", "Mą", "me", "Me", "ów", "Ów", "ta", "Ta", "tę", "Tę", "tą", "Tą", "to", "To", "te", "Te", "tu", "Tu", "al", "Al", "ar", "Ar", "as", "Aa", "at", "At", "bi", "Bi", "er", "Er", "es", "Es", "ew", "Ew", "ez", "Ez", "go", "Go", "id", "Id", "ił", "Ił", "iw", "Iw", "li", "Li", "ok", "Ok", "om", "Om", "op", "Op", "or", "Or", "os", "Os", "oś", "Oś", "oz", "Oz", "ód", "Ód", "ós", "Ós", "su", "Su", "ud", "Ud", "ul", "Ul", "ut", "Ut", "je", "Je", "ma", "Ma", "są", "Są", "lub", "Lub", "ale", "Ale", "czy", "Czy", "nad", "Nad", "pod", "Pod", "bez", "Bez", "nie", "Nie", "tak", "Tak", "albo", "Albo", "więc", "Więc", "lecz", "Lecz", "przez", "Przez", "niech", "Niech", "tylko", "Tylko"];
    for (var i=0,  total = myArray.length; i < total; i++) {

        var myArrayItem = (myArray[i]);

        jQuery('p').each(function() {

            var text = jQuery(this).html();
            jQuery(this).html(text.replace(new RegExp(' '+myArrayItem+' ', 'g') , ' '+myArrayItem+'&nbsp;'));

        });

    }

});