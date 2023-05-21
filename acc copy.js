console.log('Server has started....');
function validateform() {
  var name = document.forms['idcreate']['name'].value;
  var email = document.forms['idcreate']['email'].value;
  var phno = document.forms['idcreate']['phno'].value;
  var pass = document.forms['idcreate']['pass'].value;
  var cpass = document.forms['idcreate']['cpass'].value;

  if (name == '') {
    alert('Name must be filled out');
    return false;
  }
  if (name == null) {
    alert('Name should not be empty');
    return false;
  }
  if (email == '') {
    alert('Email must be filled out');
    return false;
  }
  if (phno != '') {
    var regex = /^(?=.{10})/;
    if (regex.test(phno) == false) {
      alert('Please enter a valid Mobile Number');
      return false;
    }
  }
  if (pass == '') {
    alert('Password must be filled out');
    return false;
  }

  if (cpass == '') {
    alert('Confirm password must be filled out');
    return false;
  }

  if (pass != cpass) {
    alert('Passwords do not match');
    return false;
  }

  if (pass.length != '') {
    var regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (regex.test(pass) === false) {
      alert('Please enter a strong Password');
      return false;
    }
  }
  if (name.length < 6) {
    alert('Not enough characters');
    return false;
  }
  if (name.length > 6) {
    alert('Name should be 6 characters only');
    return false;
  }
  return true;
}
