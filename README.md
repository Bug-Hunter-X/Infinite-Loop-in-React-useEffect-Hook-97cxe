# React useEffect Infinite Loop Bug
This repository demonstrates a common bug in React's `useEffect` hook: an infinite loop caused by missing dependencies in the effect's dependency array.

## Bug Description
The `MyComponent` function uses the `useEffect` hook to update the `count` state variable. However, the `count` variable is used within the effect itself without being included in the dependency array. This leads to an infinite loop, as the component constantly re-renders, triggering the `useEffect` hook again and again.

## Solution
The solution involves adding `count` to the dependency array.  This ensures that the effect only runs when the `count` variable changes.

## How to reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the infinite loop in the console and browser (usually indicated by excessive re-rendering messages and potentially browser hangs).