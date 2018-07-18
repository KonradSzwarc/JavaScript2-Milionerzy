import AudioPlayer from './AudioPlayer';

class Questions {
  constructor(questions) {
    this.question = document.querySelector('#question');
    this.answers = {
      a: {
        container: document.querySelector('#a'),
        letter: document.querySelector('#a > span:first-child'),
        content: document.querySelector('#a > span:last-child'),
      },
      b: {
        container: document.querySelector('#b'),
        letter: document.querySelector('#b > span:first-child'),
        content: document.querySelector('#b > span:last-child'),
      },
      c: {
        container: document.querySelector('#c'),
        letter: document.querySelector('#c > span:first-child'),
        content: document.querySelector('#c > span:last-child'),
      },
      d: {
        container: document.querySelector('#d'),
        letter: document.querySelector('#d > span:first-child'),
        content: document.querySelector('#d > span:last-child'),
      },
    };

    this.questionsList = questions;
    this.currentQuestionIndex = 0;
    this.audio = new AudioPlayer();
  }

  askQuestion = () => {
    this.currentQuestion = this.questionsList[this.currentQuestionIndex];

    this.question.innerText = this.currentQuestion.question;
    Object.keys(this.answers).map(key => {
      this.answers[key].content.innerText = this.currentQuestion[key];
      this.answers[key].container.addEventListener('click', this.selectAnswer);
    });

    this.currentQuestionIndex++;
    this.audio.playBackgroundMusic();
  };

  selectAnswer = e => {
    if (e.currentTarget.classList.contains('answerChecked')) {
      Object.keys(this.answers).map(key => {
        this.answers[key].container.removeEventListener('click', this.selectAnswer);
      });
      this.checkAnswer(e.currentTarget.id);
    } else {
      Object.keys(this.answers).map(key => {
        this.answers[key].container.setAttribute('class', 'answer');
      });
      e.currentTarget.classList.add('answerChecked');
    }
  };

  checkAnswer = id => {
    console.log(id);
  };
}

export default Questions;
