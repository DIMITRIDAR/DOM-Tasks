function changeText() {
  let novel = document.getElementById("novel");
  if (novel) {
    novel.textContent = "Hello, DOM!";
  } else {
    console.error("Not Found!");
  }
}

changeText();
