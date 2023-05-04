// Implement the ensure function so that it throws an error if called without arguments or the argument is undefined. Otherwise it should return the given value.

function ensure(value) {
    // Your code goes here
    if (value === undefined) {
        throw new Error('No value provided.');
      }
      return value;
  }
  
  try {
    console.log(ensure()); // This will throw an error
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    } else {
      throw err;
    }
  }

  try {
    console.log(ensure('Hello World')); // This will return 'Hello World'
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    } else {
      throw err;
    }
  }

 

  
 
  
 
  
  
  
  
  
  