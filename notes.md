The `parseInt()` function parses a string and returns an Integer.

- It takes a second argument for the radix, which specifies the base of the number in the string.

- The radix can be an integer between 2 and 36

```
parseInt(string, radix);
```

### Conditional (Ternary) Operator

`a ? b: c` where `a` is the condition, `b` is the code to run when the condition returns `true`, and `c` is the code to run when the condition returns `false`.

### Multiple Conditional Operators

```
function findGreaterOrEqual(a,b) {
    return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
```
