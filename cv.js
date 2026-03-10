async function loadCV() {
  try {
    const response = await fetch("./experience.json");
    const data = await response.json();

    const workSection = document.getElementById("work-section");

    workSection.innerHTML = "";

    data.work.forEach((job) => {
      const article = document.createElement("article");
      article.className = "cv-item";

      article.innerHTML = `
        <h4>${job.company}</h4>
        <h5>${job.role} | ${job.period}</h5>
        ${job.description ? `<p>${job.description}</p>` : ""}`; //ternary, om truthy skriv ut beskrivning, falsy en tom sträng

      workSection.appendChild(article);
    });

    const educationSection = document.getElementById("education-section");
    educationSection.innerHTML = ""; //tömmer först för att förhindra duplicering

    data.education.forEach((education) => {
      const article = document.createElement("article");
      article.className = "cv-item";

      article.innerHTML = `
    <h4>${education.school}</h4>
    <h5>${education.degree} | ${education.period}</h5>
    ${education.note ? `<p>${education.note}</p>` : ""}`;

      educationSection.appendChild(article);
    });
  } catch (error) {
    console.log("Misslyckades att ladda CV:", error);
  }
}

loadCV();
