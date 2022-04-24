const $ = document;

// console.log("coucou");

// J'attend que mon contenu soit chargé
$.addEventListener("DOMContentLoaded", () => {
  console.log("Page Chargée");

  // Je sélectionne un bouton via son id, j'attend l'événement click. Quand celui-ci arrive, je déclenche un fonction anonyme.

  $.querySelector("#contact-form").addEventListener("submit", async (event) => {
    // J'empêche le rafraichissemnt de ma page
    event.preventDefault();
    // Je crée un objet
    const data = {
      firstname: $.querySelector("#firstname").value,
      lastname: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      subject: $.querySelector("#subject").value,
      message: $.querySelector("#message").value,
    };
    console.log(data);

    // Je fais une requête axios vers mon serveur
    const response = await axios.post("http://localhost:3000/form", data);

    console.log(response.data);
    alert("Merci pour votre formulaire");
  });
});
