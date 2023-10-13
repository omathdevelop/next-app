
export default async (userId: string) => {
    const url = `https://jsonplaceholder.typicode.com/posts?id=${userId}`;
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok)  undefined;
    return res.json();
};

// throw new Error('GetUserLibError `@getUserLib` failed to fetch post data');