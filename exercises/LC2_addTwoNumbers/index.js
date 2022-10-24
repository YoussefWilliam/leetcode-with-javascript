// You are given two non-empty linked lists representing two non-negative
// integers. The digits are stored in reverse order and each of their nodes
// contain a single digit. Add the two numbers and return it as a linked list.
// --- Example
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function spreadList(list) {
  let result = "";
  while (list) {
    result += list.val;
    list = list.next;
  }
  return result.split("").reverse().join("");
}
function addTwoNumbers(l1, l2) {
  let list1 = spreadList(l1);
  let list2 = spreadList(l2);
  let sumNodes = parseInt(list1) + parseInt(list2);
  let reversedSumNodesArray = String(sumNodes).split("");
  let resultNode = null;
  reversedSumNodesArray.map((digit) => {
    const head = new ListNode(Number(digit), resultNode);
    resultNode = head;
  });
  return resultNode;
}

module.exports = addTwoNumbers;
