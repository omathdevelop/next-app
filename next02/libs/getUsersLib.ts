
export default async () => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const res = await fetch(url);
   if(!res.ok) throw new Error('UserLibError `@userLib` failed to fetch data')
   return res.json();
}
