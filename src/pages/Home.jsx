import AddTutorial from '../components/AddTutorial';
import TutorialList from '../components/TutorialList';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const url = "https://axios-example-cw.herokuapp.com/api/tutorials";

  const getTurorials = async () => {
    try {
      const { data } = await axios.get(url);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTurorials();
  }, [])

  const addTutorial = async(tutorial) => {
    try {
      await axios.post(url, tutorial) 
    } catch (error) {
      console.log(error);
    }
    getTurorials();
  }
  const deleteTutorial = async(id) =>{
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTurorials();
  }
  //! Update(PUT:whole update, PATCH:partial update)
  const editTutorial = async(id,title, desc) => {
    const filtered = tutorials.filter((tutor)=> tutor.id === id).map(() =>({
      title:title, description:desc
    }))
    console.log(filtered)
    try {
      await axios.put(`${url}/${id}`,filtered[0])
    } catch (error) {
      console.log(error);
    }
    getTurorials();
  };

  return (
    <>
      <AddTutorial addTutorial={addTutorial}/>
      <TutorialList tutorials={tutorials}
       deleteTutorial ={deleteTutorial}
       editTutorial={editTutorial}
       />
    </>
  );
};

export default Home;
