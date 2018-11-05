$(function() {
    $(".nav-link").click(function (e) {
        // e.preventDefault();
        // var _this = $(this);
        // _this.parent().addClass("active").siblings(".active").removeClass("active");
    });
    $(".project-tab-item").click(function () {
        var _this = $(this);
        _this.parent().siblings(".project-tab-content").find(".project-content-item").removeClass("active").eq($(".project-tab-item").index(_this)).addClass("active");
    });
    $(".left-btn, .right-btn").click(function () {
        var _this = $(this);
        _this.parent().siblings(".project-content-item").removeClass("active").eq(_this.hasClass("left-btn") ? 0 : 1).addClass("active");
    });
});