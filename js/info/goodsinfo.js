$(
    function () {
        // $(".tyl-title-list > li > a").mouseover(function () {
        //     $(this).css(
        //         {
        //             "color": "#2997FF"
        //         }
        //     )
        // });
        // $(".tyl-title-list > li > a").mouseout(function () {
        //     $(this).css(
        //         {
        //             "color": "#000000"
        //         }
        //     )
        // });

        // 监听鼠标滚动，如果鼠标滚到到大雨84个像素就设置css
        $(window).scroll(function () {
            var x = $(window).scrollTop();
            if (x >= 84) {
                $(".tyl-title-wrapper").css(
                    {"border-bottom": "0px solid #d2d2d7"}
                );
                $(".tyl-goods-title").addClass("active")
            } else {
                $(".tyl-title-wrapper").css(
                    {"border-bottom": "1px solid #d2d2d7"}
                );
                $(".tyl-goods-title").removeClass("active")
            }
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
    }
);
