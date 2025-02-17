# Unhandled Promise Rejection in React Native

This repository demonstrates a common error in React Native: attempting to access a state variable or prop before it has been initialized. This often leads to an `undefined is not an object` error or similar.

## Problem
The `MyComponent` component attempts to access `props.userName` before React has fully mounted and passed the props.  This will result in an error.

## Solution
The solution involves checking if the prop is defined before attempting to use it.  This can be achieved using optional chaining or a conditional rendering. The updated code also includes error handling to show 'Loading...' while the data is being fetched or if data is unavailable.