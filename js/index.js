function hoverCart()
{
    $(".addtocart").attr('src', 'assets/img/addtocart-white.jpg');
}

function offCart()
{
    $(".addtocart").attr('src', 'assets/img/addtocart-black.jpg');
}

$(function() {
    var imageFlipHandler = function(e) {
        var image = $(this);
        var currentPath = image.attr('src');
        image.attr('src', image.data('flip'));
        image.data('flip', currentPath);
    };

    $('.hover-show-logo')
        .on('mouseenter', imageFlipHandler)
        .on('mouseleave', imageFlipHandler);
});