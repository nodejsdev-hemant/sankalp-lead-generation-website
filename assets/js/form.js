function postToGoogle1() {
  var field1 = $("#fname1").val();
  var field2 = $("#fmob1").val();
  var field3 = $("#femail1").val();
  if (field1 == "") {
    alert("Please Fill Your Name");
    document.getElementById("nameField").focus();
    return false;
  }
  if (field3 == "") {
    alert("Please Fill Your Email");
    document.getElementById("emailField").focus();
    return false;
  }
  if (field2 == "" || field2.length > 10 || field2.length < 10) {
    alert("Please Fill Your Mobile Number");
    document.getElementById("mobField").focus();
    return false;
  }

  $("#form1").each(function () {
    this.reset();
  });

  $.ajax({
    url: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScveconyLnRnDBX7ihyFpCn3vbJ_fkJ0v0lGxceKRs06podVA/formResponse",
    data: {
      "entry.1145357987": field1,
      "entry.584329651": field2,
      "entry.1847546054": field3,
    },
    type: "POST",
    dataType: "xml",
    success: function (d) {},
    error: function (x, y, z) {
      alert("Thank you!");
    },
  });
  return false;
}
// form 2

function postToGoogle2() {
  var field1 = $("#fname2").val();
  var field2 = $("#fmob2").val();
  var field3 = $("#femail2").val();
  if (field1 == "") {
    alert("Please Fill Your Name");
    document.getElementById("nameField").focus();
    return false;
  }
  if (field3 == "") {
    alert("Please Fill Your Email");
    document.getElementById("emailField").focus();
    return false;
  }
  if (field2 == "" || field2.length > 10 || field2.length < 10) {
    alert("Please Fill Your Mobile Number");
    document.getElementById("mobField").focus();
    return false;
  }

  $("#form2").each(function () {
    this.reset();
  });

  $.ajax({
    url: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScveconyLnRnDBX7ihyFpCn3vbJ_fkJ0v0lGxceKRs06podVA/formResponse",
    data: {
      "entry.1145357987": field1,
      "entry.584329651": field2,
      "entry.1847546054": field3,
    },
    type: "POST",
    dataType: "xml",
    success: function (d) {},
    error: function (x, y, z) {
      alert("Thank you!");
    },
  });
  return false;
}

// form 3
function postToGoogle3() {
  var field1 = $("#fname3").val();
  var field2 = $("#fmob3").val();
  var field3 = $("#femail3").val();
  if (field1 == "") {
    alert("Please Fill Your Name");
    document.getElementById("nameField").focus();
    return false;
  }
  if (field3 == "") {
    alert("Please Fill Your Email");
    document.getElementById("emailField").focus();
    return false;
  }
  if (field2 == "" || field2.length > 10 || field2.length < 10) {
    alert("Please Fill Your Mobile Number");
    document.getElementById("mobField").focus();
    return false;
  }

  $("#form3").each(function () {
    this.reset();
  });

  $.ajax({
    url: "https://docs.google.com/forms/u/1/d/e/1FAIpQLScveconyLnRnDBX7ihyFpCn3vbJ_fkJ0v0lGxceKRs06podVA/formResponse",
    data: {
      "entry.1145357987": field1,
      "entry.584329651": field2,
      "entry.1847546054": field3,
    },
    type: "POST",
    dataType: "xml",
    success: function (d) {},
    error: function (x, y, z) {
      alert("Thank you!");
    },
  });
  return false;
}
