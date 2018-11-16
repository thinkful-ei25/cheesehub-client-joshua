const FETCH_CHEESES = 'FETCH_CHEESES'

const fetchCheesesSuccess = (cheese) => {
  return{
    type: FETCH_CHEESES,
    cheese
  }
}

const fetchCheesesError = (err) => {
  return err;
}

export const fetchCheeses = () => {
  return (dispatch) => {
    fetch(`http://localhost:8080/api/cheeses`)
    .then(res => res.json())
    .then(data => dispatch(fetchCheesesSuccess(data)))
    .catch(err => dispatch(fetchCheesesError(err)))
  }
}