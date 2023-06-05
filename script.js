function myfunction(){
  document.getElementById("mytopnav").classList.toggle("responsive");
  
}
function sub(){
  event.preventDefault()
  alert("hello")
  emailjs.send("service_qanxv6w","template_5g7ruee",{
    from_name: "saurabh",
    message: "Hello dear",
    },"h8s4g7h4yAgMruUze");

  // var templateParams = {
  //   from_name: 'abc',
  //   message: 'Please Find out the attached file'
  // };

    // emailjs.send("service_qanxv6w", "template_5g7ruee", templateParams)
    // .then(function(response) {
    //   console.log('SUCCESS!', response.status, response.text);
    // }, function(error) {
    //   console.log('FAILED...', error);
    // });

   
}

//navbar sticky
window.onscroll = function() {myFunction()};

var mytopnav = document.getElementById("mytopnav");

var sticky = mytopnav.offsetTop;

function myFunction() {
if (window.pageYOffset >= sticky) {
  mytopnav.classList.add("sticky")
} else {
  mytopnav.classList.remove("sticky");
}
}

GitHubCalendar(".calendar", "alokrai0607");
// or enable responsive functionality
GitHubCalendar(".calendar", "alokrai0607", { responsive: true });

function resume(){
window.open("https://drive.google.com/file/d/1Qdwd40KmkByDwamw2tOvhtXyXZC9T2hE/view?usp=sharing", "_blank");
}


