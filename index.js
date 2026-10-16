const endProg = (angka) => {
  setTimeout(() => {
    if (angka === 0) {
      // timer(angka);
      return;
    }
    console.log(angka);
    endProg(angka - 1);
  }, 1000);
};

endProg(5);
