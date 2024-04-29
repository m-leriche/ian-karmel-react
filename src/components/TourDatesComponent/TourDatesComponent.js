import styles from '../../styles/TourDatesComponent.module.css'

export default function TourDatesComponent({ tourDates }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  function parseDate(dateStr) {
    const rangeRegex = /^(\w+ \d+)(?: - \d+)? (\d{4})$/;
    const match = dateStr.match(rangeRegex);
    if (match) {
      dateStr = `${match[1]} ${match[2]}`;
    }
    return new Date(dateStr);
  }

  const validTourDates = tourDates && tourDates.filter(tourDate => {
    const eventDate = parseDate(tourDate.fields.date);
    return eventDate >= today;
  }).sort((a, b) => {
    const dateA = parseDate(a.fields.date);
    const dateB = parseDate(b.fields.date);
    return dateA - dateB;
  });

  return (
    <div className={`${styles.tourDates} fadeIn`}>
      {tourDates && tourDates.length === 0 &&
      <div className={styles.loadingScreen}>
        <h2>Loading...</h2>
      </div>
      }
      {validTourDates && validTourDates.map((tourDate, i) => {
          return (
            <div key={i} className={styles.container}>
              <div className={styles.location}>
                <p> {tourDate.fields.date} </p>
                <p> {tourDate.fields.location} </p>
                <p>{tourDate.fields.venue}</p>
              </div>
              <p className={styles.show}>{tourDate.fields.showType}</p>
              {tourDate.fields.ticketLink ? <a className={styles.ticket} href={tourDate.fields.ticketLink} target="_blank" rel="noopener noreferrer">Tickets</a> : null}
            </div>
          );
        })}
      </div>
  );
}
