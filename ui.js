// ilk prototipler kullanılacak.
// Daha sonra class.

function UI () {

}
UI.prototype.addFilmToUI = function (newFilm){
    // console.log(newFilm)

    //  <tr>
    //  <td><img src="" class="img-fluid img-thumbnail"></td>
    // <td></td>
    // <td></td>
    // <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    // </tr> 
    //************************************** */

    // <tbody id = "films"> id'sine göre seç..
    const filmList = document.getElementById("films")
    // console.log(filmList)

    // += koyma sebebi bir öncekiler silinmesin.
    filmList.innerHTML +=  `  
    <tr>
         <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
         <td>${newFilm.title}</td>
         <td>${newFilm.director}</td>
         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
     </tr> `



 }
 UI.prototype.clearInputs = function(element1,element2,element3){
    element1.value  = "";
    element2.value  = "";
    element3.value  = "";

 }
 UI.prototype.displayMessages=function(message,type){

    const cardBody = document.querySelector(".card-body");
    //alert olustur.

    const div = document.createElement("div")

    div.className= `alert alert-${type}`
    div.textContent=message;

    //card body e yeni bir çocuk olarak ekle.
    cardBody.appendChild(div);

    setTimeout(function(){
        div.remove();

    },1000);
 }

 UI.prototype.loadAllFilms = function(films){
    //film listemiz arayüze eklenir.
    const filmList = document.getElementById("films");
    // olusturulan film array'i forEach ile gezinerek her film alındı 
    films.forEach(function(film){
            filmList.innerHTML += `  
            <tr>
                 <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
                 <td>${film.title}</td>
                 <td>${film.director}</td>
                 <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
             </tr> `;
    });
 }

 UI.prototype.deleteFilmFromUI = function(element){
    element.parentElement.parentElement.remove();
 }
 UI.prototype.clearAllFilmsFromUI = function(){
   const filmList = document.getElementById("films");
   //filmsList.innerHTML = ""; --> YAVAŞ ÇALISAN BİR YÖNTEM
   while(filmList.firstElementChild !== null){ //child olduğu sürece
      filmList.firstElementChild.remove();
   }
}  