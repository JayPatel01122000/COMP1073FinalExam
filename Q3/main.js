let requestURL = "https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json"

//Create new XHR object, XHR object allows us to fetch data without a page referesh
let request = new XMLHttpRequest();
//opening a new request
request.open('GET', requestURL);
//remove pizzaType
request.responseType = 'json';
//send the request using the send method
request.send();


request.onload = function() {
let cats = request.response;
console.log(cats);
cat(cats);

};

function cat(jsonObj){
  let cat = jsonObj.cat;

}
