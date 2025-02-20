document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("debugForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();
    const isValid = validateForm();
    if (isValid) {
      alert("Form submitted successfully!");
    }
  });

  function validateForm() {
    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if () {
      showError("nameError", "Name is required");
      isValid = false;
    }

    if () {
      showError("emailError", "Enter a valid email");
      isValid = false;
    }

    if () {
      showError("ageError", "Enter a valid age (18-120)");
      isValid = false;
    }

    if (!phone.match(/^\d{10}$/)) {
      showError("phoneError", "Enter a 10-digit phone number");
      isValid = false;
    }

    if () {
      showError("passwordError", "Password must be at least 6 characters");
      isValid = false;
    }

    if () {
      showError("confirmPasswordError", "Passwords do not match");
      isValid = false;
    }

    return isValid;
  }

  function showError(id, message) {
    document.getElementById(id).textContent = message;
  }

  function clearErrors() {
    document
      .querySelectorAll(".help.is-danger")
      .forEach((e) => (e.textContent = ""));
  }
});

// ================= Jasmine Tests =================
describe("Form Validation", function () {
  it("should validate name is required", function () {
    expect(validateName("")).toBe(false);
    expect(validateName("John")).toBe(true);
  });

  it("should validate email format", function () {
    expect(validateEmail("test@example.com")).toBe(true);
    expect(validateEmail("invalid-email")).toBe(false);
  });

  it("should validate age range", function () {
    expect(validateAge(25)).toBe(true);
    expect(validateAge(150)).toBe(false);
    expect(validateAge(17)).toBe(false);
  });

  it("should validate phone number format", function () {
    expect(validatePhone("1234567890")).toBe(true);
    expect(validatePhone("12345")).toBe(false);
  });

  it("should validate password length", function () {
    expect(validatePassword("abcdef")).toBe(true);
    expect(validatePassword("abc")).toBe(false);
  });

  it("should validate password confirmation", function () {
    expect(validateConfirmPassword("abcdef", "abcdef")).toBe(true);
    expect(validateConfirmPassword("abcdef", "abc123")).toBe(false);
  });
});

// Helper functions for tests - what are these dpoing?
function validateName(name) {
  return name.trim() !== "";
}

function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}

function validateAge(age) {
  return !isNaN(age) && age >= 18 && age <= 120;
}

function validatePhone(phone) {
  return phone.match(/^\d{10}$/) !== null;
}

function validatePassword(password) {
  return password.length >= 6;
}

function validateConfirmPassword(password, confirmPassword) {
  return password === confirmPassword;
}
