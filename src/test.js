var mergeTwoLists = function (list1, list2) {
  let arr = [...list1, ...list2].sort((a, b) => a - b);
  return arr;
};

console.log(mergeTwoLists([1, 7, 4], [1, 3, 4]));
