async function onSubmit() {
  const value = document.getElementById('name-input').value;
  const response = await fetch('/express-web-service/hello?name=' + value);
  const greeting = await response.text();
  document.getElementById('greeting').innerText=greeting
}