// General Rules
const General_rules = document.getElementById("General-rules");
const General_rules_btn = document.getElementById("General_rules-btn");
console.log(General_rules_btn);
const General_rules_close_btn = document.getElementById(
  "General_rules_close_btn"
);

General_rules_btn.addEventListener("click", () => {
  General_rules.classList.remove("hidden");
  console.log("clicked");
});

General_rules_close_btn.addEventListener("click", () => {
  General_rules.classList.add("hidden");
});

// Chat Rules
const Chat_rules = document.getElementById("Chat-rules");
const Chat_rules_btn = document.getElementById("Chat_rules_btn");
console.log(General_rules_btn);
const Chat_rules_close_btn = document.getElementById("Chat_rules_close_btn");

Chat_rules_btn.addEventListener("click", () => {
  Chat_rules.classList.remove("hidden");
  console.log("clicked");
});

Chat_rules_close_btn.addEventListener("click", () => {
  Chat_rules.classList.add("hidden");
});
