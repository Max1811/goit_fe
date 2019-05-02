(function(){
    var $main = $('#main');

    $('.search-button').click(function(){
        if($main.hasClass('displayed')) $main.removeClass('displayed');
        else $main.addClass('displayed');
    });

})();