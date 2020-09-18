// таск 7
/*let n = 1000,
    num = 0;
while (true) {
    n / 2;
    num++;
    if (n <= 50) break;
}
console.log("N=" + n + ", num=" + num);*/




// таск 9
/*let str1 = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let arr1 = str1.split(' ');
let max = arr1[0],
    min = arr1[0];
for (i = 0; i < arr1.length; i++) {
    (max < arr1[i]) ? max = arr1[i]: '';
    (min < arr1[i]) ? minax = arr1[i]: '';
}
console.log("Максимальное число в строке: " + max);
console.log("Минимальное число в строке: " + min);*/


таск 10

let str2 = 123456,
    str2Rev;
let arr2 = (str2 + '').split('');
sum = 0;
for (i = 0; i < arr2.length; i++) {
    arr2[i] = +arr2[i];
    sum += arr2[i];
    console.log(arr2[i] + " ");
}
str2Rev = Number(arr2.reverse().join(''));
console.log("В числе" + str2 + "" + arr2.length + " цифр, сумма цифр равна " + sum + ",  обратный порядок " + str2Rev);