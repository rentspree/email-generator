let emailShortcut1 = document.getElementById("emailShortcut1")
let emailShortcut2 = document.getElementById("emailShortcut2")
let emailShortcut3 = document.getElementById("emailShortcut3")
let emailShortcut4 = document.getElementById("emailShortcut4")
let emailShortcut5 = document.getElementById("emailShortcut5")
let emailShortcut6 = document.getElementById("emailShortcut6")
let emailShortcut7 = document.getElementById("emailShortcut7")
let emailShortcut8 = document.getElementById("emailShortcut8")
let emailShortcut9 = document.getElementById("emailShortcut9")
let emailShortcut10 = document.getElementById("emailShortcut10")
let passwordShortcut1 = document.getElementById("passwordShortcut1")
let passwordShortcut2 = document.getElementById("passwordShortcut2")
let passwordShortcut3 = document.getElementById("passwordShortcut3")
let passwordShortcut4 = document.getElementById("passwordShortcut4")
let passwordShortcut5 = document.getElementById("passwordShortcut5")
let passwordShortcut6 = document.getElementById("passwordShortcut6")
let passwordShortcut7 = document.getElementById("passwordShortcut7")
let passwordShortcut8 = document.getElementById("passwordShortcut8")
let passwordShortcut9 = document.getElementById("passwordShortcut9")
let passwordShortcut10 = document.getElementById("passwordShortcut10")

document.getElementById("confirm1").addEventListener('click', () => {
  chrome.storage.sync.set({ "emailShortcut1": emailShortcut1.value }, function() {
    console.log('emailShortcut1 is set to ' + emailShortcut1.value);
  });
  chrome.storage.sync.set({ "passwordShortcut1": passwordShortcut1.value }, function() {
    console.log('passwordShortcut1 is set to ' + passwordShortcut1.value);
  });
});

document.getElementById("confirm2").addEventListener('click', () => {
  chrome.storage.sync.set({ "emailShortcut2": emailShortcut2.value }, function() {
    console.log('emailShortcut2 is set to ' + emailShortcut2.value);
  });
  chrome.storage.sync.set({ "passwordShortcut2": passwordShortcut2.value }, function() {
    console.log('passwordShortcut2 is set to ' + passwordShortcut2.value);
  });
});

document.getElementById("confirm3").addEventListener('click', () => {
  chrome.storage.sync.set({ "emailShortcut3": emailShortcut3.value }, function() {
    console.log('emailShortcut3 is set to ' + emailShortcut3.value);
  });
  chrome.storage.sync.set({ "passwordShortcut3": passwordShortcut3.value }, function() {
    console.log('passwordShortcut3 is set to ' + passwordShortcut3.value);
  });
});

// document.getElementById("confirm4").addEventListener('click', () => {
//   chrome.storage.sync.set({ "emailShortcut4": emailShortcut4.value }, function() {
//     console.log('emailShortcut4 is set to ' + emailShortcut4.value);
//   });
//   chrome.storage.sync.set({ "passwordShortcut4": passwordShortcut4.value }, function() {
//     console.log('passwordShortcut4 is set to ' + passwordShortcut4.value);
//   });
// });

// document.getElementById("confirm5").addEventListener('click', () => {
//   chrome.storage.sync.set({ "emailShortcut5": emailShortcut5.value }, function() {
//     console.log('emailShortcut5 is set to ' + emailShortcut5.value);
//   });
//   chrome.storage.sync.set({ "passwordShortcut5": passwordShortcut5.value }, function() {
//     console.log('passwordShortcut5 is set to ' + passwordShortcut5.value);
//   });
// });

// document.getElementById("confirm6").addEventListener('click', () => {
//   chrome.storage.sync.set({ "emailShortcut6": emailShortcut6.value }, function() {
//     console.log('emailShortcut6 is set to ' + emailShortcut6.value);
//   });
//   chrome.storage.sync.set({ "passwordShortcut6": passwordShortcut6.value }, function() {
//     console.log('passwordShortcut6 is set to ' + passwordShortcut6.value);
//   });
// });

// document.getElementById("confirm7").addEventListener('click', () => {
//   chrome.storage.sync.set({ "emailShortcut7": emailShortcut7.value }, function() {
//     console.log('emailShortcut7 is set to ' + emailShortcut7.value);
//   });
//   chrome.storage.sync.set({ "passwordShortcut7": passwordShortcut7.value }, function() {
//     console.log('passwordShortcut7 is set to ' + passwordShortcut7.value);
//   });
// });

// document.getElementById("confirm8").addEventListener('click', () => {
//   chrome.storage.sync.set({ "emailShortcut8": emailShortcut8.value }, function() {
//     console.log('emailShortcut8 is set to ' + emailShortcut8.value);
//   });
//   chrome.storage.sync.set({ "passwordShortcut8": passwordShortcut8.value }, function() {
//     console.log('passwordShortcut8 is set to ' + passwordShortcut8.value);
//   });
// });

// document.getElementById("confirm9").addEventListener('click', () => {
//   chrome.storage.sync.set({ "emailShortcut9": emailShortcut9.value }, function() {
//     console.log('emailShortcut9 is set to ' + emailShortcut9.value);
//   });
//   chrome.storage.sync.set({ "passwordShortcut9": passwordShortcut9.value }, function() {
//     console.log('passwordShortcut9 is set to ' + passwordShortcut9.value);
//   });
// });

// document.getElementById("confirm10").addEventListener('click', () => {
//   chrome.storage.sync.set({ "emailShortcut10": emailShortcut10.value }, function() {
//     console.log('emailShortcut10 is set to ' + emailShortcut10.value);
//   });
//   chrome.storage.sync.set({ "passwordShortcut10": passwordShortcut10.value }, function() {
//     console.log('passwordShortcut10 is set to ' + passwordShortcut10.value);
//   });
// });

// ======================= 1 ============================
chrome.storage.sync.get("emailShortcut1", function(result) {
  emailShortcut1.value = result.emailShortcut1 || ""
})
chrome.storage.sync.get("passwordShortcut1", function(result) {
  passwordShortcut1.value = result.passwordShortcut1 || ""
})
// ======================================================
// ======================= 2 ============================
chrome.storage.sync.get("emailShortcut2", function(result) {
  emailShortcut2.value = result.emailShortcut2 || ""
})
chrome.storage.sync.get("passwordShortcut2", function(result) {
  passwordShortcut2.value = result.passwordShortcut2 || ""
})
// ======================================================
// ======================= 3 ============================
chrome.storage.sync.get("emailShortcut3", function(result) {
  emailShortcut3.value = result.emailShortcut3 || ""
})
chrome.storage.sync.get("passwordShortcut3", function(result) {
  passwordShortcut3.value = result.passwordShortcut3 || ""
})
// ======================================================
// // ======================= 4 ============================
// chrome.storage.sync.get("emailShortcut4", function(result) {
//   emailShortcut4.value = result.emailShortcut4 || ""
// })
// chrome.storage.sync.get("passwordShortcut4", function(result) {
//   passwordShortcut4.value = result.passwordShortcut4 || ""
// })
// // ======================================================
// // ======================= 5 ============================
// chrome.storage.sync.get("emailShortcut5", function(result) {
//   emailShortcut5.value = result.emailShortcut5 || ""
// })
// chrome.storage.sync.get("passwordShortcut5", function(result) {
//   passwordShortcut5.value = result.passwordShortcut5 || ""
// })
// // ======================================================
// // ======================= 6 ============================
// chrome.storage.sync.get("emailShortcut6", function(result) {
//   emailShortcut6.value = result.emailShortcut6 || ""
// })
// chrome.storage.sync.get("passwordShortcut6", function(result) {
//   passwordShortcut6.value = result.passwordShortcut6 || ""
// })
// // ======================================================
// // ======================= 7 ============================
// chrome.storage.sync.get("emailShortcut7", function(result) {
//   emailShortcut7.value = result.emailShortcut7 || ""
// })
// chrome.storage.sync.get("passwordShortcut7", function(result) {
//   passwordShortcut7.value = result.passwordShortcut7 || ""
// })
// // ======================================================
// // ======================= 8 ============================
// chrome.storage.sync.get("emailShortcut8", function(result) {
//   emailShortcut8.value = result.emailShortcut8 || ""
// })
// chrome.storage.sync.get("passwordShortcut8", function(result) {
//   passwordShortcut8.value = result.passwordShortcut8 || ""
// })
// // ======================================================
// // ======================= 9 ============================
// chrome.storage.sync.get("emailShortcut9", function(result) {
//   emailShortcut9.value = result.emailShortcut9 || ""
// })
// chrome.storage.sync.get("passwordShortcut9", function(result) {
//   passwordShortcut9.value = result.passwordShortcut9 || ""
// })
// // ======================================================
// // ======================= 10 ============================
// chrome.storage.sync.get("emailShortcut10", function(result) {
//   emailShortcut10.value = result.emailShortcut10 || ""
// })
// chrome.storage.sync.get("passwordShortcut10", function(result) {
//   passwordShortcut10.value = result.passwordShortcut10 || ""
// })
// // ======================================================
