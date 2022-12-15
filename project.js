const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films")

//UI objesini Başlatma
const ui = new UI();

// Storage Objesi üret.
const storage = new Storage();

// Tüm eventleri yükleme 
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm); // submit olduğunda addFilm fonk.çalışır.
    document.addEventListener("DOMContentLoaded",function(){
        //tüm filmleri yüklemek için sayfa yenilendiğinde yük.yap.
        let films = storage.getFilmsFromStrage();

        //bu fonk. bizim örnek olarak yüklediğimiz o iki array'i döner.
        ui.loadAllFilms(films);
          // tüm filmler array şeklinde gönderilir.--bu olusturulan array -> ui içindenki fonk'a gönderirilir.
    });

    cardBody.addEventListener("click", deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}  

function addFilm(e){

    const title = titleElement.value;           // değer alındı
    const director = directorElement.value;     // değer alındı
    const url = urlElement.value;               // değer alındı

    if ( title === "" || director === ""|| url === ""){
        // eğer bunlardan biri bile boş ise hata mesajı versin.
        ui.displayMessages("Tüm alanları doldurun...","danger");
    }

    else{       //artık burada "film.js" için obje olusuturulmaya başlanır.
        
        const newFilm = new Film (title,director,url) //yeni film 

        //ui objesi üzerine fonk. yazılır => Film objesi ara yüze ekleme yapılır.
        ui.addFilmToUI(newFilm) //arayüze film ekleme -> ui.js dosyanına geç.
        storage.addFilmToStorage(newFilm); //storage'a film ekleme
        ui.displayMessages("Film başarıyla eklendi...","success")

    }



    ui.clearInputs(titleElement,urlElement,directorElement); // fonk. cagırılır.

    e.preventDefault();
}

function deleteFilm (e){
    // console.log(e.target)
    if (e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        // console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent); //önceki kardesini bulduk.
        ui.displayMessages("silme işlemi gerçekleşti...","success")
    }
}
function clearAllFilms (){
    if(confirm("Emin misiniz ?")){
    ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();  
    }
}
