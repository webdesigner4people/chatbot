var outputArea = $("#chat-output");

$("#user-input-form").on("submit", function (e) {
  e.preventDefault();

  var message = $("#user-input").val();

  outputArea.append(`
    <div class='bot-message'>
      <div class='message'>
        ${message}
      </div>
    </div>
  `);

  setTimeout(function () {
    outputArea.append(`
      <div class='user-message'>
        <div class='message'>
         So how are you feeling today?
        </div>
      </div>
    `);
  }, 250);
  setTimeout(function () {
    outputArea.append(`
      <div class='user-message'>
        <div class='message'>
         Is there anything i can do to help you?
        </div>
      </div>
    `);
  }, 250);

  $("#user-input").val("");
});