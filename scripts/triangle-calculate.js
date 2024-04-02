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
  const base = getInputValueById("triangle-base");
  //   console.log(base);

  //   Get Triangle Height Value
  const height = getInputValueById("triangle-height");
  //   console.log(height);

  //   Calculate Triangle Area
  const area = 0.5 * base * height;
  //   console.log("Area Of the Triangle is: ", area);

  //   Display Triangle Area
  setInnerTextById("triangle-area", area);
}
