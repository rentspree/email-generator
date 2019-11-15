
let prefixEmail = document.getElementById("emailPrefix")
let subfixEmail = document.getElementById("emailSubfix")
let password = document.getElementById("password")

// ================= frist open popup setting ================================
console.log("Open popop");

chrome.storage.sync.get("prefix", function(result) {
  prefixEmail.value = result.prefix || ""
})
chrome.storage.sync.get("subfix", function(result) {
  subfixEmail.value = result.subfix || ""
})
chrome.storage.sync.get("password", function(result) {
  password.value = result.password || ""
})
// ===========================================================================
// ======================= On value some input Change ========================
prefixEmail.onchange = (e) => {
  const value = e.target.value
  chrome.storage.sync.set({ "prefix": value }, function() {
    console.log('prefix is set to ' + value);
  });
}
subfixEmail.onchange = (e) => {
  const value = e.target.value
  chrome.storage.sync.set({ "subfix": value }, function() {
    console.log('subfix is set to ' + value);
  });
}
password.onchange = (e) => {
  const value = e.target.value
  chrome.storage.sync.set({ "password": value }, function() {
    console.log('password is set to ' + value);
  });
}
// ===========================================================================
// ======================= on Click and Generate Email =======================
document.getElementById("Gen").addEventListener('click', () => {
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
    const getTime = new Date().getTime()
    function autoFill() {
        var nextTime = getRandomTimeout()
        const url = window.location.toString()
        if (url.search("signup") >= 0) {
          setTimeout(function() {
            emailElements[0].value = `${prefixData}${getTime}@${subfixData}`
            emailElements[0].dispatchEvent(new Event("change", { bubbles: true }))
          }, nextTime + 100)
          setTimeout(function() {
            passwordElements[0].value = passwordData
            passwordElements[0].dispatchEvent(new Event("change", { bubbles: true }))
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
  
    autoFill();
  }
  //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
  chrome.tabs.executeScript({
    code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
  });

});

document.getElementById("go-to-options").addEventListener('click', () => {
  console.log("Onclick ===> go to page");
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL('options.html'));
  }
})


// =============================================================================================
// ================================ Re-Check storage change ====================================
chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (var key in changes) {
    var storageChange = changes[key];
    console.log('Storage key "%s" in namespace "%s" changed. ' +
                'Old value was "%s", new value is "%s".',
                key,
                namespace,
                storageChange.oldValue,
                storageChange.newValue);
  }
})
// =============================================================================================