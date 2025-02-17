The solution uses optional chaining and conditional rendering to gracefully handle the case where the prop hasn't been initialized yet.
```javascript
// Corrected component
function MyComponent(props) {
  //Check if prop is defined before using optional chaining
  const userName = props?.userName || 'Guest';

  return (
    <View>
      <Text>{userName}</Text> 
    </View>
  );
}
```