function showPreloader() {
    window.location.href = "preloader.html";
    setTimeout(() => {
        window.location.href = "greenshop1.html";
    }, 2000); 
}
document.addEventListener('DOMContentLoaded', function() {
   
    var registrationButton = document.querySelector('button[type="submit"]');

   
    registrationButton.addEventListener('click', function(e) {
        e.preventDefault(); 

        
        document.getElementById('preloader').style.display = 'block';

      
    });
});