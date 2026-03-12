// Definition for singly-linked list
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// Add Two Numbers function
function addTwoNumbers(l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    let sum = carry;

    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }

  return dummy.next;
}

// Helper to convert array to linked list
function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;

  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }

  return dummy.next;
}

// Helper to convert list to array
function listToArray(node) {
  const arr = [];
  while (node !== null) {
    arr.push(node.val);
    node = node.next;
  }
  return arr;
}

// Input
let l1 = arrayToList([2, 4, 3]); // 342
let l2 = arrayToList([5, 6, 4]); // 465

// Function call
let result = addTwoNumbers(l1, l2);

// Output
console.log(listToArray(result));
