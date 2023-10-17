
export default async (userId:string) =>  {
    const url = `https://jsonplaceholder.typicode.com/posts?id=${userId}`;
    const res = await fetch(url);
    if(!res.ok) throw new Error('GetUserLibError `@getUserLib` failed to fetch post data');
    return res.json();
    }