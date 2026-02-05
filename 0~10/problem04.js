// const arr1 = [2, 4, 3];
// const arr2 = [5, 6, 4];
// console.log(arr1.push(...arr2)); // 6
// console.log(arr1); // [2, 4, 3, 5, 6, 4]
// // 오름차순 정렬
// arr1.sort((a, b) => a - b);
// console.log(arr1); // [2, 3, 4, 4, 5, 6]
// if (arr1.length % 2 === 0) {
//   console.log(arr1[arr1.length / 2 - 1] + +arr1[arr1.length / 2]); // 4
// }

var findMedianSortedArrays = function (nums1, nums2) {
  const merge = [...nums1, ...nums2].sort((a, b) => a - b);
  if (merge.length % 2 === 0) {
    return (merge[merge.length / 2 - 1] + merge[merge.length / 2]) / 2;
  } else {
    // return merge[Math.floor(merge.length / 2)];
    return merge[(merge.length - 1) / 2];
  }
};

console.log(findMedianSortedArrays([1, 3], [2])); // 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5

// --- other faster solution ---
// var findMedianSortedArrays = function (nums1, nums2) {
//   // 두 정렬된 배열을 병합 (Merge)
//   const merged = [];
//   let i = 0, j = 0;

//   while (i < nums1.length && j < nums2.length) {
//     if (nums1[i] < nums2[j]) {
//       merged.push(nums1[i++]);
//     } else {
//       merged.push(nums2[j++]);
//     }
//   }

//   // 남은 요소 추가
//   while (i < nums1.length) merged.push(nums1[i++]);
//   while (j < nums2.length) merged.push(nums2[j++]);

//   const len = merged.length;
//   const mid = Math.floor(len / 2);

//   return len % 2 === 0
//     ? (merged[mid - 1] + merged[mid]) / 2
//     : merged[mid];
// };
