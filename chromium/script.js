$(".actions-hover").append($('<li style="margin-left:5px"><span class="classicrt_icon">♲ </span><a href="#" class="classicrt"> Classic RT</a></li>'));

$(".classicrt").mouseover(function (e) {
    $(this).siblings(".classicrt_icon").text("♻ ");
});

$(".classicrt").mouseout(function (e) {
    $(this).siblings(".classicrt_icon").text("♲ ");
});

$(".classicrt").click( function(e) {
    var tweeter = $(this).parents(".status-body").children().children(":first").text();
    var tweet   = $(this).parents(".status-body").children().children(".entry-content").text();
    tweet.substr(1, tweet.length -1); // strip ""
    $("#status").attr("value", "RT @"+tweeter+" "+tweet);
});

