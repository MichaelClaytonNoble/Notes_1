// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

              
  //Definition for a binary tree node.
class TreeNode {
  constructor(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

// /**
//  * @param {number[]} nums
//  * @return {TreeNode}
//  */
var sortedArrayToBST = function(nums) {
    let middle = Math.floor(nums.length/2);

    if( nums.length === 0){
        return null;
    }

    let lefta = nums.slice(0,middle);
    let righta = nums.slice(middle+1); 

    let left = sortedArrayToBST(lefta);
    let right = sortedArrayToBST(righta);
    
    return new TreeNode(nums[middle], left, right);
};

console.log(sortedArrayToBST([-10,-3,0,5,9]));
