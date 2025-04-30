function StudentCard({ firstName, lastName, image }) {
  return (
    <div className="student-card">
      <img
        src={image}
        alt={`${firstName} ${lastName}`}
        className="student-image"
      />
      <p className="student-name">{firstName}</p>
      <p className="student-lastname">{lastName}</p>
    </div>
  );
}

export default StudentCard;
