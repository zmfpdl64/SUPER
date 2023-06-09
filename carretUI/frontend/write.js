const handleSubmitForm = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("/items", {
      method: "POST",
      body: new FormData(form),
    });
    const data = await res.json();
    if (data === "200") {
      window.location.pathname = "/";
    }
  } catch (e) {
    console.error("error occure" + e);
  }
};
const form = document.querySelector(".write-form");
form.addEventListener("submit", handleSubmitForm);
