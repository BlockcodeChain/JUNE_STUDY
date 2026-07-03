import Search from "./SearchBar"

const Home = () => {
  return (
   <div className="w-screen h-screen mx-auto flex flex-col bg-black text-white">
      
         <h1 className="text-5xl pt-5 text-center h-22    font-bold ">Student Management</h1>
     

       <Search/>
   </div>
  )
}

export default Home