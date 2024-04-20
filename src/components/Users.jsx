//import gql baraye moshakhas kardane chizayi ke az server mikhaym 
//import useQuery braye Query va Get kardane un DATA ha
import { gql, useQuery } from "@apollo/client"

//syntax gql
//const GET_USERS = gql`  data E ke mikhaym get beshe      `
const GET_USERS = gql` 
query {
    users{
      data {
        id,
        name,
        email,
        phone,
      }
    }
  }
`;

function Users() {
    //moshakhas kardane chizayi ke az server mikhaym 
    const { loading, data, error } = useQuery(GET_USERS);
    console.log({ loading, data, error });
    //Estefade az una dar js
    if (loading) return <h3>Loading ...</h3>
    if (error) return "Somthing went wrong."

    return (

        <div>
            {/* map zadan va  namayeshe un ha dar Front | user hamoon usere 
            uri: "https://graphqlzero.almansi.me/api", hast  */}
            {data.users.data.map(user =>
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </div>)}

        </div>
    )
}

export default Users