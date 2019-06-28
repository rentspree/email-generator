export function modifyDOM() {

  var emailElements = document.querySelectorAll('input[type=email]');
  var passwordElements = document.querySelectorAll('input[type=password]');

  function getRandomTimeout() {
    var baseTimeout = 10
    var randTimeout = Math.random() * 10 + baseTimeout;
    return randTimeout
  }

  function autoField() {
      console.log("The AutoClickSelector script is getting started")
      var nextTime = getRandomTimeout()
      // emailElements[0].value = "thanawatpinya+testExtension-1@rentspree.com"
      // passwordElements[0].value = "123412351"
      setTimeout(function() {
        emailElements[0].setAttribute("value", `${"thanawat"}+${new Date().getTime()}@${"rentspree.com"}`)
        emailElements[0].dispatchEvent(new Event("change", { bubbles: true }))
      }, nextTime + 100)
      setTimeout(function() {
        passwordElements[0].value = "123123123123"
        passwordElements[0].dispatchEvent(new Event("change", { bubbles: true }))
      }, nextTime + 100)

      // console.log(emailElements[0])
      // console.log(passwordElements[0])
  }

  autoField();
}