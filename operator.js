let outputhasil = document.getElementById("output_hasil");

function display(num) {
  outputhasil.value += num;
}

function calculator() {
  try {
    outputhasil.value = eval(outputhasil.value);
  } catch (err) {
    alert("invalid");
  }
}

function bersih() {
  outputhasil.value = "";
}

function hapus() {
  outputhasil.value = outputhasil.value.slice(0, -1);
}
