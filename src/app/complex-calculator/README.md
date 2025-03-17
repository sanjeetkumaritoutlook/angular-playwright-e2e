## complex calculator

✅ Basic Arithmetic Operations (Add, Subtract, Multiply, Divide)
✅ Memory Functions (MC, MR, M+, M-)
✅ Grand Total (GT)
✅ Percentage Calculation
✅ Clear (C/CE)
✅ On/Off Button

## What we Achieved:
✅ Real-world calculator 
✅ Playwright E2E test for all functionalities
✅ Supports Memory, GT, Arithmetic Operations

## logic implementation

Create buttons for numbers, operations (+, -, *, /), and special functions like MC, MR, M+, M-, GT, and CE.

Implement a display to show the current input and result.

Logic Handling in TypeScript:

Handle arithmetic operations and memory functions.

Store intermediate results and manage the Grand Total (GT).

Verify memory operations (MC, MR, M+, M-).

## No eval() warning

▲ [WARNING] Using direct eval with a bundler is not recommended and may cause problems [direct-eval]

https://esbuild.github.io/link/direct-eval

You can use Function() constructor or implement a safer approach with math.js library or your own expression parser.

earlier:

this.currentValue = eval(this.currentValue).toString();

now:

this.currentValue = Function(`'use strict'; return (${this.currentValue})`)();

Solution 2: Using math.js library (Recommended for complex expressions)

import { evaluate } from 'mathjs';



