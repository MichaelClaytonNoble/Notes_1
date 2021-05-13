// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/

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


function getHeight(root) {
  
  if(!root){
    return -1;
  }

  let left = getHeight(root.left);
  let right = getHeight(root.right);

  if( left > right){
    return 1+left;
  }
  else{
    return  1+right;
  }
}

var isBalanced=function(root){
  if(!root) return true;

  let diff= Math.abs(getHeight(root.left)- getHeight(root.right)) <= 1;
  return diff && isBalanced(root.left) && isBalanced(root.right);
}

const tree = sortedArrayToBST([-10,-3,0,5,9,10,11,15,17,18,19,20,21,22,24,64]);


console.log(isBalanced(tree));