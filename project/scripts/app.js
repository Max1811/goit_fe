(function(){
    var $header = $('#header');

    $('.navbar-toggler').click(function(){
        if($header.hasClass('opened')) $header.removeClass('opened');
        else $header.addClass('opened');
    });
    
    $('.sidebar-overlay').click(function() {
        $header.removeClass('opened');
    });
})();