const nav = ["მთავარი", "ჩვენ შესახებ","პროდუქცია", "გალერეა","კონტაქტი" ];
const links = ["index.html", "about.html", "production.html", "gallery.html", "contact.html"]


let navsigrdze = nav.length;
let navtext = "<ul>";

for(let i=0; i<navsigrdze; i ++){
    navtext += '<li><a href="' + links[i] +'">' + nav[i] + "</a></li>";
}
navtext += "</ul>";
document.getElementById("nav").innerHTML = navtext;


function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }




  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


