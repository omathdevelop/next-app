
export default async () => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const res = await fetch(url);
   if(!res.ok)  undefined;
   return res.json();
}


// throw new Error('UserLibError `@userLib` failed to fetch data')