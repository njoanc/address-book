// business logic
function Contact(first, last, email, phone, location) {
  this.firstName = first;
  this.lastName = last;
  this.email = email;
  this.phoneNumber = phone;
  this.location = location;
}
Contact.prototype.fullName = function() {
  return (
    this.firstName +
    " " +
    this.lastName +
    " " +
    this.email +
    " " +
    this.phoneNumber +
    " " +
    this.location
  );
};

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedEmail = $("input#email").val();
    var inputtedPhoneNumber = $("input#phoneNumber").val();
    var inputtedLocation = $("input#location").val();
    var newContact = new Contact(
      inputtedFirstName,
      inputtedLastName,
      inputtedEmail,
      inputtedPhoneNumber,
      inputtedLocation
    );
    console.log(inputtedLocation);

    $("ul#contacts").append(
      "<li><span class='contact'>" +
        newContact.firstName +
        " " +
        newContact.lastName +
        " " +
        newContact.email +
        " " +
        newContact.phoneNumber +
        " " +
        newContact.location +
        "</span></li>"
    );

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#email").val("");
    $("input#phoneNumber").val("");
    $("input#location").val("");
  });
  $(".contact")
    .last()
    .click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".email").text(newContact.email);
      $(".phoneNumber").text(newContact.phone);
      $(".location").text(newContact.location);
    });
  $("ul#contacts").append(
    "<li><span class='contact'>" +
      newContact.fullName() +
      " " +
      newContact.email +
      " " +
      newContact.phone +
      " " +
      newContact.location +
      "</span></li>"
  );
});
