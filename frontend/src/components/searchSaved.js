import './searchSaved.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SearchTitle = () => {
    const [title, setTitle] = useState("")
    const navigate = useNavigate();
  
    const onSubmit = async (event) => {
      event.preventDefault();
      try {
        // If the request is blank, send an alert
        if (title.trim() != "") {
          navigate(`/saved-recipes?filter=title&query=${title}`);
          location.reload();
        } else {
          alert("Invalid query");
        }

      } catch (err) {
        console.error(err);
      }
    }
  
    return (
      <Form
        title={title}
        setTitle={setTitle}
        formType="Search by title..."
        onSubmit={onSubmit}
      />
    );
};

const SearchCuisine = () => {
  const [title, setTitle] = useState("")
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      // If the request is blank, send an alert
      if (title.trim() != "") {
          navigate(`/saved-recipes?filter=cuisine&query=${title}`);
          location.reload();
      } else {
        alert("Invalid query");
      }

    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Form
      title={title}
      setTitle={setTitle}
      formType="Search by cuisine..."
      onSubmit={onSubmit}
    />
  );
};

const SearchDiet = () => {
  const [title, setTitle] = useState("")
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      // If the request is blank, send an alert
      if (title.trim() != "") {
        navigate(`/saved-recipes?filter=diet&query=${title}`);
        location.reload();
      } else {
        alert("Invalid query");
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Form
      title={title}
      setTitle={setTitle}
      formType="Search by diet..."
      onSubmit={onSubmit}
    />
  );
};

const SearchIngredients = () => {
  const [title, setTitle] = useState("")
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      // If the request is blank, send an alert
      if (title.trim() != "") {
        navigate(`/saved-recipes?filter=ingredients&query=${title}`);
        location.reload();
      } else {
        alert("Invalid query");
      }

    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Form
      title={title}
      setTitle={setTitle}
      formType="Search by ingredients..."
      onSubmit={onSubmit}
    />
  );
};

const Form = ({ title, setTitle, formType, onSubmit }) => {

    return (
        <div id={formType} className="tabcontent">
          <form onSubmit={onSubmit} className="searchForm">
            <div>
              <input
                className="searchInput"
                type="text"
                placeholder={formType}
                aria-label="Search through site content"
                id="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)} />
            </div>
            <button type="submit" className="searchButton">
              <svg viewBox="0 0 1024 1024" className='search-svg'>
                  <path className="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path>
              </svg>
            </button>
          </form>
        </div>
    );
}

export const SavedBar = () => {
  
    return (
      <div className="saved-topnav" id="myTopnav">
      <div className="dropdown">
        <div className="dropbtn">Search Saved Recipes
          <i className="fa fa-caret-down"></i>
        </div>
        <div className="dropdown-content">
          < SearchTitle />
          < SearchCuisine />
          < SearchDiet />
          < SearchIngredients />
        </div>
      </div>
    </div>
    )
}