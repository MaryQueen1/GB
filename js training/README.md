# Ex. 1 
###Your Task Is To Write A Function That **takes A String And Return A New String With All Vowels Removed (Гласные Удалены)**. **For Example**, The String 'This Website Is For Losers LOL!' Would Become 'Ths Wbst S Fr Lsrs LL!'. Note: For This Kata Y Isn't Considered A Vowel.

```javascript
function disemvowel(str) {
  return str.replace(/[euioa]/gi, "");
}
```

<!-- <span style="color:red;">Это красный текст</span> -->

### Flag `g (global)` Indicates (Указывает) That The `replace()` Method Should Replace All Vowels In The String  
### Flag `i` Indicates (Означает) That The Search Will Be Case Insensitive (К Регистру Невосприимчивый). In Both Lower And Upper Case
### [] - ``Symbol Class``: That Any One Of The Characters Inside The Brackets Will Match The Match Found (соответствовать найденном совпадению).

___
# Ex. 2
Digital Root (Цифорвой Корень) Is The Recursive Sum Of All The Digits In A Number. Given N, **Take The Sum Of The Digits Of N**. If That Value Has More Than One Digit, **Continue Reducing** (Уменьшать/Сокращать) **In This Way Until A Single-digit Number Is Produced** (Пока Не Получите). The Input Will Be A Non-negative Integer.  
**Examples**: 
* 16  -->  1 + 6 = 7
* 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
* 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
* 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
```javascript
function digitalRoot(n) {
    if (n < 10) {
        return n;
    } else {
    const sum = String(n)
      .split("")
      .reduce((acc, digit) => acc + Number(digit), 0);
    return digitalRoot(sum);
    }
}
```

### `String(n)` This Part Converts The Number `n` Into A String For Splitting
### The `split('')` Method Splits (Разбивает) A String Into An (На) Array Of Individual Characters
### The `reduce` Method Is Used To Reduce (Уменьшить) The Array To A Single Value (Значению). 
