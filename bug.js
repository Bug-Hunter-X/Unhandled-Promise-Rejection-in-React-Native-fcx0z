This error occurs when you try to access a state variable or prop before it has been initialized.  This often happens during the initial render of a component. In this example, we are trying to access the 'userName' prop before it's been passed to the component.  
```javascript
// Buggy component
function MyComponent(props) {
  console.log(props.userName);
  return (
    <View>
      <Text>{props.userName}</Text>
    </View>
  );
}
```