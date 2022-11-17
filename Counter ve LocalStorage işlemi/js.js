let counter = localStorage.getItem("counter") ? localStorage.getItem("counter") : 0; //bu yöntemle counter aşağıdaki gibi 
//let counter = localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0; Bu şekilde yapılırsa counter += ve counter -= yapılması gerekli 
//counter ı değişkene tanımladık ve asağıda set ettikten sonra veriyi kaldığı yerden ilerletmek için bu yöntemi kullanıyoruz. veri kaldığı yerden devam etmek için set edilen veriyi get ile alıp işlemine devam ediyor. ve hafızaya kaydedilen counter verisini almasını söylüyoruz. ve eğer veri yoksa 0 olmasını istiyoruz.


let domCounter = document.querySelector(".counter");  //dom ile işlenecek veriler seçiliyor.
let domEnhancer = document.getElementById("art");
let domSubtract = document.getElementById("eksil");

domEnhancer.addEventListener("click",clickEvent)
domSubtract.addEventListener("click",clickEvent)

domCounter.innerHTML= counter; //dom ile seçilen counterın html ine "counter" sonucunun yazılmasını istiyoruz. eğer yazmazsak ekranda tıklanma işleminden sonra yazı çıkar ve bu profesyonel gözükmez

function clickEvent(){   
    this.id == "art" ? counter ++ : counter -- ; //click edilen verinin id si art olursa counter 1 arttır diyoruz. Değilse 1 eksilt diyoruz.
    localStorage.setItem("counter",counter)       //localStorage ile çıkan veriyi kaydediyoruz.

    domCounter.innerHTML= counter  //burdaki innerHtml işlem uygulanan counter yani artıp eksilen counter ı ekrana anlık olarak yazmak için buraya tanım yapmamız gerekli
}

