/**
 * 输入一个按升序排序的数组和一个数字，在数组中查找两个数，使得他们的和正好是输入的那个数字。
 * 要求时间复杂度是O(n)，如果有多个结果输出任意一个即可
 * 例如输入数组1.2.4.7.11.15和数字15
 * 由于4+11=15，因此输出4和11
 */
function solution(array,sum){
    var oSum = -1;
    var time = 0;
    for(i=0;i<array.length;i++){
        for(j=0;j<array.length;j++){
            oSum = array[i]+array[j];
            if(oSum == sum){
                time++;
                console.log(array[i],array[j]);
            }
        }
    }
    if(time == 0){
        return false;
    }
}
solution([1,2,4,7,10,15],15);
/**
 * 快速排序&冒泡排序
 */

/**
 * 数组去重
 */

/**
 * js实现轮播
 */

/**
 * jquery插件
 */