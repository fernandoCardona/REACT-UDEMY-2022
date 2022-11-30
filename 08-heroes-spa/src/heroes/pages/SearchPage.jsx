
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse( location.search );

  const heroes = getHeroesByName( q );

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const { searchText, handleInputChange } = useForm({
    searchText: q
  });



  const handleSearchSubmmit = (e) =>{
    e.preventDefault();
    if ( searchText.trim().length <= 1 ) return;

    navigate(`?q=${ searchText }`);
  }

    return (
      
      <>
        <h1>Search</h1>
        <hr />
        <div className="row">
            <div className="col-5">
                <h4>Searchings</h4>
                <hr />

                <form onSubmit={ handleSearchSubmmit }>
                    <input 
                        type="text"
                        placeholder="Search a hero..."
                        className="form-control"
                        name="searchText"
                        autoComplete="off"
                        value={ searchText }
                        onChange={ handleInputChange }
                    />

                    <button 
                        className="btn btn-outline-primary mt-3"
                        //onClick={ handleSearch }
                    >
                        Search
                    </button>
                </form>
            </div>

            <div className="col-7">
                <h4>Results</h4>
                <hr />

                <div  className="alert alert-primary animate__animated animate__fadeIn" 
                      style={ { display: showSearch  ? '' : 'none' } }>
                  Search a hero...
                </div>

                <div  className="alert alert-danger animate__animated animate__fadeIn" 
                      style={ { display: showError  ? '' : 'none' } }>
                  No hero match with <b>{ q }</b>
                </div>

                {
                  heroes.map( 
                    heroe =>  (
                        <HeroeCard key={heroe.id} { ...heroe }/> 
                    )
                  )
                }

            </div>
        </div>
        
      </>
    )
}
