const header = document.getElementById("header");

const intervalTime = setInterval(() => {
  let d = 0;
  d++;
  if (new Date().getSeconds() == 0) {
    if (d < 4) {
      console.log(d);
      header.style.transition = `all .8s`;
      header.style.backgroundImage = `url("/images/k${d}.jpg")`;
      header.style.backgroundPosition = "center";
      header.style.backgroundRepeat = "no-repeat";
      header.style.backgroundSize = "cover";
    } else {
      d -= 4;
    }
  }
}, 1000);
