import "bootstrap";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = ExcuseGen();
  console.log("Test" + ExcuseGen);
};

let ExcuseGen = () => {
  let pronoun = ["A", "The"];
  let subject = [
    "tiger",
    "very angry Argentinian",
    "super hot lady",
    "Comedian named Jerry Sinefield",
    "Spanish Inquisition group"
  ];
  let action = ["ran over my", "ate my", "flew away with my", "seduced my"];
  let place = [
    "in the Congo",
    "in the club",
    "in your mother's living room",
    "at the function"
  ];
  let item = ["dog", "phone", "guitar", "savings", "best friend"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let placeIndex = Math.floor(Math.random() * place.length);
  let itemIndex = Math.floor(Math.random() * item.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    item[itemIndex] +
    " " +
    place[placeIndex]
  );
};
