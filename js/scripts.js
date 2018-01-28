$(document).ready(function () {

    // HASH CHECKING ============================================================================================
    if (window.location.hash === "") {
        window.location.hash = $(".tabs__title:first").find('a').attr("href");
        $('a[href="' + window.location.hash + '"]').click().addClass("active_link").parent().addClass('active');
        $(".tabs__content" + window.location.hash).show();
    }
    else if (window.location.hash !== "") {
        $(".tabs__title").removeClass("active");
        $('a[href="' + window.location.hash + '"]').click().addClass("active_link").parent().addClass('active');
        $(".tabs__content" + window.location.hash).show();
    }

    // TABS PANEL SWITCHER ============================================================================================
    $(".tabs__title").click(function () {
        $(".tabs__content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).show();
        $(".tabs__title").removeClass("active");
        $(this).addClass("active");
        $(".tabs__accordion").removeClass("d_active");
        $(".tabs__accordion[rel^='" + activeTab + "']").addClass("d_active");
    });

    // ACCORDION PANEL SWITCHER ============================================================================================
    $(".tabs__accordion").click(function () {
        $(".tabs__content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).show();
        $(".tabs__accordion").removeClass("d_active");
        $(this).addClass("d_active");
        $(".tabs__title").removeClass("active");
        $(".tabs__title[rel^='" + d_activeTab + "']").addClass("active");
    });

    // LINK STATUS SWITCHER ============================================================================================
    $('.tabs__link').on('click', function () {
        $('.tabs__link').removeClass('active_link');
        $(this).addClass('active_link');
        var activeLinkHash = $('.tabs__link.active_link').attr("href");
        $('a[href="'+activeLinkHash + '"]').addClass('active_link');
    });

    // SIDEBAR LINK NUMERATOR ============================================================================================
    var sidebarLink = document.getElementsByClassName("sidebar__link");
    for (var i = 0; i < sidebarLink.length; i++) {
        sidebarLink[i].innerHTML = ( 1 + i + ". " + sidebarLink[i].innerHTML);
    }
});

