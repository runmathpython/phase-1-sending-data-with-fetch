function submitData(userName, userEmail) {

    const formData = {
        name: userName,
        email: userEmail,
      };
      
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      };    
    
    let r = fetch("http://localhost:3000/users", configurationObject)
      .then((response) => response.json())
      .then((data) => renderTheId(data))
      .catch(function (error) {
        alert("401!");
        const bd = document.querySelector('body');
        const h2 = document.createElement('h2');
        h2.innerHTML = "Unauthorized Access";
        bd.appendChild(h2);
      });
      return r
    }
    
    function renderTheId(user) {
      const b = document.querySelector('body');
      const h2 = document.createElement('h2');
      h2.innerHTML = "id: " + user.id;
      b.appendChild(h2);
    }
    
    document.addEventListener('DOMContentLoaded', function() {
      let userName = "Jane"
      let userEmail = "jane@jane.com"
      submitData(userName, userEmail);
    });