$(function() {
    $(".nav-link").click(function (e) {
        // e.preventDefault();
        var _this = $(this);
        _this.parent().addClass("active").siblings(".active").removeClass("active");;
    });
});