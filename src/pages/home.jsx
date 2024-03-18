import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-8">Welcome</h1>
        
        <NavLink to="/submit"> 
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Submit Code Snippet
        </button>
         </NavLink>
         <NavLink to="/display"> 
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Display Code Snippets
        </button>
         </NavLink>
    </div>
  )
}
