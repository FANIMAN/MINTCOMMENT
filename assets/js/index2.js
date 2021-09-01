// $(document).ready(function () {

    $('.nbr.navigation-item').on('click', function (e) {
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

window.onload = function() {
    let fff = document.getElementById("dep1").value;

    // var getInput = prompt("Hey type something here: ");
    localStorage.setItem("storageName",fff);
 }

// function passValueff(){
//     // var ff = document.getElementById("dep1").value;
//     let fff = document.getElementById("dep1").value;
//     localStorage.setItem("depff", fff);
//   //  return false;
// }


function passValuefffr(element){
  //  alert("value is "+element.value); //you can print any value like id,class,value,innerHTML etc.
    let fff = element.value;
    localStorage.setItem("storageNme", fff);
};

function passValueffsr(element){
  //  alert("value is "+element.value); //you can print any value like id,class,value,innerHTML etc.
    let fff = element.value;
    localStorage.setItem("storageNme", fff);
};

function passValuesffr(element){
  //  alert("value is "+element.value); //you can print any value like id,class,value,innerHTML etc.
    let fff = element.value;
    localStorage.setItem("storageNme", fff);
};

function passValuesfsr(element){
  //  alert("value is "+element.value); //you can print any value like id,class,value,innerHTML etc.
    let fff = element.value;
    localStorage.setItem("storageNme", fff);
};

function passValuetffr(element){
  //  alert("value is "+element.value); //you can print any value like id,class,value,innerHTML etc.
    let fff = element.value;
    localStorage.setItem("storageNme", fff);
};

function passValuetfsr(element){
   // alert("value is "+element.value); //you can print any value like id,class,value,innerHTML etc.
    let fff = element.value;
    localStorage.setItem("storageNme", fff);
};


function passValuefthffr(element){
  //  alert("value is "+element.value); //you can print any value like id,class,value,innerHTML etc.
    let fff = element.value;
    localStorage.setItem("storageNme", fff);
};

function passValuefthfsr(element){
   // alert("value is "+element.value); //you can print any value like id,class,value,innerHTML etc.
    let fff = element.value;
    localStorage.setItem("storageNme", fff);
};

function passValuefifthffr(element){
  //  alert("value is "+element.value); //you can print any value like id,class,value,innerHTML etc.
    let fff = element.value;
    localStorage.setItem("storageNme", fff);
};

function passValuefifthfsr(element){
   // alert("value is "+element.value); //you can print any value like id,class,value,innerHTML etc.
    let fff = element.value;
    localStorage.setItem("storageNme", fff);
};
// $( ".button" ).on( "click", function() {
//      alert("I am a button with value " + $(this).attr('value'));
//      })

{/* <p class="button" value="my value here">Button 0</p> */}