import { NextResponse } from "next/server";

const allowedOrigin = process.env.NODE_ENV === 'production'? (
    ['https://www.site.com', 'https://site.com']
): (['http://localhost:3000', 'https://www.google.com'])
export const middleware = (req:Request) => {
 console.log('MIDDLWARE');
const regex = new RegExp('/api/*');
// if(req.url.includes('/api/')){}
// if(regex.test(req.url)){}
 console.log({method:req.method});
 console.log({url: req.url});
//   if (req.url == 'http://localhost:3000/') return NextResponse.redirect('http://localhost:3000/feedback')

  console.log({header: req.headers})
  const origin = req.headers.get('origin');
  console.log({origin});

  if(origin && !allowedOrigin.includes(origin)) return new NextResponse(null, {
    status: 400,
    statusText: 'Bad Request',
    headers: {
        'Content-Type': 'text/plain'
    }
  })

  return NextResponse.next();
}

export const config = {
    matcher: '/api/:path*'
}