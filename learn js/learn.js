const score = prompt("Enter your score:"); // prompt the user for their score

if (score >= 80 && score <= 100) {
  console.log("Grade: A");
} else if (score >= 70 && score < 80) {
  console.log("Grade: B");
} else if (score >= 60 && score < 70) {
  console.log("Grade: C");
} else if (score >= 50 && score < 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: E");
}