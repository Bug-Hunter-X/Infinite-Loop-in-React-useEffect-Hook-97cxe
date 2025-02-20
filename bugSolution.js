```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Now the dependency array includes 'count', fixing the infinite loop
    setCount(prevCount => prevCount + 1); 
  }, [count]); // Added count to the dependency array

  return <div>Count: {count}</div>;
}
```