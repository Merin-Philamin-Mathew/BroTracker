import React, { useState } from 'react';
import axios from 'axios';
import db from '../../../../config/firebase_config';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';


const GithubUser = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');

  const fetchGithubUser = async () => {
    try {
      const response = await axios.get('https://api.github.com/users/Merin-Philamin-Mathew');
      setName(response.data.name);
      setCompany(response.data.company);
      createStudent({
        name:response.data.name,
        company:response.data.company
      })
    } catch (error) {
      console.error('Error fetching the GitHub user data', error);
    }
  };

const studentCollectionRef = collection(db, 'student');



// Create a new student
const createStudent = async (student) => {
  try {
    await addDoc(studentCollectionRef, student);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};



  return (
    <div>
      <button onClick={fetchGithubUser}>Fetch GitHub User Details</button>
      <div>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Company:</strong> {company}</p>
      </div>
    </div>
  );
};

export default GithubUser;
