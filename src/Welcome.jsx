export default function Welcome({children, user='Anmol'}) {
    // return <div> Welcome to the StackOverflow Clone - {collegeName}</div>
   return <>
    <div>Welcome to StackOverflow Colne {user}</div>
    <div>Have a great day</div>
    {children}
    </>
}
