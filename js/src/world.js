var S9 = S9 || {};
S9.world = S9.world || {};

$(function(){
    
    
    calculateWorldDimension();
    
    $(window).resize(calculateWorldDimension);
    
    function calculateWorldDimension () {
        S9.world.height = $('#gameEditor').height();
        S9.world.width = $('#gameEditor').width();
    }
})