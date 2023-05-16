import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRockets } from '../redux/rocketsSlice';

function Rockets() {
  const {
    name,
    id,
    type,
    flickrImages,
  } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <div>
      <h1>Rockets</h1>
      <h3>{name}</h3>
      <h2>{id}</h2>
      <h2>{type}</h2>
      <img src={flickrImages} alt="test" />
    </div>
  );
}

export default Rockets;
