//Since I want the whole site to operate like a TV, I attemped to make the
//core all of the  functionality be based on this TV object.

var television = {
  TriviaGame: {
    userScore: 0,
    correctAnswers: 0,
    total_seconds: 25,
    current_index: 0,
    timerToggled: true,
    questionBank: [
      //This is the object array that holds all of the questions
      //and answers. My goal was to create a structure that
      //complimented the function of the game, similar to how
      //the stopwatch example was constructed.
      //I'm going to have the form set the player's answer(via "radio" button) to
      //one of four strings. The 3 strings are wrong and one is identical to the correct answer
      //if the player's string and the correct  answer are identical. the correctlyAnswered variable is set to true and the
      //player is then awarded points.
      {
        question:
          "Who were the original members of Grandmaster Flash and the Furious Five?",

        A:
          "Grandmaster Flash, Marly Marl, Roger The Kidd, Keef Chief, Mr. Ness/Scorpio, and Slick Rick",
        B:
          "Grandmaster Flash, Master Wayne, Alfred, Dick Grayson, Barbie Gordon, Victor Freize",
        C:
          "Grandmaster Flash, Melle Mel, The Kidd Creole, Mr. Ness/Scorpio, and Rahiem",
        D:
          "Grandmaster Flash, Melle Mel, The Kidd Creole, Keef Cowboy, Mr. Ness/Scorpio, and Rahiem",
        CorrectAnswer:
          "Grandmaster Flash, Melle Mel, The Kidd Creole, Keef Cowboy, Mr. Ness/Scorpio, and Rahiem",
        videoUrl: "assets/video/GrandmasterFlash.mp4"
      },

      {
        question:
          "Who is the 'Lifestylez ov da Poor and Dangerous' rapper who famously freestyled with  Jay-Z on 'Stretch and Bobbito' in 1995?",

        A: "Big Sherm",
        B: "Lil Pistol Starter",
        C: "Big L",
        D: "Stack Bundles",
        CorrectAnswer: "Big L",
        videoUrl: "assets/video/BigL.mp4"
      },
      {
        question:
          'Which New York rap collective ain\'t "nothing to F#($*% with ?"',

        A: "Onyx",
        B: "Wu-Tang Clan",
        C: "Purple City Bird Gang",
        D: "Eric B. and Rakim.",
        CorrectAnswer: "Wu-Tang Clan",
        videoUrl: "assets/video/WuVideo.mp4"
      },
      {
        question:
          "What popular rap artist has a god-mother on the FBI Most Wanted List?",

        A: "Tupac Shakur",
        B: "Lil' Wayne",
        C: "Young Jeezy",
        D: "Jay-z",
        CorrectAnswer: "Tupac Shakur",
        videoUrl: "assets/video/2pac.mp4"
      },
      {
        question:
          "Who is the  self-dubbed  'Susan Lucci of rap' who has been nominated over thirteen times, but has never won a grammy?",

        A: "Dr. Dre",
        B: "Nas",
        C: "Busta Rhymes",
        D: "DMX",
        CorrectAnswer: "Nas",
        videoUrl: "assets/video/NasIsLike.mp4"
      },
      {
        question:
          "How much money did LL Cool J bank in 20 minutes according to his 1985 hit 'Rock The Bells' ?",

        A: "$20,000",
        B: "$6,000",
        C: "$10,000",
        D: "$50,000",
        CorrectAnswer: "$6,000",
        videoUrl: "assets/video/rockthebells.mp4"
      },
      {
        question:
          "This Hip Hop legend got their big break alongside DJ Gemini and Flavor Unit with their hit 'Princess of the Posse':  ",
        A: "Mc Lyte",
        B: "Roxanne",
        C: "Queen Latifah",
        D: "Da Brat",
        CorrectAnswer: "Queen Latifah",
        videoUrl: "assets/video/queenlatifah.mp4"
      },
      {
        question:
          "Name this 'World Class Wrecking Crew' alumn who helped launch the careers of mulitple biopic subjects and music icons:",

        A: "Uncle Luke",
        B: "Master P",
        C: "Dr. Dre",
        D: "J Prince",
        CorrectAnswer: "Dr. Dre",
        videoUrl: "assets/video/DrDre.mp4"
      },

      {
        question:
          "Which rapper/singer shares a birthday with Bill Clinton, Coco Chanel, and the developer of this web app?",

        A: "The Game",
        B: "Nate Dogg",
        C: "Prodigy",
        D: "Hopsin",
        CorrectAnswer: "Nate Dogg",
        videoUrl: "assets/video/NateDogg.mp4"
      },
      {
        question:
          "Which rapper confessed that a T-Bone Steak Cheese Eggs and Welch's grape was his favorite breafast? ",

        A: "Busta Rhymes",
        B: "Big Pun",
        C: "Fat Joe",
        D: "Notorious BIG",
        CorrectAnswer: "Notorious BIG",
        videoUrl: "assets/video/biggie.mp4"
      }
    ],
    /// the first of these should match 1 for 1 with the questions in the bank
    //the last few will have to be changed in the ending logic to not break things

    videoBank: [
      {
        videoUrl: "assets/video/GrandmasterFlash.mp4"
      },
      {
        videoUrl: "assets/video/BigL.mp4"
      },
      {
        videoUrl: "assets/video/WuVideo.mp4"
      },
      {
        videoUrl: "assets/video/2pac.mp4"
      },
      {
        videoUrl: "assets/video/NasIsLike.mp4"
      },
      {
        videoUrl: "assets/video/rockthebells.mp4"
      },
      {
        videoUrl: "assets/video/queenlatifah.mp4"
      },
      {
        videoUrl: "assets/video/DrDre.mp4"
      },
      {
        videoUrl: "assets/video/NateDogg.mp4"
      },
      {
        videoUrl: "assets/video/biggie.mp4"
      },
      {
        videoUrl: "assets/video/FunnyWinVideo.mp4"
      },
      {
        videoUrl: "assets/video/Loser.mp4"
      },
      {
        videoUrl: "assets/video/hiphopmegamix.mp4"
      }
    ],

    //this contains the game mechanics.
    gameMechanics: {
      endGame: function(message, videoffset) {
        $("#game-space").empty();

        $("#game-space").fadeOut(1000);
        setTimeout(function() {}, 3000);
        television.TriviaGame.gameMechanics.changeChannel(
          television.TriviaGame.questionBank.length - 1 + videoffset
        );
        setTimeout(function() {
          $("#game-space").fadeIn(3000);
          $("<h1></h1>", {
            text: message,
            id: "solid-text"
          }).appendTo("#game-space");

          $("<p></p>", {
            text: "press here to mute/unmute",
            id: "instructions"
          }).appendTo("#solid-text");
          muteVid();
          $("<img></img>", {
            id: "restart-button",
            src: "assets/img/turntable.gif",
            height: 90,
            width: 160
          })
            .click(function() {
              television.TriviaGame.userScore = 0;
              $("#game-space").fadeOut(1000);
              setTimeout(function() {
                $("#game-space").empty();
                television.TriviaGame.gameMechanics.changeChannel(
                  television.TriviaGame.videoBank.length - 1
                );
                $("#game-space").fadeIn(3000);

                $("#game-space").prepend("<div></div>", {
                  id: "solid-text"
                });

                $("#game-space").append("<h1></h1>", {
                  text: "Welcome to Hip Hop Trivia"
                });
                $("#game-space").append("<p></p>", {
                  text:
                    "This is a timed game where you will be tested on your knowledge and expertise in hip hop history!"
                });
                $("#game-space").append("<p></p>", {
                  text:
                    "If you answer over 50% of the questions correctly, you will be rewarded with a funny video!"
                });
                $("#game-space").append("<p></p>", {
                  text: "stop moving mouse to fade out text"
                });
                $("#game-space").append("<p></p>", {
                  text: "move mouse to fade them back in"
                });
                $("#game-space").append(startButton);
              }, 3000);
            })
            .appendTo("#solid-text");
          $("<p></p>", {
            text: "press turntable to restart",
            id: "ttinst"
          }).appendTo("#solid-text");
        }, 2000);
      },
      timers: function() {
        if (television.timerToggled == true) {
          console.log(television.TriviaGame.total_seconds);
          $("#timer-display").text(television.TriviaGame.total_seconds);

          if (television.TriviaGame.total_seconds <= 0) {
            television.TriviaGame.gameMechanics.checkAnswer(current_index);
          } else {
            television.TriviaGame.total_seconds =
              television.TriviaGame.total_seconds - 1;
            setTimeout(television.TriviaGame.gameMechanics.timers, 1000);
          }
        }
      },
      x: 0,
      drawQuestion: function(indexNumber) {
        current_index = indexNumber;

        transitional = true;
        var CurrentQuestion =
          television.TriviaGame.questionBank[indexNumber].question;
        var answerA = television.TriviaGame.questionBank[indexNumber].A;
        var answerB = television.TriviaGame.questionBank[indexNumber].B;
        var answerC = television.TriviaGame.questionBank[indexNumber].C;
        var answerD = television.TriviaGame.questionBank[indexNumber].D;
        television.TriviaGame.total_seconds = 25;

        var form = $("<form></form>", {
          id: "question-card"
        });
        var question = $("<h2></h2>", {
          id: "question-asked"
        }).text(CurrentQuestion);

        var hr1 = $("<hr/>", {
          id: "hr-1"
        });
        var hr2 = $("<hr/>", {
          id: "hr-2"
        });
        var hr3 = $("<hr/>", {
          id: "hr-3"
        });
        var hr4 = $("<hr/>", {
          id: "hr-4"
        });
        var hr5 = $("<hr/>", {
          id: "hr-5"
        });

        /////////////////CHOICE A/////////////////////////////////
        var choiceA = $("<input />", {
          type: "radio",
          id: "choiceA",
          value: answerA,
          name: "radioAnswer"
        });
        var choiceALabel = $("<label />", {
          for: "choiceA"
        }).text(answerA);
        /////////////////CHOICE B/////////////////////////////////
        var choiceB = $("<input />", {
          type: "radio",
          id: "choiceB",
          value: answerB,
          name: "radioAnswer"
        });
        var choiceBLabel = $("<label />", {
          for: "choiceB"
        }).text(answerB);
        /////////////////CHOICE C/////////////////////////////////
        var choiceC = $("<input />", {
          type: "radio",
          id: "choiceC",
          value: answerC,
          name: "radioAnswer"
        });

        var choiceCLabel = $("<label></label>", {
          for: "choiceC"
        }).text(answerC);
        /////////////////CHOICE D/////////////////////////////////
        var choiceD = $("<input />", {
          type: "radio",

          id: "choiceD",
          value: answerD,
          name: "radioAnswer"
        });
        var choiceDLabel = $("<label></label>", {
          for: "choiceD"
        }).text(answerD);

        var submitButton = $("<img></img>", {
          class: "submit",
          src: "assets/img/submit.jpg",
          height: "60px",
          width: "100px"
        }).click(function() {
          if (transitional == false) {
            console.log(
              "transitional is: " + transitional + " at submitbutton click"
            );
            transitional = true;
            console.log("transitional should be true and is: " + transitional);
            $("game-space").empty();
            television.TriviaGame.gameMechanics.checkAnswer(indexNumber);
          } else {
            return null;
          }
        });

        var timerDisplay = $("<h1></h1>", {
          text: " time left: 25",
          id: "timer-display"
        });
        var mouseoverDisabler = $("<div></div>", {
          id: mouseoverDisabler
        });

        television.TriviaGame.gameMechanics.addStatic();
        // $(mouseoverDisabler).prepend("#game-space");
        $("#game-space").fadeIn(3000);
        $("#game-space").append(form);
        $(form).append(question);
        $(hr1).insertAfter(question);
        $(choiceA).insertAfter(hr1);
        $(choiceALabel).insertAfter(choiceA);
        $(hr2).insertAfter(choiceALabel);
        $(choiceB).insertAfter(hr2);
        $(choiceBLabel).insertAfter(choiceB);
        $(hr3).insertAfter(choiceBLabel);
        $(choiceC).insertAfter(hr3);
        $(choiceCLabel).insertAfter(choiceC);
        $(hr4).insertAfter(choiceCLabel);
        $(choiceD).insertAfter(hr4);
        $(choiceDLabel).insertAfter(choiceD);
        $(hr5).insertAfter(choiceDLabel);
        $(submitButton).insertAfter(hr5);
        $(timerDisplay).insertAfter(submitButton);
        transitional = false;
        television.timerToggled = true;
        television.TriviaGame.gameMechanics.timers(indexNumber);
      },

      fadeGameSpace: function() {
        $("#video-element").hide();
        $("#video-element").fadeIn(5000, "linear");
        $("#game-space").hide();
        $("#game-space").fadeIn(5000, "linear");
        $("#video-element").fadeOut(8000, "linear");
      },

      changeChannel: function(indexNumber) {
        var videoSource = $("#video-source");
        var videoElement = $("#video-element");
        videoElement.trigger("pause");
        videoSource.removeAttr("src"); // empty source
        videoSource.trigger("load");
        videoElement.trigger("load");
        videoSource.attr(
          "src",
          television.TriviaGame.videoBank[indexNumber].videoUrl
        );
        videoElement.trigger("play");
        if (document.getElementById("video-element").muted == true) {
          document.getElementById("video-element").muted = false;
        }
      },

      addStatic: function() {
        var staticAudio = $("<audio />", {
          id: "static-audio",
          src: "assets/audio/FM Radio Tune 05 Sound Effect.mp3"
        });
        var videoSource = $("#video-source");
        var videoElement = $("#video-element");
        $(document).ready(function() {
          $(staticAudio)
            .get(0)
            .play();
        });
        videoElement.trigger("pause");
        videoSource.removeAttr("src"); // empty source
        videoSource.trigger("load");
        videoElement.trigger("load");
        videoSource.attr(
          "src",
          "assets/video/TV+Static+VHS+Recorder+Overlay+-+3D+Color.mp4"
        );
        videoElement.trigger("play");
      },

      checkAnswer: function(indexNumber) {
        television.timerToggled = false;

        var nextButton = $("<img></img>", {
          id: "next",
          class: "submit",
          src: "assets/img/next.jpg",
          height: "60px",
          width: "100px"
        }).click(function() {
          if (transitional == false) {
            transitional = true;
            if (
              indexNumber + 1 <=
              television.TriviaGame.questionBank.length - 1
            ) {
              $("#game-space").fadeOut(3000);
              setTimeout(function() {
                $("#game-space").empty();
                if (transitional == true) {
                  television.TriviaGame.gameMechanics.drawQuestion(
                    indexNumber + 1
                  );
                }
              }, 3000);
            }
            ///ending logic
            else if (
              indexNumber + 1 >
              television.TriviaGame.questionBank.length - 1
            ) {
              console.log("user score is: " + television.TriviaGame.userScore);
              if (
                television.TriviaGame.userScore >=
                television.TriviaGame.questionBank.length * 0.65
              ) {
                console.log("win condition met");
                television.TriviaGame.gameMechanics.endGame(
                  "You did it fam! Your score was: " +
                    television.TriviaGame.userScore +
                    " or " +
                    Math.floor(
                      (television.TriviaGame.userScore /
                        television.TriviaGame.questionBank.length) *
                        100
                    ) +
                    "% Correct",
                  2
                );
              } else if (
                television.TriviaGame.userScore <
                Math.floor(television.TriviaGame.questionBank.length * 0.65)
              ) {
                console.log("loss codition met");
                television.TriviaGame.gameMechanics.endGame(
                  "Well, there's alway web development...Your score was: " +
                    television.TriviaGame.userScore +
                    " or " +
                    Math.floor(
                      (television.TriviaGame.userScore /
                        television.TriviaGame.questionBank.length) *
                        100
                    ) +
                    "% Correct",
                  3
                );
              }
            }
          }
        });
        var staticAudio = $("<audio />", {
          id: "static-audio",
          src: "assets/audio/FM Radio Tune 05 Sound Effect.mp3"
        });
        console.log("the index number is:" + indexNumber);
        console.log($("[name=radioAnswer]:checked").val());
        var userAnswer = $("input[name='radioAnswer']:checked").val();
        console.log(userAnswer);
        if (
          userAnswer ==
          television.TriviaGame.questionBank[indexNumber].CorrectAnswer
        ) {
          transitional = true;
          console.log("true");
          var onPoint = $("<h1></h1>", {
            id: "correct-notice",
            text: "You're on Point!"
          });
          var answerReveal = $("<h3></h3>", {
            id: answerReveal
          }).text(
            "The correct answer was: " +
              television.TriviaGame.questionBank[indexNumber].CorrectAnswer
          );
          var answerCard = $("<h1></h1>", {
            id: "question-asked",
            text: television.TriviaGame.questionBank[indexNumber].question
          });

          // $("#game-space").prepend(onPoint);
          // $("#game-space").append(answerCard);
          // $("#game-space").append(answerReveal);
          // $("#game-space");
          // .show()
          // .fadeIn(500);

          $(staticAudio)
            .get(0)
            .play();

          $("#game-space").fadeOut(3000);
          setTimeout(function() {
            var solidtext = $("<div></div>", {
              id: "solid-text"
            });
            $("#game-space").empty();

            $("#game-space").fadeIn();
            $("#game-space").prepend(solidtext);
            $("#solid-text").prepend(onPoint);
            $("#solid-text").append(answerCard);
            $("#solid-text").append(answerReveal);
            $("#solid-text").addClass("transparent-bg");
            $("<p></p>", {
              text: "press here to mute/unmute",
              id: "instructions"
            }).appendTo("#solid-text");
            setTimeout(function() {
              transitional = false;

              $("#solid-text")
                .append(nextButton)
                .fadeIn(2000);
            }, 5000);
            fadeMouse();
            muteVid();
            television.TriviaGame.gameMechanics.changeChannel(indexNumber);
          }, 7000);
          television.TriviaGame.userScore++;

          console.log(
            "This is the user's current score:" +
              television.TriviaGame.userScore
          );
        } else {
          $(staticAudio)
            .get(0)
            .play();

          console.log("false");
          var yaGotCaughtLackin = $("<h1></h1>", {
            id: "incorrect-notice",
            text: "You're slackin on your mackin'!"
          });
          var answerReveal = $("<h3></h3>", {
            id: answerReveal
          }).text(
            "The correct answer was: " +
              television.TriviaGame.questionBank[indexNumber].CorrectAnswer
          );
          var answerCard = $("<h1></h1>", {
            id: "question-asked",
            text: television.TriviaGame.questionBank[indexNumber].question
          });
          $("#game-space").fadeOut(5000);
          setTimeout(function() {
            $("#game-space").empty();
          }, 5000);
          setTimeout(function() {
            var solidtext = $("<div></div>", {
              id: "solid-text"
            });
            $("#game-space").fadeIn(5000);
            $("#game-space").prepend(solidtext);
            $("#solid-text").prepend(yaGotCaughtLackin);
            $("#solid-text").append(answerCard);
            $("#solid-text").append(answerReveal);
            setTimeout(function() {
              $("#solid-text")
                .append(nextButton)
                .fadeIn(2000);
              transitional = false;
            }, 5000);

            $("#solid-text").addClass("transparent-bg");
            $("<p></p>", {
              text: "press here to mute/unmute",
              id: "instructions"
            }).appendTo("#solid-text");
            fadeMouse();
          }, 7000);
          console.log(
            "Answer Wrong. This is the user's current score: " +
              television.TriviaGame.userScore
          );
        }
      }
    }
  }
};

function fadeMouse() {
  var fadeout = null;

  $("html").mousemove(function(e) {
    $("#solid-text")
      .stop()
      .fadeIn(300);
    if (fadeout != null) {
      clearTimeout(fadeout);
    }
    fadeout = setTimeout(hide_solidText, 5000);
  });

  function hide_solidText() {
    $("#solid-text")
      .stop()
      .fadeOut(500);
  }
}

//had to use when statement + thenable boolean to make this code only execute during non-transitional periods.
var transitional = false;

var startButton = $("<img></img>", {
  class: "submit",
  src: "assets/img/StartGame.jpg",
  height: "60px",
  width: "100px",
  id: "start-game"
}).click(function() {
  if (transitional == false) {
    transitional = true;

    document.getElementById("start-game").disabled = true;
    $("#game-space").fadeOut(3000);
    setTimeout(function() {
      $("#game-space").empty();

      $("#game-space").fadeIn(3000);

      television.TriviaGame.gameMechanics.drawQuestion(0);
    }, 6500);
  }
});
$("#solid-text").append(startButton);
$(startButton).click(function() {
  if (transitional == false) {
    transitional = true;

    document.getElementById("start-game").disabled = true;
    $("#game-space").fadeOut(3000);
    setTimeout(function() {
      $("#game-space").empty();

      $("#game-space").fadeIn(3000);

      television.TriviaGame.gameMechanics.drawQuestion(0);
    }, 6500);
  }
});
$("<p></p>", {
  text: "press here to mute/unmute",
  id: "instructions"
}).appendTo("#solid-text");

fadeMouse();

//   //if statement 1st that checks for end game
//   //if and else if nested for win and losss condition.
//   //1 h1 element saying "yo fam, you won!"
//   // fade and then static to win video
//   // loss screen fade and then static
//   //to "ya lost homie".
// plus additional bonus video
//   // found this fade out div on mouse still hack

//   // from :  https://stackoverflow.com/questions/1973772/jquery-mousemove-fade-in-out-element

//   ///else if that checks for continue game
//   //

// });

//controls muting/unmuting on home screen
function muteVid() {
  document.getElementById("instructions").addEventListener("click", function() {
    if (document.getElementById("video-element").muted == false) {
      document.getElementById("video-element").muted = true;
    } else if (document.getElementById("video-element").muted == true) {
      document.getElementById("video-element").muted = false;
    }
  });
}
muteVid();
// timers https://www.youtube.com/watch?v=VvBphozbias

// television.TriviaGame.gameMechanics.drawQuestion(0);
// television.TriviaGame.gameMechanics.drawQuestion(1);
// television.TriviaGame.gameMechanics.drawQuestion(2);
// television.TriviaGame.gameMechanics.drawQuestion(3);
// television.TriviaGame.gameMechanics.drawQuestion(4);
// television.TriviaGame.gameMechanics.drawQuestion(5);
// television.TriviaGame.gameMechanics.drawQuestion(6);
// television.TriviaGame.gameMechanics.drawQuestion(7);
// $("#video-element").fadeOut(8000, "linear");
// television.TriviaGame.gameMechanics.fadeGameSpace();

//   $("#video-src").attr("src", "../video/funny video.webm");
// });
// //FOUND THIS VIDEO CLEARING SOLUTION https://stackoverflow.com/questions/3258587/how-to-properly-unload-destroy-a-video-element

// var videoElement = $("#video-element");
// videoElement.pause();
// videoElement.removeAttribute("src"); // empty source

// videoElement.load();
// videoElement.src("../video/funny video.webm");
// television.TriviaGame.questionBank[0].actionSet();

//ALSO FOUND THIS ON W3SCHOOLS https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_av_met_load

//found this on stack overflow. I can queue my video on/off effect by time. https://stackoverflow.com/questions/5981427/start-html5-video-at-a-particular-position-when-loading
// document.getElementById('vid1').addEventListener('loadedmetadata', function() {
//   this.currentTime = 50;
// }, false);
