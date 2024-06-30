function createContactObject() {
    // Collect form data
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    // Create a JavaScript object with the form data
    let contact = {
      name: name,
      email: email,
      phone: phone
    };

    // Optionally, you can log the created object to console
    console.log(contact);

    // Here you can perform further actions with the 'contact' object if needed
    // For example, you can send it to a server via fetch()

    // Alternatively, you can return the 'contact' object or use it as needed
    return contact;
  }