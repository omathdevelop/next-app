
export default async (userId:string) =>  {
const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
const res = await fetch(url);
if(!res.ok) undefined;
return res.json();
}

//  throw new Error('GetUserLibError `@getUserLib` failed to fetch user data');


