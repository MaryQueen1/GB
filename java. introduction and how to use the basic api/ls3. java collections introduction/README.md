## Задача 6.
Внутри класса MergeSort напишите метод mergeSort, который принимает массив целых чисел a и реализует алгоритм сортировки слиянием. Метод должен возвращать отсортированный массив.
Пример: a = {5, 1, 6, 2, 3, 4} -> [1, 2, 3, 4, 5, 6]
<image src = "\C:\Users\Maria\OneDrive\GB\java. introduction and how to use the basic api\ls3. java collections introduction\merge_sorting.jpg">

## Задача 7.
Напишите функцию removeEvenNumbers, которая принимала бы произвольный список целых чисел, удаляла бы из него четные числа и выводила список без четных чисел.  
Напишите свой код в методе removeEvenNumbers класса Answer. Метод removeEvenNumbers принимает на вход один параметр:
Integer[] arr - список целых чисел  
Пример  
arr = new Integer[]{1, 2, 3, 4, 5, 6, 7, 8, 9};  
removeEvenNumbers(arr);  
// [1, 3, 5, 7, 9]  
arr = new Integer[]{2, 4, 6, 8};  
removeEvenNumbers(arr);  
// []

## Задача 8.
Напишите функцию analyzeNumbers, которая принимает на вход целочисленный список arr и:  
Сортирует его по возрастанию и выводит на экран
Находит минимальное значение в списке и выводит на экран - Minimum is {число}
Находит максимальное значение в списке и выводит на экран - Maximum is {число}
Находит среднее арифметическое значений списка и выводит на экран - Average is =  {число}
Напишите свой код в методе analyzeNumbers класса Answer. Метод analyzeNumbers принимает на вход один параметр:  
Integer[] arr - список целых чисел  
Пример  
arr = new Integer[]{4, 2, 7, 5, 1, 3, 8, 6, 9};  
analyzeNumbers(arr)  
// [1, 2, 3, 4, 5, 6, 7, 8, 9]  
// Minimum is 1  
// Maximum is 9  
// Average is = 5  
