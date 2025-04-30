import StudentCard from "./StudentCard";

const students = [
  {
    firstName: "Manal",
    lastName: "Boulahya",
    image: "/images/students/manal.png",
  },
  {
    firstName: "Sophia",
    lastName: "Rahmoun",
    image: "/images/students/sophia.png",
  },
  {
    firstName: "Beatrice",
    lastName: "Bokjo",
    image: "/images/students/beatrice.png",
  },
  {
    firstName: "Eren",
    lastName: "Bashar",
    image: "/images/students/eren.png",
  },
  {
    firstName: "Soulaiman",
    lastName: "Saaidi",
    image: "/images/students/soulaiman.png",
  },
  {
    firstName: "Achraf",
    lastName: "Benali",
    image: "/images/students/achraf.png",
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
