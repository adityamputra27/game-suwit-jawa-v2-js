// Menentukan pilihan computer menggunakan fangsion random js
function getPilihanComputer(){

    const pilihanComputer = Math.random();

    if(pilihanComputer < 0.34) return 'gajah';
    if(pilihanComputer >= 0.34 && pilihanComputer < 0.67) return 'orang';
    return 'semut';
}

// Menentukan hasil
function getHasil(computer, player){

    if(player == computer) return 'SERI!';
    if(player == 'gajah') return (computer == 'orang') ? 'MENANG!' : 'KALAH!';
    if(player == 'orang') return (computer == 'gajah') ? 'KALAH!' : 'MENANG!';
    if(player == 'semut') return (computer == 'orang') ? 'KALAH!' : 'MENANG!';
    return 'Error!';
}

let scoreComputer = 0;
let scorePlayer = 0;

function getScore(hasil){

    if(hasil == 'MENANG!') {
        return scorePlayer++;
    } else if (hasil == 'KALAH!') {
        return scoreComputer++;
    } else {
        return scoreComputer, scorePlayer;
    }
}

// membuat action untuk yang akan dimanipulasi
// const pilihanGajah = document.querySelector('.gajah');

// pilihanGajah.addEventListener('click', function(){
    
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pilihanGajah.className;

//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     // console.log(pilihanComputer);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/'+ pilihanComputer +'.png');

//     const tampilHasil = document.querySelector('.info');
//     tampilHasil.innerHTML = hasil;
// });

// const pilihanOrang = document.querySelector('.orang');

// pilihanOrang.addEventListener('click', function(){
    
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pilihanOrang.className;

//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     // console.log(pilihanComputer);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/'+ pilihanComputer +'.png');

//     const tampilHasil = document.querySelector('.info');
//     tampilHasil.innerHTML = hasil;
// });

// const pilihanSemut = document.querySelector('.semut');

// pilihanSemut.addEventListener('click', function(){
    
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pilihanSemut.className;

//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     // console.log(pilihanComputer);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/'+ pilihanComputer +'.png');

//     const tampilHasil = document.querySelector('.info');
//     tampilHasil.innerHTML = hasil;
// });
function putarGambarComp(){

    // const waktu = new Date.getTime();
    // console.log(waktu);
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang']
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/'+ gambar[i++] + '.png');
        if(i == gambar.length) i = 0;
    }, 100);
}

// namun cara diatas kurang efektif, berikut cara yang lebihnya
const pilihanPlayer = document.querySelectorAll('li img');

// console.log(pilihanPlayer);

pilihanPlayer.forEach(function(pilihan){

    pilihan.addEventListener('click', function(){

        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pilihan.className;

        const sComp = document.querySelector('#sComp');
        const sPla = document.querySelector('#sPla');

        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putarGambarComp();
        getScore(hasil);

        // console.log(pilihanComputer);
        setTimeout(function(){

            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'img/'+ pilihanComputer +'.png');

            const tampilHasil = document.querySelector('.info');
            tampilHasil.innerHTML = hasil;

            sComp.innerHTML = scoreComputer;
            sPla.innerHTML = scorePlayer;

        }, 1000);
    });
});
const btnReset = document.querySelector('#reset-score');
btnReset.addEventListener('click', function(){
    location.reload();
});