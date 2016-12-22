
$(function(){
    $('#runcode').on('click', runCode);
    
    function runCode () {
       eval($('#codeEditor').val()); 
    }
})