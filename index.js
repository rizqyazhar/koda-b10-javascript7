const endProg = (angka) => {
  if (angka === 0) {
    return console.log("===Program has been ended===");
  }
  setTimeout(() => {
    console.log(angka);
    endProg(angka - 1);
  }, 1000);
};

endProg(5);
