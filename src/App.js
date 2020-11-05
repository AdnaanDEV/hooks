import React from "react" ;



const App  = ()=>{
  const [resourceType,setResourceType] = React.useState("posts")
  const [items,setItems] = React.useState([])

  React.useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then((response)=> response.json() )
    .then((json)=> setItems(json))
  },[resourceType])

  return(
    <div>
      <button onClick={()=> setResourceType("posts")}  >Posts</button>
      <button onClick={()=> setResourceType("users")}  >Users</button>
      <button onClick={()=> setResourceType("comments")}  >Comments</button>
       <h1>{resourceType}</h1>
       {
         items.map((item)=>{
           return <pre>{JSON.stringify(item)}</pre>
         })
       }

    </div>
  )
}

export default App ;


