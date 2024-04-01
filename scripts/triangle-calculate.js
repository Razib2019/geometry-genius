/*
Objective: Get Base, Height Of a Triangle. Calculate the Area By Using The Provided Formula And Then Display The Area.
Step-01: Get Base Value of the triangle
Step-02: Added an id in the base input field
Step-03: Inside the function use getElementById to access the input field
Step-04: Get Value from the input field. (Value is string now)
Step-05: Convert the value to a number. Use parseFloat
*/
function calculateTriangleArea() {
  // Get Triangle Base Value
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  //   console.log(base);

  //   Get Triangle Height Value
  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);
  //   console.log(height);

  //   Calculate Triangle Area
  const area = 0.5 * base * height;
  //   console.log("Area Of the Triangle is: ", area);

  //   Display Triangle Area
  const triangleAreaSpan = document.getElementById("triangle-area");
  triangleAreaSpan.innerText = area;
}
