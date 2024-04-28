1. 3 is returned - i is declared using a var, so it has the scope even outside the or loop. So after the loop is run, the value that i holds is still 3 so it is printed. 
2. the last discountedPrice that is calculated is 300*0.5 . Since discountedPrice is declared using var, it is still accessible outside the for block. Hence, the last calculated discountedPrice is printed. 
3. Similar as above, the last calculated final price is 150, as it is a var variable, it is accessed even outside the for block. 
4. the code returns that array that holds the discounted prices. Inside the for loop, eacl value in the original prices are recalculated and pushed into en empty (initally) array and that array holds all the calculated values, hence that is returned.
5. error, since i is declared inside the forloop and as it is declares using let, it cannot be accessed outside the loop.  
6. Similar as above, the variabe is declared using let, inside a for block adn so cannot be accessed outside the for loop. 
7. 150 is printed since it was the last value of the final prices that was calculated. SInce the variable was defined inside the function but not inside any code block, it's value ccan be modified after every iteraton of the for loop and the last value caulculated is stored when the log accesses it.
8. function retunes the array consisting of the discounted prices, sicne the array has been initialized using let inside the function but outside any code block, so it gets updated efficiently after every iteration of the for loop.
9. i is defined using let in a codeblock, so it cannt be accessed outside the block - error caused. 
10. 3 returned since that is the length of the array. Since lenght is declared outside the for look, there is no codeblock to restrict its scope.
11. It would return an empty array since discountedPrices is a constant variable and cannot be edited. 
    
12. a. student.name
12. b. student['Grad Year']
12. c. student.greeting()
12. d. student['Favorite Teacher'].name
12. e. student.courseLoad[0] 
13. 
A. 32 as 3 is concatenated to 3 as 3 is a string, so 2 is also added as a string 
B. 1 as 3 is converted into a number and subtracts 2 from it. 
C. 3 is retuned as nothing is added to the number 3 
D. 3null is resutned since string 3 is concatenated with the string null
E.  4 is returned since true is treated as 1 in numeric contexts. So 3+1 = 4
F. 0 since false is treated as 0 in numetric contexts and null is added to it, so its treated like 0+0
G. 3undefined - String representation od undefined is taken and concatenated with 3
H. NaN is returned since3 is conveted into a number and undefined is subtracted from it which is not a number. 

14. 
A. True, since 2 is converted into a number and compared with 1. 
B. false, since JS compares the string character by character from left to right. so '1' < '2'
C. True since '2' is converted into a number when being copared to 2
D. False, since the strict equality also cares about the type, and in this case they are not the same type 
E. false, since true is 1 in js, and 1 != 2
F. true, since boolean(2) is true and so, its true

15. == checks for loose equaliy, i.e., checks for value only and and performs type coercion before the values are compared 
    ==== is the strict equality operator, does not perorm type coercion, so checks equality for both value and type 

17. The retuned array is [2,4,6]. When an empty array newArr is initialized, for each element in the input array the element is multiplied by 2and the result it pushed to the new array. 

19. 
1
4
3
2