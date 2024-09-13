document.addEventListener("DOMContentLoaded", function () {
  // Obtén referencias a los elementos
  const infoPersonal = document.getElementById("informacionPersonal");
  const educacion = document.getElementById("educacion");
  const habilidadesTech = document.getElementById("habilidades");
  const proyectos = document.getElementById("proyectos");
  const idiomas = document.getElementById("idiomas");
  const referencias = document.getElementById("referencias");

  const linkInformacion = document.getElementById("linkInformacion");
  const linkEducacion = document.getElementById("linkEducacion");
  const linkHabilidades = document.getElementById("linkHabilidades");
  const linkProyectos = document.getElementById("linkProyectos");
  const linkIdiomas = document.getElementById("linkIdiomas");
  const linkReferencias = document.getElementById("linkReferencias");

  // Función para mostrar la sección seleccionada y ocultar las demás
  function showSection(sectionToShow) {
    const sections = [infoPersonal, educacion, habilidadesTech, proyectos, idiomas, referencias];

    sections.forEach(section => {
      if (section === sectionToShow) {
        section.classList.add("active"); // Mostrar solo la sección seleccionada
        section.classList.remove("inactive");
      } else {
        section.classList.remove("active"); // Ocultar las demás
        section.classList.add("inactive");
      }
    });
  }

  // Mostrar la sección de información personal al inicio
  showSection(infoPersonal);

  // Agregar eventos a los enlaces
  linkInformacion.addEventListener("click", function (event) {
    event.preventDefault();
    showSection(infoPersonal); // Mostrar solo infoPersonal
  });

  linkEducacion.addEventListener("click", function (event) {
    event.preventDefault();
    showSection(educacion); // Mostrar solo educacion
  });

  linkHabilidades.addEventListener("click", function (event) {
    event.preventDefault();
    showSection(habilidadesTech); // Mostrar solo habilidadesTech
  });

  linkProyectos.addEventListener("click", function (event) {
    event.preventDefault();
    showSection(proyectos); // Mostrar solo proyectos
  });

  linkIdiomas.addEventListener("click", function (event) {
    event.preventDefault();
    showSection(idiomas); // Mostrar solo idiomas
  });

  linkReferencias.addEventListener("click", function (event) {
    event.preventDefault();
    showSection(referencias); // Mostrar solo referencias
  });
});
