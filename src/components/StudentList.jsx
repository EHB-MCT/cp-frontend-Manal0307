import StudentCard from "./StudentCard";

const students = [
  {
    firstName: "Manal",
    lastName: "Boulahya",
    image:
      "https://res.cloudinary.com/deq5iutqv/image/upload/v1748277121/pp1_xftnk4.png",
  },
  {
    firstName: "Sophia",
    lastName: "Rahmoun",
    image:
      "https://res.cloudinary.com/deq5iutqv/image/upload/v1748277127/pp4_toeckn.png",
  },
  {
    firstName: "Beatrice",
    lastName: "Bjoko",
    image:
      "https://res.cloudinary.com/deq5iutqv/image/upload/v1748278388/raw_zfdcgr.png",
  },
  {
    firstName: "Eren",
    lastName: "Bashar",
    image:
      "https://res.cloudinary.com/deq5iutqv/image/upload/v1748277124/pp3_q6aial.png",
  },
  {
    firstName: "Meo",
    lastName: "Klaklang",
    image:
      "https://res.cloudinary.com/deq5iutqv/image/upload/v1748277455/Meo_unxqxn.png",
  },
  {
    firstName: "Achraf",
    lastName: "Benali",
    image:
      "https://res.cloudinary.com/deq5iutqv/image/upload/v1748277122/pp2_cqgx32.png",
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
