LEET CODE PROBLEMS;

TWO SUM: SOLVED BY MYSELF

var twoSum = function(nums, target) {
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                result=[i,j];
                return result;
            }
        }
    }
    
LONGEST PREFIX : COULDNT SOLVE

var longestCommonPrefix = function(strs) {
   prefix=strs[0];
   if (strs.length==0) return "";
    for(let i=1;i<strs.length;i++){
        while(strs[i].indexOf(prefix)!+=0 ){}
            prefix=prefix.slice(0,-1);
            if(prefix =="") {return "" };
        }
        }
      
        
        
        
return prefix;

    }
    

REMOVE DUPLICATES: DIDNT SOLVE 

var removeDuplicates = function (nums) {
    let p = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[p] = nums[i]
            p++;
        }

    }
    return p
};


REMOVE ELEMENTS: SOLVED MYSELF(But was similar to previous question)

var removeElement = function(nums, val) {
    let k=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[k]=nums[i];
            k++;
        }
    }
    return k;
};



Search Insert Position: Solved myself
var searchInsert = function(nums, target) {
    let insert=0;
    if(target>nums[nums.length-1]) return nums.length;
    
    for(let i=0;i<nums.length;i++){
        if (nums[i]!=target){
            if (nums[i]>target){
                return i;

            }
        }
        else return i
        
        
        

        
    }
    
};