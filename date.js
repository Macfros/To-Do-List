
exports.getDate = function (){
  let date = new Date();

let today = {
 weekday: "long",
 day: "numeric",
 month : "long"

}

 let day = date.toLocaleDateString("en-US",today);
 return day;
}

exports.getDay= function (){
  let date = new Date();

let today = {
 weekday: "long",


}

 let day = date.toLocaleDateString("en-US",today);
 return day;
}
