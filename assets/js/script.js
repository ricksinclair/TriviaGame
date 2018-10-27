//Since I want the whole site to operate like a TV, I attemped to make the
//core all of the  functionality be based on this TV object.

var television = {
  staticVideo: {
    play: function() {},

    close: function() {},

    changeChannel: function() {
      $("#innerTV").html(
        "<video width=300 height=200 autoplay=autoplay><source src=video/supercoolvideo.mp4 type=video/mp4 /></video>"
      );
    }
  },

  TriviaGame: {
    userScore: 0,
    correctAnswers: 0,

    timers: function() {},

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

        actionSet: function() {
          var imgUrl = "";
          var soundClipUrl = "";
          var video = $("<video />", {
            id: "video-element",
            src: "http://video-js.zencoder.com/oceans-clip.mp4",
            type: "video/mp4",
            controls: false,
            loop: true,
            muted: false,
            style: "width:100%; height:100%;"
          });
          video.appendTo($("#tv-pic"));
        }
      },

      {
        question:
          "Who is the 'Lifestylez ov da Poor and Dangerous' rapper who famously freestyled with  Jay-Z on 'Stretch and Bobbito' in 1995?",

        A: "Big Sherm",
        B: "Lil Pistol Starter",
        C: "Big L",
        D: "Stack Bundles",
        CorrectAnswer: "Big L",
        actionset: function() {
          var imgUrl = "";
          var soundClipUrl = "";
        }
      },
      {
        question:
          'Which New York rap collective ain\'t "nothing to F#($*%" with ?',

        A: "Onyx",
        B: "Wu-Tang Clan",
        C: "The Notorious B.I.G.",
        D: "Eric B. and Rakim.",
        CorrectAnswer: "Wu-Tang Clan",
        actionset: function() {
          var imgUrl = "";
          var soundClipUrl = "";
        }
      },
      {
        question:
          "What popular rap artist has a god-mother on the FBI Most Wanted List?",

        A: "2PAC",
        B: "Lil' Wayne",
        C: "Young Jeezy",
        D: "Jay-z",
        CorrectAnswer: "2PAC",
        actionset: function() {
          var imgUrl = "";
          var soundClipUrl = "";
        }
      },
      {
        question:
          "Who is the  self-dubbed  'Susan Lucci of rap' who has been nominated over thirteen times, but has never won a grammy?",

        A: "Dr. Dre",
        B: "Nas",
        C: "Busta Rhymes",
        D: "DMX",
        CorrectAnswer: "Nas",
        actionset: function() {
          var imgUrl = "";
          var soundClipUrl = "";
        }
      },
      {
        question:
          "How much money did LL Cool J bank in 20 minutes according to his 1985 hit 'Rock The Bells' ?",

        A: "$20,000",
        B: "$6,000",
        C: "$10,000",
        D: "$50,000",
        CorrectAnswer: "6",

        actionset: function() {
          var imgUrl = "";
          var soundClipUrl = "";
        }
      },
      {
        question:
          "This Hip Hop legend got their big break alongside DJ Gemini and Flavor Unit with their hit 'Princess of the Posse':  ",
        A: "Mc Lyte",
        B: "Roxanne",
        C: "Queen Latifah",
        D: "Da Brat",
        CorrectAnswer: "Queen Latifah",

        actionset: function() {
          var imgUrl = "";
          var soundClipUrl = "";
        }
      },
      {
        question:
          ' In which classic rap song would you hear the line, "Most of my heroes don\'t appear on no stamps"?',

        A: "20",
        B: "6",
        C: "10",
        D: "50",
        CorrectAnswer: "6",

        actionset: function() {
          var imgUrl = "";
          var soundClipUrl = "";
        }
      },
      {
        question: "BIGGIE QUESTION",

        A: "$20,000",
        B: "$6,00",
        C: "$10,000",
        D: "$50,000",
        CorrectAnswer: "6",

        actionset: function() {
          var imgUrl = "";
          var soundClipUrl = "";
        }
      }
    ],

    //this contains the game mechanics.
    gameMechanics: {
      x: 0,
      drawQuestion: function(indexNumber) {
        $("#game-space").empty();
        var CurrentQuestion =
          television.TriviaGame.questionBank[indexNumber].question;
        var answerA = television.TriviaGame.questionBank[indexNumber].A;
        var answerB = television.TriviaGame.questionBank[indexNumber].B;
        var answerC = television.TriviaGame.questionBank[indexNumber].C;
        var answerD = television.TriviaGame.questionBank[indexNumber].D;

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
          event.preventDefault();
          $("game-space").empty();
          television.TriviaGame.gameMechanics.checkAnswer(indexNumber);
        });
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
      },

      fadeGameSpace: function() {
        $("#video-element").hide();
        $("#video-element").fadeIn(5000, "linear");
        $("#game-space").hide();
        $("#game-space").fadeIn(5000, "linear");
        $("#video-element").fadeOut(8000, "linear");
      },

      checkAnswer: function(indexNumber) {
        console.log("the index number is:" + indexNumber);
        console.log($("[name=radioAnswer]:checked").val());
        var userAnswer = $("input[name='radioAnswer']:checked").val();
        console.log(userAnswer);
        if (
          userAnswer ==
          television.TriviaGame.questionBank[indexNumber].CorrectAnswer
        ) {
          console.log("true");
          var answerReveal = $("<h3></h3>", {
            id: answerReveal
          }).text(
            "The correct answer was: " +
              television.TriviaGame.questionBank[indexNumber].CorrectAnswer
          );
          $("#game-space").fadeOut(1000, "linear");
          $("#game-space").empty();
          $("<h1></h1>", {
            id: "question-asked",
            text: television.TriviaGame.questionBank[indexNumber].question
          }).append("#game-space");
          console.log($("#question-asked"));
          $("#game-space").show();
          $("#game-space").fadeIn(1000, "linear");

          television.TriviaGame.userScore++;

          console.log(television.TriviaGame.userScore);
          television.TriviaGame.correctAnswers++;
        } else {
          console.log("false");
        }
      },

      clearGameSpace: function() {}
    },

    //this function will control our timer
    timerChallengeMode: function() {}
  }
};
television.TriviaGame.gameMechanics.drawQuestion(0);
// television.TriviaGame.gameMechanics.drawQuestion(1);
// television.TriviaGame.gameMechanics.drawQuestion(2);
// television.TriviaGame.gameMechanics.drawQuestion(3);
// television.TriviaGame.gameMechanics.drawQuestion(4);
// television.TriviaGame.gameMechanics.drawQuestion(5);
// television.TriviaGame.gameMechanics.drawQuestion(6);
// $("#video-element").fadeOut(8000, "linear");
// television.TriviaGame.gameMechanics.fadeGameSpace();

// $("document").ready(function() {
//   console.log(television.TriviaGame.questionBank);
//   //   $("#game-space").fadeOut(1600, "linear");
//   television.TriviaGame.gameMechanics.fadeGameSpace();
//   console.log(television.TriviaGame.gameMechanics.fadeGameSpace);

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
