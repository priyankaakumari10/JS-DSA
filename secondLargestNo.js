function secondLargest(arr){
 let firstLargest;
 let secLargest;

 for(let i=0;i<arr.length;i++){
    if(arr[i]>firstLargest) 
        firstLargest=arr[i];
 }

 for(let i=0;i<arr.length;i++){
    if(arr[i]!=firstLargest && arr[i]>secLargest) 
        secLargest=arr[i];
 }
 return secLargest
}

let arr = [4,8,9,10,2,6]
let result = secondLargest(arr);
