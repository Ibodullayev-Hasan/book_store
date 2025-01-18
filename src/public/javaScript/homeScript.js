const header = document.getElementById("header");
let d = 1;

const intervalTime = setInterval(() => {
  let time = new Date().getSeconds();

  // console.log(`time:${time}`);
  if (time === 0) {
    d++;
    if (d <= 5) {
      // console.log(`D: ${d}`);
      header.style.transition = `all .8s`;
      header.style.backgroundImage = `url("/images/k${d}.jpg")`;
      header.style.backgroundPosition = "center";
      header.style.backgroundRepeat = "no-repeat";
      header.style.backgroundSize = "cover";
    } else {
      d -= 5;
      // console.log(`Dy: ${d}`);
    }
  }
}, 1000);
