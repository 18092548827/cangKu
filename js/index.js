//首页
$(function () {
    var to = localStorage.getItem("user")
    if (to != null) {
        $(".logina .a1").html(JSON.parse(to).username)
        $(".logina .a3").html("退出登录")
        if ($(".logina .a3").html() == "退出登录") {
            $(".logina .a3").attr("href", "")
            $(".logina .a3").click(function () {
                localStorage.clear()
            })
        }
    } else {
        $(".logina .a1").html("登录")
        $(".logina .a3").html("免费注册")
    }

    $.ajax({
        url: "http://localhost/w/website/bannerList",
        type: "get",
        success: function (res) {
            res.data.forEach(function (item, index) {
                $(".bannerTu").append(`<div  class="item"><img src="${item.img}" alt=""  class="imgnone"></div>`)
            })
            $($(".bannerTu").children()[0]).addClass("active")
        }
    })
    $.ajax({
        url: "http://localhost/w/website/findGoodsList",
        type: "get",
        data: {
            "info": "9.9",
            "platId": "d0a500ecf8ab41aa9ffe8e18ac6419e1"
        },
        success: function (item1) {
            item1.data.tbk_dg_material_optional_response.result_list.map_data.forEach(function (item, index) {
                $(".xq1").append(`
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <a href="./shoppingCar.html?=xwh${item.item_id}">
                        <img src="${item.pict_url}" alt="">
                    </a>
                    <div>
                        <p><span class="sale">￥${item.zk_final_price}</span><span class="dear">￥${item.reserve_price}</span></p>
                        <p class="jianjie" title="${item.title}">${item.title}</p>
                    </div>
                    <div>
                        <a href="#" class="shop">${item.shop_title}</a>
                        <a href="${item.item_url}" class="buy">立即购买</a>

                    </div>
                </div>`)
            })
        }
    })
    $.ajax({
        url: "http://localhost/w/website/findGoodsList",
        type: "get",
        data: {
            "info": "19.9",
            "platId": "d0a500ecf8ab41aa9ffe8e18ac6419e1"
        },
        success: function (item1) {
            item1.data.tbk_dg_material_optional_response.result_list.map_data.forEach(function (item, index) {
                $(".xq2").append(`
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <a href="./shoppingCar.html?=xwh${item.item_id}">
                        <img src="${item.pict_url}" alt="">
                    </a>
                    <div>
                        <p><span class="sale">￥${item.zk_final_price}</span><span class="dear">￥${item.reserve_price}</span></p>
                        <p class="jianjie" title="${item.title}">${item.title}</p>
                    </div>
                    <div>
                        <a href="#" class="shop">${item.shop_title}</a>
                        <a href="${item.item_url}" class="buy">立即购买</a>

                    </div>
                </div>`)
            })
        }
    })
    $.ajax({
        url: "http://localhost/w/website/findGoodsList",
        type: "get",
        data: {
            "info": "特价",
            "platId": "d0a500ecf8ab41aa9ffe8e18ac6419e1"
        },
        success: function (item1) {
            item1.data.tbk_dg_material_optional_response.result_list.map_data.forEach(function (item, index) {
                $(".xq3").append(`
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <a href="./shoppingCar.html?=xwh${item.item_id}">
                        <img src="${item.pict_url}" alt="">
                    </a>
                    <div>
                        <p><span class="sale">￥${item.zk_final_price}</span><span class="dear">￥${item.reserve_price}</span></p>
                        <p class="jianjie" title="${item.title}">${item.title}</p>
                    </div>
                    <div>
                        <a href="#" class="shop">${item.shop_title}</a>
                        <a href="${item.item_url}" class="buy">立即购买</a>

                    </div>
                </div>`)
            })
        }
    })
    $.ajax({
        url: "http://localhost/w/website/findGoodsTypeList",
        type: "get",
        success: function (item) {
            item.data.forEach(function (item, index) {
                $(".nav .ul2 div").append(`
                    <li>
                        <img src="${item.icon}" alt="">
                        <a href="" class="a">${item.name}</a>
                    </li>
                `)
                $(".nav .ul2 li").click(function(){
                    var text = $(this).find("a").html()
                    location.href = "fenlei.html?" + text + "";
                })
            })
            var index = 0;
            $($(".nav .ul1 .jian")[1]).click(function () {
                index--;
                console.log(index);
                $(".nav .ul2 div").css("top", index * 40 + "px")
                if ($(".nav .ul2 div").css("top") == -200 + "px") {
                    index = 0
                }
            })
            $($(".nav .ul1 .jian")[0]).click(function () {
                index++;
                // if($(".nav .ul2 div").css("top") == 0+"px"){
                //     index=-5;
                // }
                $(".nav .ul2 div").css("top", index*40 + "px")
                if($(".nav .ul2 div").css("top") == 0 + "px"){
                    index = -5
                }
                
            })

        }
    })


})
$(function () {
    var ong = location.search;
    ong = ong.split("=")[1];
    ong = ong.split("h")[1]
    ong = decodeURIComponent(ong);
    $.ajax({
        url: "http://127.0.0.1:80/w/website/findGoodsDetail?info=" + ong,
        type: "get",
        success: function (item) {
            item.data.detail.tbk_item_info_get_response.results.n_tbk_item.forEach(function (item1, index) {
                $(".listnext ").append(`
                <div class="container"style="margin-top: 20px;">
                <div class="nexttop cf">
                    <a href="">全部</a>
                    <a>></a>
                    <a href="">${item1.cat_leaf_name}</a>
                    <a>></a>
                    <a href="">${item1.cat_name}</a>
            </div>
            <div class="xqbottom cf">
                <div class="w pull-left">
                    <div class="left lf">
                        <div class="b1">
                            <a class="b" style="background-image: url('${item1.pict_url}');cursor: pointer;"></a>
                            <div class="drag"></div>
                        </div>
                        <a class="a a1" style="background-image: url('${item1.small_images.string[0]}');cursor: pointer;"></a>
                        <a class="a a2" style="background-image: url('${item1.small_images.string[1]}');cursor: pointer;"></a>
                        <a class="a a3" style="background-image: url('${item1.small_images.string[2]}');cursor: pointer;"></a>
                        <a class="a a4" style="background-image: url('${item1.small_images.string[3]}');cursor: pointer;"></a>
                        
                    </div>
                    <div class="jing">
                        <img src="${item1.pict_url}" alt="">
                    </div>
                </div>
                <div class="right lf">
                    <div class="rt">
                        <h2 title="${item1.title}">${item1.title}</h2>
                        <p>产品类型：<span>${item1.cat_name}</span></p>
                        <p>产品分类：<span>${item1.cat_leaf_name}</span></p>
                        <p>乳液/面霜品类：<span>${item1.nick}</span></p>
                      
                        <p>店铺：<span>${item1.nick}</span></p>
                        <p>产地：<span>${item1.provcity}</span></p>
                        
                    </div>
                    <div class="rd cf">
                        <p>市&nbsp;&nbsp;场&nbsp;&nbsp;价：<s>￥${item1.reserve_price}</s></p>
                        <p>售&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价：<span>￥${parseInt(parseFloat(item1.reserve_price) * parseFloat(item1.zk_final_price / 100))}</span></p>                       
                        <p>
                            <span class="s lf">购买数量：</span>
                            <span class="span1 span lf" id="red">-</span>
                            <input type="text" class="span2 lf" value="0" id="num">
                            <span class="span3 span lf" id="plus">+</span>
                        </p>
                    </div>
                    <div class="buy cf">
                        <a href="./buycarjiesuan.html" class="now lf">立即购买</a>
                        <a href="./buycar.html" class="buycar lf">加入购物车</a>
                    </div>
                </div>
            </div>
            </div>
                `)
                $("#plus").click(function () {
                    $("#num").val(++index)
                })
                $("#red").click(function () {
                    $("#num").val(--index)
                    if (index < 0) {
                        $("#num").val("0")
                        index = 0
                    }
                })
                $(function () {
                    a = $(".xqbottom .left .a")
                    var drag = $(".xqbottom .w .left .drag")
                    var jing = $(".xqbottom .w .jing")
                    var b1 = $(".xqbottom .b1")
                    var img = $(".jing img")
                    var maxW = b1.width() - drag.width();
                    var maxH = b1.height() - drag.height();
                    b1.mouseenter(function () {
                        drag.css("opacity", "1")
                        jing.css("opacity", "1")
                        jing.css("z-index", "99")
                        b1.mousemove(function (e) {
                            var x = e.pageX - b1.offset().left - drag.width() / 2;
                            x = x < 0 ? 0 : x;
                            x = x > maxW ? maxW : x;
                            a = (img.width() - jing.width()) / maxW;

                            drag.css("left", x + "px");
                            img.css("marginLeft", -a * x + "px");
                            var y = e.pageY - b1.offset().top - drag.height() / 2;
                            y = y < 0 ? 0 : y;
                            y = y > maxH ? maxH : y;
                            b = (img.height() - jing.height()) / maxH;
                            drag.css("top", y + "px");
                            img.css("marginTop", -b * y + "px");
                        })
                    })
                    b1.mouseleave(function () {
                        drag.css("opacity", "0")
                        jing.css("opacity", "0")
                        jing.css("z-index", "-1")
                    })
                    a.each(function (index, item) {
                        $(this).mouseenter(function () {
                            var img1 = $(".b1 .b").css("background-image")
                            $(item).css("border", "1px solid red").siblings().css("border", "none")
                            b1.find(".b").css("background-image", $(item).css("background-image"))
                            $(item).css("background-image", img1)
                            var img2 = b1.find(".b").css("background-image")
                            img2 = img2.split('"')[1]
                            img.attr("src", img2)
                        })
                    })


                })

            })

        }
    })

})
// fenye





