import { NextResponse } from "next/server";

const DATA_SOURCE_URL = 'https://jsonplaceholder.typicode.com/todos';
const API_KEY:string = process.env.SECRET_DATA as string
export const GET = async () => {
    const res = await fetch(DATA_SOURCE_URL);
    const todos: Todo<string, number, boolean>[] = await res.json()
    return NextResponse.json(todos);
};


export const DELETE = async (request: Request) => {
    const { id }: Partial<Todo<string, number, boolean>> = await request.json();
    if(!id) return NextResponse.json({"message": "Todo id is required!!"});
    
    await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY
        }
    })
    return NextResponse.json({"message": `Todo ${id} deleted`})
};

export const POST = async (request:Request) => {
    const {userId, title, completed}:Partial<Todo<string, number, boolean>> = await request.json();
  const isTrue = !title && !completed && !userId;

   if(isTrue) return NextResponse.json({"message": "Missing Required Data"});

   const res = await fetch(DATA_SOURCE_URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'API-Key': API_KEY
    },
    body: JSON.stringify({
        userId, title, completed:false
    })
   })
   const newTodo:Partial<Todo<string, number, boolean>> = await res.json();

   return NextResponse.json(newTodo);

};
export const PUT = async (req:Request) => {
    const {id, userId, title, completed}:Partial<Todo<string, number, boolean>> = await req.json();
    const isTrue = !userId || !id || !title || !completed || userId !== id || typeof(completed) !== 'boolean';
    
       if(isTrue) return NextResponse.json({"message": "Missing Essential Data"}, {status: 404});
     
       const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY

        },
        body: JSON.stringify({
            userId, title, completed
        })
       });

    //  const updatedTodo:Todo<string, number, boolean> = await res.json();

    //  return NextResponse.json(updatedTodo, {status: 200, statusText: "success"});
      
    await res.json();
    return NextResponse.json({"message": "Successfully Modifield Todo"})

}




















