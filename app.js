$(document).ready(function () {
    $('#submit').on('click', function (e) {
        var content = $('#content');
        var emails = content.val().match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);

        if (emails) {
            content.val(emails.join('\n'));
        } else {
            content.val('No Email Found!')
        }
        
    });

    document.getElementById("copy").onclick = function(){
        document.getElementById("content").select();
        document.execCommand('copy');
    };      
});