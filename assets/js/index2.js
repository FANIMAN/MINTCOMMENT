// $(document).ready(function () {

    $('.navigation-item').on('click', function (e) {
        var currentID = $(this).attr("id");
        console.log(currentID);
        console.log(currentID+" = stored to localStorage");
        // localStorage.setItem('activeTab', currentID);

    });

    // var activeTab = localStorage.getItem('activeTab');
    // if (activeTab!="") {
    //     console.log(activeTab+" = retrieved form localStorage");
    //     $("#"+activeTab ).append( "<span> - active!</span>" );
    //     $("#"+activeTab ).addClass('active');
    // }

//});