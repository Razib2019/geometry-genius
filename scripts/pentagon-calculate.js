function calculatePentagonArea() {
  // Get Pentagon p Value
  const pentagonPInput = document.getElementById("pentagon-p");
  const pentagonPText = pentagonPInput.value;
  const p = parseFloat(pentagonPText);
  //   console.log(p);

  // Get Pentagon b Value
  const pentagonBInput = document.getElementById("pentagon-b");
  const pentagonBText = pentagonBInput.value;
  const b = parseFloat(pentagonBText);
  //   console.log(b);

  //   Calculate Pentagon Area
  const area = 0.5 * p * b;
  //   console.log("Area Of the Pentagon is: ", area);

  //   Display Pentagon Area
  const pentagonAreaSpan = document.getElementById("pentagon-area");
  pentagonAreaSpan.innerText = area;
}
