import StudentCard from "./StudentCard";

const students = [
  {
    firstName: "Manal",
    lastName: "Boulahya",
    image:
      "https://res.cloudinary.com/deq5iutqv/image/upload/v1747745689/pp_k1tblp.jpg",
  },
  {
    firstName: "Sophia",
    lastName: "Rahmoun",
    image:
      "https://res.cloudinary.com/deq5iutqv/image/upload/v1747745689/pp_k1tblp.jpg",
  },
  {
    firstName: "Beatrice",
    lastName: "Bokjo",
    image:
      "https://res.cloudinary.com/deq5iutqv/image/upload/v1747745689/pp_k1tblp.jpg",
  },
  {
    firstName: "Eren",
    lastName: "Bashar",
    image:
      "https://res.cloudinary.com/deq5iutqv/image/upload/v1747745689/pp_k1tblp.jpg",
  },
  {
    firstName: "Soulaiman",
    lastName: "Saaidi",
    image:
      "https://res.cloudinary.com/deq5iutqv/image/upload/v1747745689/pp_k1tblp.jpg",
  },
  {
    firstName: "Achraf",
    lastName: "Benali",
    image:
      "https://res.cloudinary.com/deq5iutqv/image/upload/v1747745689/pp_k1tblp.jpg",
  },
];

function StudentList() {
  return (
    <section className="students-section">
      <h2>STUDENTS</h2>
      <p>Multimedia & Creatieve Technologie</p>
      <div className="student-grid">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            firstName={student.firstName}
            lastName={student.lastName}
            image={student.image}
          />
        ))}
      </div>
    </section>
  );
}

export default StudentList;
