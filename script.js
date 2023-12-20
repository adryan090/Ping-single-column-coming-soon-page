const button = document.querySelector("form button");
const email = document.querySelector("input");
const errMsg = document.querySelector("main p");

button.addEventListener("click", () => {
  const isEmailValid = checkEmail(email);
  if (isEmailValid) {
    errMsg.classList.remove("error");
    email.classList.remove("error");
  } else {
    errMsg.classList.add("error");
    email.classList.add("error");
  }
});

function checkEmail(email) {
  const emailAddress = email.value;
  const atSignIndex = emailAddress.indexOf("@");
  const lastAtSignIndex = emailAddress.lastIndexOf("@");

  //   if 2 or more '@' exists
  if (atSignIndex !== lastAtSignIndex) return false;
  //   if no '@' exist
  if (atSignIndex === -1) return false;
  //   if '@' is first
  if (!atSignIndex) return false;
  //   if '@' is last
  if (atSignIndex + 1 >= emailAddress.length) return false;

  //  get string after '@'
  const domainText = emailAddress.slice(atSignIndex + 1);
  let dotIndex = domainText.indexOf(".");
  // if no '.' after '@'
  if (dotIndex === -1) return false;

  //  domain name < 2 or TLD length < 2
  dotIndex = emailAddress.indexOf(".");
  let lastDotIndex = emailAddress.lastIndexOf(".");
  if (lastDotIndex >= emailAddress.length - 2 || dotIndex <= atSignIndex + 2)
    return false;

  return true;
}
