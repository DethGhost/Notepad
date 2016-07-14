var Title;
var Description;
var list;
var count = 0;

$(document).on('click', '#add', function () {
    Title = $("#title").val();
    Description = $("#description").val();
    count++;

    if (Title == '') {
        $('#alertTitle').html("<strong>Error</strong> Enter title!");
        $('#alertTitle').fadeIn().delay(1000).fadeOut();
        return false;
    }
    if (Description == '') {
        $('#alertDescription').html("<strong>Error</strong> Enter description!");
        $('#alertDescription').fadeIn().delay(1000).fadeOut();
        return false;
    }
    $('#list').prepend("<li>" + Title + "</li>");
    $("#form")[0].reset();
    list = $('#list').html();
    localStorage.setItem('list', count);
    localStorage.setItem(count.toString(), Title);
    localStorage.setItem(Title, Description);
    return false;
});

$(document).on('click', '#clear', function () {
    window.localStorage.clear();
    location.reload();
    return false;
});

$(document).ready(function () {
    if (+localStorage.getItem('list') > 0) {
        for (var i = 1; i <= +localStorage.getItem('list'); i++) {
            $('#list').prepend("<li id='note'>" + localStorage.getItem(i.toString()));
            count = i;
        }
    }
    $("#list").click(function f(e) {
        e = e || window.event;
        var el = e.target || e.srcElement;
        alert(el);
    });
});