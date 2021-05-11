class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
   constructor(){
     this.root = null;
   }

   insert(val, root=this.root){
    if(!this.root){ 
      this.root = new TreeNode(val);
      return;
    }

    if( val < root.val){
      if( !root.left ){
        root.left = new TreeNode(val);
      }
      else{
        this.insert(val, root.left);
      }
    }
    else{
      if( !root.right ){
        root.right = new TreeNode(val);
      }
      else{
        this.insert(val, root.right);
      }
    }
   }

  searchIter(val){
    if(!this.root){return false;}

    let children = [this.root];

    while (children.length > 0){
      let child = children.pop();
      if( child.val === val) {
        return true;
      }
      if( child.left ){
        children.push(child.left);
      }
      if( child.right ){
        children.push(child.right);
      }
    }
    return false;
  }

  searchRecur(val, root=this.root){
    if(!root){return false;}
    if( val < root.val){
      return this.searchRecur(val, root.left);
    }
    else if( val > root.val) {
      return this.searchRecur(val, root.right);
    }else{
        return true;
    }
  }
}

module.exports = {
    TreeNode,
    BST
};