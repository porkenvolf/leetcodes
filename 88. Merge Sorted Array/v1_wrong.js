/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let index_1 = 0;
    let index_2 = 0;
    let buffer = [];

    while (index_1 < m) {
        let source;
        let isBuffer = false;
        if (buffer.length) {
            if (buffer[buffer.length - 1] < nums2[index_2]) {
                isBuffer = true;
                source = buffer[buffer.length - 1];
            } else source = nums2[index_2];
        } else {
            source = nums2[index_2];
        }
        if (nums1[index_1] > source) {
            console.log(isBuffer);
            if (!isBuffer) {
                buffer.push(nums1[index_1]);
                nums1[index_1] = nums2[index_2];
                index_1++;
                index_2++;
            }
        } else {
            index_1++;
        }
    }

    for (let i = 0; i < buffer.length; i++) {
        console.log("dsadsa");
        nums1[index_1] = buffer[i];
        index_1++;
    }
    for (index_2; index_2 < nums2.length; index_2++) {
        nums1[index_1] = nums2[index_2];
        index_1++;
    }
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
