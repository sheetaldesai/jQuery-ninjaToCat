$(document).ready(function(){
    $("td").click(function(e){     
        var img = $(this).children("img");
            src = $(this).children("img").attr("src"),
            altImg = $(this).children("img").attr("altImg");
        img.attr("altImg", src);
        img.attr("src", altImg);
    });

    

});