console.log('Starting test');
await new Promise((res) => setTimeout( () => res(console.log('Waiting for 3 seconds')), 3000));

// await new Promise((res) => setTimeout( () => {
//     console.log('Waiting for 3 seconds');
//     res();
// }, 3000))


// const fn = await new Promise((res) => setTimeout( () => res( () => console.log('Waiting for 3 seconds')), 3000))
// fn();
 
console.log('Test complete!');