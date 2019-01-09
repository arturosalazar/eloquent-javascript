/*
  Write a function "arrayToList" that builds up a list structure like
  the one shown when given [1, 2, 3] as argument.

  Also write a "listToArray" function that produces an array from a list.

  Then add a helper function "prepend", which takes an element and a list
  and creates a new list that adds the element to the front of the input list

  and "nth", which takes a list and a number and returns the element at the
  given position in the list (with zero referring to the first element) or
  undefined when there is no such element.

  If you haven’t already, also write a recursive version of nth.
*/

//arrayToList
function arrayToList(arr){
  let list = null;
  for (i = arr.length-1; i >= 0; i--){
	   list = {value: arr[i], rest: list};
  }
  return list;
}

//listToArray
function listToArray(list){
  let arr = [];
  while (list.rest = list.rest){
    arr.push(list.value);
    list = list.rest;
  }
  arr.push(list.value);
  return arr;
}

//prepend
function prepend(element,list){
  return list = {value:element, rest:list}
}

//nth
function nth(list, number){
  let element;
  for (i = 0; i <= number; i++){
    element = list.value;
    list = list.rest;
  }
  return element; 
}

