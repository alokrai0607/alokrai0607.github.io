function myfunction(){
  document.getElementById("mytopnav").classList.toggle("responsive");
}
function sub(){
  event.preventDefault()
  alert("hello")
  emailjs.send("service_qanxv6w","template_5g7ruee",{
    from_name: "Alok",
    message: "Hello",
    },"h8s4g7h4yAgMruUze");   
}
GitHubCalendar(".calendar","alokrai0607");
// or enable responsive functionality
GitHubCalendar(".calendar", "alokrai0607", { responsive: true });
function resume(){
window.open("https://drive.google.com/file/d/1WQAyIQIlABgq4lI2LyWHSRUg6amCNabf/view?usp=sharing", "_blank");
}


