$(function() {
    var isPC = true;
    var isOpen = false;
    $(".nav-link").click(function (e) {
        // e.preventDefault();
        if (!isPC) {
            $(".nav").slideUp();
        }
        // var _this = $(this);
        // _this.parent().addClass("active").siblings(".active").removeClass("active");
    });
    $(".nav-btn").click(function() {
        isPC = false;
        if (isOpen) {
            $(this).siblings("ul").slideUp();
            isOpen = false;
        } else {
            isOpen = true;
            $(this).siblings("ul").slideDown();
        }
    });
    $(".project-tab-item").click(function () {
        var _this = $(this);
        _this.parent().siblings(".project-tab-content").find(".project-content-item").removeClass("active").eq($(".project-tab-item").index(_this)).addClass("active");
    });
    $(".scope-tab-item").click(function () {
        var _this = $(this);
        _this.addClass("active").siblings(".active").removeClass("active");
        _this.parent().siblings(".scope-tab-content").find(".business").removeClass("active").eq($(".scope-tab-item").index(_this)).addClass("active");
    });
    $(".left-btn, .right-btn").click(function () {
        var _this = $(this);
        _this.parent().siblings(".project-content-item").removeClass("active").eq(_this.hasClass("left-btn") ? 0 : 1).addClass("active");
    });
});