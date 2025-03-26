function validateForm() {
   const form = document.form["contactInfo"] 
   const fname = form["fname"]
   const email = form["email"]
   const subject = form["subject"]
   const message = form["message"] 

   let errors={};
   if (!fname.value.trim()) {
    errors["fname"] = "Name must be filled out!";
   }
   if (!email.value.trim()) {
    errors["email"] = "Email must be filled out!";
   }

 else if (!/\S+@\S+\.\S+/.test(email.value)) {
    errors["email"] = "Please enter a valid email address.";
}

if (!fname.value.trim()) {
    errors["fname"] = "Name must be filled out!";
}
return true;
}
  