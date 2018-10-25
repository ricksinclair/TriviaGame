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

    userAnswer: "",

    questionBank: [
      //This is the object array that holds all of the questions
      //and answers. My goal was to create a structure that
      //complimented the function of the game, similar to how
      //the stopwatch example was constructed.
      //I'm going to have the form set the player's answer(via radio button) to
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
          "Grandmaster Flash, Melle Mel, The Kidd Creole, Keef Cowboy, Mr. Ness/Scorpio, and Rahiem"
      },
      {
        question:
          "Who is the 'Lifestylez ov da Poor and Dangerous' rapper who famously freestyled with  Jay-Z 'Stretch and Bobbito' in 1995?",

        A: "Big Sherm",
        B: "'Lil Pistol Starter",
        C: "Big L",
        D: "Stack Bundles",
        CorrectAnswer: "Big L"
      },
      {
        question:
          'Which New York rap collective ain\'t "nothing to F#($*%" with ?',

        A: "Onyx",
        B: "Wu-Tang Clan",
        C: "The Notorious B.I.G.",
        D: "Eric B. and Rakim.",
        CorrectAnswer: "Wu-Tang Clan"
      },
      {
        question: "",

        A: "",
        B: "",
        C: "",
        D: "",
        CorrectAnswer: ""
      },
      {
        question: "",

        A: "",
        B: "",
        C: "",
        D: "",
        CorrectAnswer: ""
      },
      {
        question: "",

        A: "",
        B: "",
        C: "",
        D: "",
        CorrectAnswer: ""
      },
      {
        question: "",

        A: "",
        B: "",
        C: "",
        D: "",
        CorrectAnswer: ""
      },
      {
        question: "",

        A: "",
        B: "",
        C: "",
        D: "",
        CorrectAnswer: ""
      },
      {
        question: "",

        A: "",
        B: "",
        C: "",
        D: "",
        CorrectAnswer: ""
      },
      {
        question: "",

        A: "",
        B: "",
        C: "",
        D: "",
        CorrectAnswer: ""
      },
      {
        question: "",

        A: "",
        B: "",
        C: "",
        D: "",
        CorrectAnswer: ""
      }
    ],

    //this function will activate the beginning of the game.
    startGame: function() {},

    //this function will control our timer
    timer: function() {}
  }
};

console.log(television.TriviaGame.questionBank);
