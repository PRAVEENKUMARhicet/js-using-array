//1.find index of first occurence//

        const array = [10, 20, 30, 40, 30];
        const index = array.indexOf(30);
        console.log(index); 

        const arr=['sam','praveen','veeramani','mugesh']
        const ind=arr.indexOf('mugesh');
        console.log(ind)

//2.Creating a new array with a given length 
        let length = 3;
        let value = 10;
        let arr2= new Array(length).fill(value);
        console.log(arr2);

//3.array dedulication
        let arr3 = [7,2,2,0,8,8,8,9,10];
        let res= [...new Set(arr3)];
        console.log(res);

//4.finding diff btwn two arrays
       let arrayA = [1, 2, 3, 4, 5];
       let arrayB = [4, 5, 6, 7];
       let diffAB = arrayB.filter(item => !arrayA.includes(item));
       console.log(diffAB);

//5.looping array elements
       let array2 = ['targareyan','lannister','bolton','tarly'];
       for (let i = 0; i < array2.length; i++) {
       console.log(array2[i]);
    }