console.log("onload Background");

chrome.commands.onCommand.addListener(function(command) {
  if (command === "change_input") {
    function modifyDOM() {

      var emailElements = document.querySelectorAll('input[type=email]');
      var passwordElements = document.querySelectorAll('input[type=password]');
      let prefixData
      let subfixData
      let passwordData
      function getRandomTimeout() {
        var baseTimeout = 10
        var randTimeout = Math.random() * 10 + baseTimeout;
        return randTimeout
      }
      
      chrome.storage.sync.get("prefix", function(result) {
        prefixData = result.prefix || "support+"
      })
      chrome.storage.sync.get("subfix", function(result) {
        subfixData = result.subfix || "rentspree.com"
      })
      chrome.storage.sync.get("password", function(result) {
        passwordData = result.password || "myPassword1"
      })
      const event = new Event("change", { bubbles: true, cancelable: true })
      const getTime = new Date().getTime()
      function autoField() {
          var nextTime = getRandomTimeout()
          const url = window.location.toString()
          if (url.search("signup") >= 0) {
            setTimeout(function() {
              // emailElements[0].setAttribute("value", `${prefixData}+${new Date().getTime()}@${subfixData}`)
              emailElements[0].value = `${prefixData}${getTime}@${subfixData}`
              emailElements[0].dispatchEvent(event)
            }, nextTime + 100)
            setTimeout(function() {
              passwordElements[0].value = passwordData
              passwordElements[0].dispatchEvent(event)
            }, nextTime + 100)
            chrome.storage.sync.set({ "previousTime": getTime }, function() {
              console.log('previousTime is set to ' + getTime);
            });
          } else if (url.search("login") >= 0) {
            let previousTime
            chrome.storage.sync.get("previousTime", function(result) {
              previousTime = result.previousTime || getTime
            })
            setTimeout(function() {
              emailElements[0].value = `${prefixData}${previousTime}@${subfixData}`
              emailElements[0].dispatchEvent(new Event("change", { bubbles: true }))
            }, nextTime + 100)
            setTimeout(function() {
              passwordElements[0].value = passwordData
              passwordElements[0].dispatchEvent(new Event("change", { bubbles: true }))
            }, nextTime + 100)
          }
      }
    
      autoField();
    }
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();'
    });
  } else if (command === "email_1") {
    function modifyDOMEmailShortcut() {
      function autoFieldWithFixEmail() {
        var emailTmp = ""
        var passwordTmp = ""
        var emailElements = document.querySelectorAll('input[type=email]');
        var passwordElements = document.querySelectorAll('input[type=password]');
        chrome.storage.sync.get("emailShortcut1", function(result) {
          emailTmp = result.emailShortcut1 || ""
        })
        chrome.storage.sync.get("passwordShortcut1", function(result) {
          passwordTmp = result.passwordShortcut1 || ""
        })
        function getRandomTimeout() {
          var baseTimeout = 10
          var randTimeout = Math.random() * 10 + baseTimeout;
          return randTimeout
        }  
        var nextTime = getRandomTimeout()
        setTimeout(function() {
          emailElements[0].value = emailTmp || ""
          emailElements[0].dispatchEvent(new Event("change", { bubbles: true }))
        }, nextTime + 100)
        setTimeout(function() {
          passwordElements[0].value = passwordTmp || ""
          passwordElements[0].dispatchEvent(new Event("change", { bubbles: true }))
        }, nextTime + 100)
      }
      autoFieldWithFixEmail()
    }
    chrome.tabs.executeScript({
      code: '(' + modifyDOMEmailShortcut + ')();'
    });
  } else if (command === "email_2") {
    function modifyDOMEmailShortcut() {
      function autoFieldWithFixEmail() {
        var emailTmp = ""
        var passwordTmp = ""
        var emailElements = document.querySelectorAll('input[type=email]');
        var passwordElements = document.querySelectorAll('input[type=password]');
        chrome.storage.sync.get("emailShortcut2", function(result) {
          emailTmp = result.emailShortcut2 || ""
        })
        chrome.storage.sync.get("passwordShortcut2", function(result) {
          passwordTmp = result.passwordShortcut2 || ""
        })
        function getRandomTimeout() {
          var baseTimeout = 10
          var randTimeout = Math.random() * 10 + baseTimeout;
          return randTimeout
        }  
        var nextTime = getRandomTimeout()
        setTimeout(function() {
          emailElements[0].value = emailTmp || ""
          emailElements[0].dispatchEvent(new Event("change", { bubbles: true }))
        }, nextTime + 100)
        setTimeout(function() {
          passwordElements[0].value = passwordTmp || ""
          passwordElements[0].dispatchEvent(new Event("change", { bubbles: true }))
        }, nextTime + 100)
      }
      autoFieldWithFixEmail()
    }
    chrome.tabs.executeScript({
      code: '(' + modifyDOMEmailShortcut + ')();'
    });
  } else if (command === "email_3") {
    function modifyDOMEmailShortcut() {
      function autoFieldWithFixEmail() {
        var emailTmp = ""
        var passwordTmp = ""
        var emailElements = document.querySelectorAll('input[type=email]');
        var passwordElements = document.querySelectorAll('input[type=password]');
        chrome.storage.sync.get("emailShortcut3", function(result) {
          emailTmp = result.emailShortcut3 || ""
        })
        chrome.storage.sync.get("passwordShortcut3", function(result) {
          passwordTmp = result.passwordShortcut3 || ""
        })
        function getRandomTimeout() {
          var baseTimeout = 10
          var randTimeout = Math.random() * 10 + baseTimeout;
          return randTimeout
        }  
        var nextTime = getRandomTimeout()
        setTimeout(function() {
          emailElements[0].value = emailTmp || ""
          emailElements[0].dispatchEvent(new Event("change", { bubbles: true }))
        }, nextTime + 100)
        setTimeout(function() {
          passwordElements[0].value = passwordTmp || ""
          passwordElements[0].dispatchEvent(new Event("change", { bubbles: true }))
        }, nextTime + 100)
      }
      autoFieldWithFixEmail()
    }
    chrome.tabs.executeScript({
      code: '(' + modifyDOMEmailShortcut + ')();'
    });
  }
  
});