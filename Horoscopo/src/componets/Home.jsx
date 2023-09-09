import Search from "./search";
import Admin from "./admin";

function Home({ user }) {
    return (
    <div className="App">
        <h1>Bienvenido: {user}</h1>
        {
            user == "admin"
            ?<Admin/> 
            :<Search/>
        }
    </div>
    );
}

export default Home;
