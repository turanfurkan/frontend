//Dökümana(document) Yazdırma İşlemi ile Merhaba Dünya:
// document.write('Merhaba Dünya');

//Uyarı İşlemi ile Merhaba Dünya:
// alert('Merhaba Dünya');

// console.log ile Merhaba Dünya Yazdırma
// console.log('Merhaba Dünya');

// Templete Literals
// let username="furkanturan"
// const domainName= "turansoft.net"

// let email = `${username}@${domainName}`
// document.getElementById("article").innerHTML=email
// console.log(email)

//Bu alıştırmada kullanıcı adı ve yaş bilgisini alıp ehliyet alaıp alamayacağını sorgulayalım
// 3 değişkenimiz olsun ; İsim Soyisim, Yaş, info

// let userName=prompt("İsim Soyisim: ")
// let age=prompt("Yaş: ")
// let availableAge= 18;
// let remainingAge;
// let info = document.querySelector("#info");

// if (userName && age) {
//     if (age>=availableAge) {
//         console.log(`Tebrikler ${userName}. Ehliyet Alabilirsin...`)
//     }
//     else
//     {
//         remainingAge=availableAge-age;
//         console.log(`Üzgünüm. ${userName}. Ehliyet alabilmen için yaşın yeterli değil. Ehliyet alabilmek için ${remainingAge} yaş daha büyümen gerekiyor...`)
//     }
// }
// else if (!userName) {
//     console.log(`Lütfen İsim Soyisim Alanını Boş Bırakmayın!!!`)
// }
// else if (!age) {
//     console.log(`Lütfen Yaş Alanını Boş Bırakmayın!!!`)
// }

// Kosullarla Calismak Bolum Sonu Egzersizi:

/* 
1- prompt ile aldigin bilgiye gore asagidaki yapiyi kullanarak notun bilgisini #info'ya yazdir
AA  90-100
BA  85-89
BB  80-84
CB  75-79
CC  70-74
DC  65-69
DD  60-64
FD  50-59
FF  0-49

2- kullanicinin girdigi verinin istedigimiz aralikta olup olmadigini kontrol et
3- ff bilgisinde uzgun surat ikonu cikart, digerlerinde ise gulucuk olsun :)
4- ff class bilgisi text-danger, digerlerinin ise text-primary olsun
*/

let grade=prompt("Puan: ")
let textInfo;
let info = document.querySelector("#info")
const smile =`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
</svg>`;
const sad =`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
</svg>`;

if (grade>=0 && grade<=100) {
    textInfo=smile + " => ";
    info.classList.add("text-success");

    if (grade>=90 && grade<=100) {
        textInfo += "AA";
    }
    else if (grade>=85 && grade<=89) {
        textInfo += "BA";

    }
    else if (grade>=80 && grade<=84) {
        textInfo += "BB";
    }
    else if (grade>=75 && grade<=79) {
        textInfo += "BB";
    }
    else if (grade>=70 && grade<=74) {
        textInfo += "CC";
    }
    else if (grade>=65 && grade<=69) {
        textInfo += "DC";
    }
    else if (grade>=60 && grade<=64) {
        textInfo += "DD";
    }
    else if (grade>=50 && grade<=59) {
        textInfo += "FD";
    }
    else if (grade>=0 && grade<=49) {
        textInfo=sad + " => ";
        textInfo +="FF";
        info.classList.remove("text-success");
        info.classList.add("text-danger");
    }    

}
else
{
    textInfo="Hatalı bir puan girdiniz. 0 ile 100 aralığında bir değer girmeniz gerekiyor!!!";

}

info.innerHTML=`${textInfo} => ${grade}`;