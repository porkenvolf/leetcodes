/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (
    nums1 = [4, 5, 6, 0, 0, 0],
    m = 3,
    nums2 = [1, 2, 3],
    n = 3
) {
    let i = m - 1;
    let j = n - 1;
    let p = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[p--] = nums1[i--];
        } else {
            nums1[p--] = nums2[j--];
        }
    }
    while (j >= 0) {
        console.log(j);
        nums1[p--] = nums2[j--];
    }
};
merge();
