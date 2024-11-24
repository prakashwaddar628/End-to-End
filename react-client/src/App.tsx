import UserDisplay from "./components/UserDisplay";
import type { User } from "./types";

function App() {
  const users: User[] =[{
    name: 'Prakash',
    messages: [{
      body: 'hey there!'
    },{
      body: 'Whats up man'
    }]
  }]
  return <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
    {users.map ((user, index)=> <UserDisplay user={user} key={index}/>)} 
    {}
  </div>
}

export default App;
