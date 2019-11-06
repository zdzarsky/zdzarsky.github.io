jQuery(document).ready(function(){
    var myArray = ["a", "A", "i", "I", "o", "O", "u", "U", "w", "W", "z", "Z", "e", "E"];
    for (var i=0,  total = myArray.length; i < total; i++) {

        var myArrayItem = (myArray[i]);

        jQuery('p').each(function() {

            var text = jQuery(this).html();
            jQuery(this).html(text.replace(new RegExp(' '+myArrayItem+' ', 'g') , ' '+myArrayItem+'&nbsp;'));

        });

    }

});