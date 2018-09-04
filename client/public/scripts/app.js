$(document).ready(function() {
  const MAX_CHAR = 140;

  function renderTweets(tweets) {
    for (const tweet of tweets) {
      $("#tweet-container").append(createTweetElement(tweet));
    }
  }

  function escape(str) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function createTweetElement(tData) {
    const {
      user: { name, avatars, handle },
      content: { text },
      created_at: date
    } = tData;

    return `<article>
    <header>
      <img src=${avatars.small} alt="avatar">
        <div class="name">${escape(name)}</div>
        <div class="handle">${escape(handle)}</div>
        </header>
      <p class="tweet-content">
        ${escape(text)}
      </p>
      <footer>
        <div class="date">${moment(date).fromNow()}</div>
        <div class="icons">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
      </article>`;
  }

  function loadTweets() {
    const options = {
      url: "/tweets",
      method: "get",
      dataType: "json"
    };
    $.ajax(options)
      .done(tweets => {
        renderTweets(tweets);
      })
      .fail(error => {
        console.log("Error: ", error);
      });
  }

  function validateTweetFrm(content) {
    const errors = {
      empty: !content ? "Please fill in the form" : null,
      overLenght:
        content.length > MAX_CHAR
          ? "Your tweet is exceeding the maximum characters limit!"
          : null
    };

    for (const errorCase in errors) {
      if (errors[errorCase]) {
        return errors[errorCase];
      }
    }
    return null;
  }

  function postTweet(form) {
    const options = {
      url: form.action,
      method: form.method,
      data: $(form).serialize()
    };
    $.ajax(options)
      .done(tweet => {
        $("#tweet-container").prepend(createTweetElement(tweet));
      })
      .fail(error => {
        console.log("Error: ", error);
      });
  }

  $(".new-tweet form").on("submit", function(event) {
    event.preventDefault();
    const $ul = $("ul.errors");
    $ul.empty();
    $ul.slideUp("fast");

    const error = validateTweetFrm(this.elements.text.value);

    if (!error) {
      postTweet(this);
      $(this)
        .children("textarea")
        .val("");
      $(this)
        .children(".counter")
        .text(MAX_CHAR);
    } else {
      $("<li>")
        .text(error)
        .appendTo($ul);
      $ul.slideDown("fast");
    }
  });

  $("#tweet-container").on("mouseenter", "article", function(event) {
    $(this).css("opacity", "1");
    $(this)
      .find(".icons")
      .css("opacity", "1");
  });

  $("#tweet-container").on("mouseleave", "article", function(event) {
    $(this).css("opacity", "0.6");
    $(this)
      .find(".icons")
      .css("opacity", "0");
  });

  $(".compose-btn").on("click", function(event) {
    var $section = $("section.new-tweet");

    $section.slideToggle("fast");
    $section.find("textarea").focus();

    // if ($section.is(":visible")) {
    //   $section.slideUp("fast");
    // } else {
    //   $section.slideDown("fast");
    // }
  });

  $('.login-form').on('submit', function (event) {
    event.preventDefault();
    console.log("login form")
  })

  loadTweets();
});
