# TypeScript Type Error: Adding Number and String

This example demonstrates a common type error in TypeScript: attempting to add a number and a string. TypeScript's type system catches this error during compilation, preventing runtime issues.

## Bug

The `add` function is defined to accept two numbers and return their sum. However, the code attempts to call it with a number and a string, resulting in a type error.

## Solution

The solution involves ensuring that both arguments passed to the `add` function are numbers. This can be done through explicit type casting or by ensuring that the input data is already of the correct type.
