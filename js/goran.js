$('.thumb').click(function (e) {

    $(".thumb").removeClass( "thumb-active" );
    $(this).addClass( "thumb-active" );
    var num = $(this).attr("num");
    var img_src;
    var href;

    switch(num){
        case "1":
                img_src = "images/articles/1.png";
                href = "article-1.html";
            break;
        case "2":
                img_src = "images/articles/2.png";
                href = "article-2.html";
            break;
        case "3":
                img_src = "images/articles/3.png";
                href = "article-3.html";
            break;
        case "4":
                img_src = "images/articles/4.png";
                href = "article-4.html";
            break;
        default:
                img_src = "";
            break;
    }

    $('#articleImage').attr("src", img_src);
    $('#articleHref').attr("href", href);
});