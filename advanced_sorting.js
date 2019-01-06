var students = [
 { id: 1, name: "bruce",  age: 40 },
 { id: 2, name: "zoidberg", age: 22 },
 { id: 3, name: "alex",   age: 22 },
 { id: 4, name: "alex",   age: 30 }
];
​
​
​
var sortAge=function(a,b){
 return b.age -a.age;
}
​
var sortName = function(a,b){
 var nameA=a.name;
 var nameB=b.name;
 console.log(nameA,nameB)
​
 if (nameA < nameB){
  console.log('nameA comes before nameB')
  return -1;
}
else if (nameA > nameB){
 console.log('nameB comes before nameA')
  return 1;
 }
 else {
  console.log('nameA === nameB')
  return sortAge(a,b)
 }
}
​
console.log(students.sort(sortName))
