//Local Storage ' e ekle 

function Storage () {

}

Storage.prototype.addFilmToStorage = function(newFilm){
    // console.log(newFilm)
    let films = this.getFilmsFromStrage();
    
    films.push(newFilm);
    // Bu sefer array içinde obje olacak.
    // [
        // {title:"sdfsdf", director:"sdfsd",url:"sfdsf"}
        // {title:"sdfsdf", director:"sdfsd",url:"sfdsf"}
    // ]
        // şimdi array'i local storage 'e yaz.
    
        localStorage.setItem("films",JSON.stringify(films));
    }
    

Storage.prototype.getFilmsFromStrage = function(){
    let films ;
    // local storage ekleme yapmadan önce bir ve ya iki tane film arrayimiz olmalı.Ve kontrol edilir.
    //films keyine karşı gelen herhangi bir key var mı? Kontrol et.
    //eğer yoksa bizim burada boş bir array olusturmamız gerekir.
    if (localStorage.getItem("films") === null) { 
        films=[];

} 
else { // eğere null değeri dönmez ise olan değer alnıır.
    // films = localStorage.getItem("films");
    // string değeri parse et orjinal array'e dönüştür.
    films = JSON.parse(localStorage.getItem("films"));
    //filmler array olarak alındı.

    }
return films;
}
Storage.prototype.deleteFilmFromStorage = function (filmTitle){
    let films = this.getFilmsFromStrage();
    //splice methodu ile sil.
    films.forEach(function(film,index){
        if(film.title === filmTitle){
        films.splice(index,1);
            }
    });

    localStorage.setItem("films",JSON.stringify(films));

}

Storage.prototype.clearAllFilmsFromStorage = function (){
    localStorage.removeItem("films");
}