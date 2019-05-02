(function(){
    var $main = $('#main');

    $('.catalog-open').click(function(){
        if($main.hasClass('opened')) $main.removeClass('opened');
        else $main.addClass('opened');
    });

})();