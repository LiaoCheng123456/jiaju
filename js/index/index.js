$(function () {

    $(".tyl-nav-list > li span").click(function () {
        $(".tyl-nav-list > li span").each(function () {
            $(this).removeClass("tyl-nav-link-text-active")
        });
        $(this).addClass("tyl-nav-link-text-active");
    });

    $(".tyl-nav-link img").click(function () {
        $(".tyl-nav-list > li span").removeClass("tyl-nav-link-text-active");

    });

    /**
     * 移入搜索按钮或者logo按钮时变色
     */
    $(".tyl-nav-link img").mouseover(function () {
        $(this).attr("src", "../../image/index/search%20(4).png")
    });


    /**
     * 移出搜索按钮或者logo按钮时变色
     */
    $(".tyl-nav-link img").mouseout(function () {
        $(this).attr("src", "../../image/index/search%20(2).png")
    })



    /**
     * 点击搜索按钮弹出搜索框，给body设置高度，并设置它的属性为fixed
     */
    $("#search").click(function () {
        // alert()
        $(".search").css({
            "display":"flex"
        });

        $(document.body).css({
            "overflow-y": "hidden"
        });

        $(".search-input").show().focus();
    });

    $(".search-input").blur(function () {
        $(".search").css({
            "display":"none"
        });

        $(document.body).css({
            "overflow-y": "auto"
        });
    })
});
