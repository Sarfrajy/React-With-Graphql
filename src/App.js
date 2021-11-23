   
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_POST, DELETE_POST } from "./GraphQL/Mutation";
import { getALL } from "./GraphQL/Query";
import { useState } from "react";
function App() {
  const { loading, error, data } = useQuery(getALL);
  const [createPost, { err }] = useMutation(CREATE_POST);
  const [deletePost, { errr }] = useMutation(DELETE_POST);

  const [Name, setName] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Phone, setPhone] = useState(null);
  const [DOB, setDob] = useState(null);

  if (loading) return "Loading";
  const addPost = () => {
    createPost({
      variables: {
        Name: Name,
        Email: Email,
        Phone:Phone,
        DOB:DOB
      },
    });
  };
  const removePost = (id) => {
    deletePost({
      variables: {
        id: id,
      },
    });
  };

  return (
    <div className="App">
      {data.getAll.map((data) => (
        <>
          <p key={data.Name}>
            {data.Name}----{data.Email}----{data.Phone}----{data.DOB}
          </p>
          <button onClick={() => removePost(data.id)}> Delete it </button>
        </>
      ))}
      <br />
      Name--- <input onChange={(e) => setName(e.target.value)} /><br/>
      <br />
      Email ---
      <input onChange={(e) => setEmail(e.target.value)} />
      <br /><br/>
     phone --- <input onChange={(e) => setPhone(e.target.value)} />
      <br /><br/>
      DOB ---<input onChange={(e) => setDob(e.target.value)} />
      <br /><br/>
      <button onClick={() => addPost()}>Add Post</button>
    </div>
  );
}

export default App;