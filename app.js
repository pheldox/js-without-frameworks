async function getUsers() {
  // await response for the fetch call
  const response = await fetch
  ('https://jsonplaceholder.typicode.com/users');
  
  // only proceed once its resolved
  const data = await response.json();

  //only proceed once second promise is resloved
  return data;

}
getUsers().then(users => console.log(users));