import './ApartmentInfos.scss';

function ApartmentInfos(props) {
  const { title, location, tags, host, rating } = props.data;

  const [firstName, lastName] = host.name.split(' ');

  return (
    <div className="apartment-header">
      <div className="apartment-info">
        <h1>{title}</h1>
        <h2>{location}</h2>
        <div className="apartment-tags">
          {tags.map((tag, index) => (
            <span key={index} className="apartment-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="apartment-details__owner">
        <div className="apartment-details">
          <h3>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>
          <div className="apartment-details__badge">
            <img
              className="apartment-details__badge"
              src={host.picture}
              alt={host.name}
            />
          </div>
        </div>
        <div className="apartment-stars">
          {[...Array(5)].map((_, num) => (
            <span key={num} className={rating > num ? 'star-on' : 'star-off'}>
              <i class="fa-solid fa-star"></i>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ApartmentInfos;
