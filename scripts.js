function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential);

  fullName.textContent = data.name;
  sub.textContent = data.sub;
  given_name.textContent = data.given_name;
  family_name.textContent = data.family_name;
  email.textContent = data.email;
  verifiedEmail.textContent = data.email_verified;
  picture.setAttribute("src", data.picture);
}

window.onload = () => {
  google.accounts.id.initialize({
    client_id: "791228978801-uat3bbol49143ofjc0lv2quvspgnjrpn.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"), { 
      theme: "filled_black", 
      size: "large",
      type: "standard",
      shape: "pill",
      text: "$ {button.text}",
      logo_alignment: "left",
      width: "300"
    }  // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
}