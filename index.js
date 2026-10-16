let angka = 0;
const endProg = () => {
  setTimeout(() => {
    angka++;
    console.log(angka);
    setTimeout(() => {
      angka++;
      console.log(angka);
      setTimeout(() => {
        angka++;
        console.log(angka);
        setTimeout(() => {
          angka++;
          console.log(angka);
          setTimeout(() => {
            angka++;
            console.log(angka);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

endProg();
