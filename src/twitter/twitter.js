<code class="js">// Sending messages from Content Script
const msg = 'Hello from content Script ⚡'
chrome.runtime.sendMessage({ message: msg }, function(response) {
    console.log(response);
});