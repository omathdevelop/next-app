export default async ({name, email, message}:FeedBack<string>) => {
const response = await fetch('http://localhost:3000/api/feedback', 
{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, message})
}
);
const res = await response.json();
 return res;
}