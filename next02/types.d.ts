type User<T, NT> = {
        id: NT
        name: T
        username: T
        email: T
        address: {
          street: T
          suite: T
          city: T
          zipcode: T
          geo: {
            lat: T
            lng: T
          }
        },
        phone: T
        website: T
        company: {
          name: T
          catchPhrase: T
          bs: T
        }

}

type Post<T, NT> = {
  userId:NT
  id:NT
  title:T
  body:T
}

type Result<T, NT> = {
  pageid:T
  title:T
  extract:T
  thumbnail?:{
    source:T
    width:NT
    height:NT
  }
} 

type SearchResult = {
  query?: {
    pages?:Result[]
  }
}