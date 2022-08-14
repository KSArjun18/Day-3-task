
var json = [{
    "id" : "Arjun",
    "msg"   : "Day 3 task",
    "task" : "zen task",
    "mail": "arjunkishore18@gmail.com",
},
];
for(var i = 0; i < json.length; i++) 
{
    var obj = json[i];
    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);
}
json.forEach(function(obj) 
{ console.log(obj.msg); });
for (var key in json) {
if (json.hasOwnProperty(key)) 
{
  console.log(json[key].id);
}
}
let text = "";
for (let x of json[key].id)
 {
 text += x; 
}
 console.log(text);
