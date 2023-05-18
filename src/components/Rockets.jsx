import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { getRocketsIfNeeded, reservation } from '../redux/rocketsSlice';
import '../styles/rockets.css';

function Rockets() {
  const { rocketList } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRocketsIfNeeded());
  }, [dispatch]);

  const handleReservation = (rocketId) => {
    dispatch(reservation(rocketId));
  };

  return (
    <>
      {rocketList.length > 0 ? (
        rocketList.map((rocket) => (
          <div className="rockets" key={rocket.id}>
            <img
              className="rockets__img"
              src={rocket.flickr_images}
              alt="test"
            />
            <div className="rockets__container">
              <div className="rockets__name-container">
                <h2 className="rockets__name">{rocket.rocket_name}</h2>
                {rocket.reserved && (
                  <span className="rockets__reserved">Reserved</span>
                )}
              </div>
              <h3 className="rockets__description">{rocket.description}</h3>
              <Button
                onClick={() => handleReservation(rocket.id)}
                className={rocket.reserved ? 'button cancel-button' : 'button'}
                variant="primary"
              >
                {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
              </Button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Rockets;
