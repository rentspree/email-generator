
let prefixEmail = document.getElementById("emailPrefix")
let subfixEmail = document.getElementById("emailSubfix")
let password = document.getElementById("password")

// document.getElementById("emailPrefix").addEventListener("", (element) => {
//   console.log("test ==> ", proficEmail.target.value);
// })

// ================= frist open popup setting ================================
console.log("Open popop");

chrome.storage.sync.get("prefix", function(result) {
  console.log('Value currently is ' + result.prefix);
  prefixEmail.value = result.prefix || ""
})
chrome.storage.sync.get("subfix", function(result) {
  console.log('Value currently is ' + result.subfix);
  subfixEmail.value = result.subfix || ""
})
chrome.storage.sync.get("password", function(result) {
  console.log('Value currently is ' + result.password);
  password.value = result.password || ""
})
// ===========================================================================
// ======================= On value somw input Change ========================
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
      console.log('Value currently is ' + result.prefix);
      prefixData = result.prefix
    })
    chrome.storage.sync.get("subfix", function(result) {
      console.log('Value currently is ' + result.subfix);
      subfixData = result.subfix
    })
    chrome.storage.sync.get("password", function(result) {
      console.log('Value currently is ' + result.password);
      passwordData = result.password
    })
  
    function autoFill() {
        console.log("The AutoClickSelector script is getting started")
        var nextTime = getRandomTimeout()
        // emailElements[0].value = "thanawatpinya+testExtension-1@rentspree.com"
        // passwordElements[0].value = "123412351"
        setTimeout(function() {
          emailElements[0].setAttribute("value", `${prefixData}+${new Date().getTime()}@${subfixData}`)
          emailElements[0].dispatchEvent(new Event("change", { bubbles: true }))
        }, nextTime + 100)
        setTimeout(function() {
          passwordElements[0].value = passwordData
          passwordElements[0].dispatchEvent(new Event("change", { bubbles: true }))
        }, nextTime + 100)
  
        // console.log(emailElements[0])
        // console.log(passwordElements[0])
    }
  
    autoFill();
  }
  
});

//We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
chrome.tabs.executeScript({
  code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
});

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