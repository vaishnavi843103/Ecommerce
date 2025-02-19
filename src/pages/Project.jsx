import React from 'react'
import { Link } from 'react-router-dom';

const Project = () => {
  return <div>Project
        <a href="/hi">hello set</a>
        <Link to={"/vaish"}>hello world</Link>
        <Link to={"/anu"}>kle</Link>
    </div>;
  
};

export default Project;

