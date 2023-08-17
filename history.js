const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount, net_WPM) {
  const newRow = document.createElement("div");
  newRow.classList.add("card");

  newRow.innerHTML = `
  <h3>${questionText}</h3>
  <div>
  <p>You took: <span class="bold">${timeTaken}</span> seconds</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  <p>Your Typing Speed: <span class="bold ${net_WPM < 40 ? 'red' : net_WPM < 55 && net_WPM >= 40 ? 'yellow' : 'green'}">${net_WPM <= 0 ? 0 : net_WPM}</span> WPM</p>
  </div>
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, errorCount, net_WPM});
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("card");

    newRow.innerHTML = `
    <h3>${test.questionText}</h3>
    <div class="card-result">
    <p>You took: <span class="bold">${test.timeTaken}</span> seconds</p>
    <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
    <p>Your Typing Speed: <span class="bold ${test.net_WPM < 40 ? 'red' : test.net_WPM < 55 && test.net_WPM >= 40 ? 'yellow' : 'green'}">${test.net_WPM <= 0 ? 0 : test.net_WPM}</span> WPM</p>
  `;
  console.log(test.net_WPM)
    histories.appendChild(newRow);
  });
}

