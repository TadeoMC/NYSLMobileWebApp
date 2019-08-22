function landscape() {
    if(Math.abs(window.orientation) !== 90){
        $('#tables').removeClass("col-5");
        $('#maps').removeClass("col-7");
        $('#tables').addClass("col-12");
        $('#maps').addClass("col-12");
    }
    else{
        $('#tables').removeClass("col-12");
        $('#maps').removeClass("col-12");
        $('#tables').addClass("col-5");
        $('#maps').addClass("col-7");
    }
}

landscape();
console.log(window.orientation);
window.addEventListener("orientationchange", function() {
    console.log(window.orientation);
    landscape();
});

$("a").on('click', function(e) {

    e.preventDefault();
    var nextPage;
    if(e.target.tagName != "A"){
        nextPage = $(e.target.parentNode.hash);
    } else{
        nextPage = $(e.target.hash);
    }

    $('#backGameList').css('display','none');
    $('#chatButton').css('display','block');
    $('#chatButton').css('visibility','hidden');
    $("#pages .current").removeClass("current");
    nextPage.addClass("current");

    if($("#pages .current")[0].id ==$("#home")[0].id)
        $("#topContent").css('display','none');
    else if($("#pages .current")[0].id ==$("#chat")[0].id)
    {
        month_short= games.month.slice(0,3);
        $("#topContent h1").text(month_short + ' g: ' + games.id);
        $('#chatButton').css('display','none');
        $('#backGameList').css('display','block');
    }else{
        $("#topContent").css('display','flex');
        var text1 = $("#pages .current")[0].id;
        text1 = text1.split(/(?=[A-Z])/).join(" ");
        $("#topContent h1").text(text1);

        if($("#pages .current")[0].id ==$("#games")[0].id){
            $('#maps').addClass("displayLandscape");
            $('#tables').removeClass("displayLandscape");
            
        }

    }
})

function displaySelectedMap() {
    var locationChoise = document.getElementById("locationChoise");
    document.getElementById("mapFrame").src = locationChoise.value;
}