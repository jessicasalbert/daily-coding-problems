// Merge two sorted linked lists

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 
// O(n) space & time 

var mergeTwoLists = function(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    
    // Set 'dummy' head node
    let head = new ListNode("-1");
    let current = head;
    
    // Adjust pointers based on smaller values
    while (l1 !== null && l2 !== null ) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next
        } else {
            current.next = l2;
            l2 = l2.next
        }
        current = current.next;
    }
    
    // Once one of the lists has been fully iterated through, add pointer to remainder of other list
    if (l1 === null) {
        current.next = l2;
    } else {
        current.next = l1
    }
    
    // Return new list minus dummy head
    return head.next;
};
