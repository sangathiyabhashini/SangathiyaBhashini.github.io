function Projects() {

  const projects = [

    {
      title: "Teacher Data Management System",
      desc: "Manage teacher records using Flask and MySQL."
    },

    {
      title: "Smart Building Energy Management",
      desc: "IoT dashboard for monitoring electricity usage."
    },

    {
      title: "Emergency Buzzer System",
      desc: "Emergency alert system using Arduino and LoRa."
    }

  ];

  return (

    <section>

      <h2>Projects</h2>

      <div className="cards">

        {projects.map((project, index) => (

          <div className="card" key={index}>

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Projects;
