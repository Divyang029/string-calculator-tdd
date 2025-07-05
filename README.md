# String Calculator TDD Kata (JavaScript + Jest)

This is a simple project that uses **Test-Driven Development (TDD)** to build a string calculator in JavaScript. TDD means we write tests first, then add code to make the tests pass. It helps us build reliable and clean code step by step.

---

## What this project does

* Adds numbers from a string input
* Supports unlimited numbers
* Supports new lines (`\n`) between numbers
* Allows custom delimiters like `//;\n1;2`
* Supports delimiters of any length, like `//[***]\n1***2***3`
* Supports multiple delimiters, like `//[*][%]\n1*2%3`
* Ignores numbers greater than 1000
* Throws an error if any negative numbers are given

---

## Project Structure

```
string-calculator-tdd/
├── package.json
├── package-lock.json
├── src/
│   └── stringCalculator.js
├── tests/
│   └── stringCalculator.test.js
├── .gitignore
└── README.md
```

---

## How to Run This Project

1. Clone the repository:

```bash
git clone https://github.com/your-username/string-calculator-tdd.git
cd string-calculator-tdd
```

2. Install dependencies:

```bash
npm install
```

3. Run tests:

```bash
npm test
```

---

## Test Cases

```js
add("")                  // 0
add("1")                  // 1
add("1,3")                // 4
add("1,2,3,4")            // 10
add("1\n2,3")             // 6
add("//;\n1;2")           // 3
add("1,1001,1002")          // 1 (ignores 1001 & 1002)
add("//[*][%]\n1*2%3")     // 6 (multiple delimeters)
add("//[***]\n1***2***3")   // 6 (custom delimiter of any length)
add("//[**][%%]\n1**2%%3")   // 6 (multiple delimeter of any length)
add("1,-5")                // throws error: negative numbers not allowed: -5
add("-1,-4,-2,1,8,-7")            // throws error: negative numbers not allowed: -1, -4, -2, -7
```

---


### Test Results

<div align="center">
  <img src="![image](https://github.com/user-attachments/assets/23ff726d-0b17-462a-9207-af0d9f47d0b9)" width="600" />
</div>

---

## Commit Style

This project uses clean, small commits for each step:

| Prefix     | What it means              |
| ---------- | -------------------------- |
| `feat`     | New feature added          |
| `test`     | New or updated tests       |
| `refactor` | Cleaned or improved code   |
| `chore`    | Comments, formatting, etc. |

---

## Tools and Technologies

* Node.js – for JavaScript runtime
* Jest – for running unit tests

---
