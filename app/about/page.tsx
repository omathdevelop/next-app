import Link from "next/link";
const About = () =>  {
  // throw new Error('AboutError `@About-Component`')
  return (
    <>
    <h1>About Route</h1>
    <Link href={'/'}>Back To Home</Link>
    </>
  )
}

export default About;
