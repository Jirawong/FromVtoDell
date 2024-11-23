let currentTextIndex = 0;
let i = 0;
const speed = 50; // Typing speed in ms
let isTyping = false;

const demo = document.getElementById("demo");
const startBtn = document.getElementById("start");
const choicesDiv = document.getElementById("choices");

const story = {
  0: {
    text: "Howdy! Dell, are you there?",
    speed: 100,
    bgColor: "black",
    textColor: "white",
    choices: [
      { text: "Yes", next: 1 },
      { text: "No", next: 2 },
    ],
  },
  1: {
    text: "I t ' s m e ,  y o u r . . . .",
    speed: 200,
    bgColor: "black",
    textColor: "white",
    choices: [{ text: "continue", next: 3 }],
  },
  2: {
    text: "NGAHHHHHHHHHHHHHHHHHHHHH You're really not here? T^T",
    speed: 20,
    bgColor: "antiquewhite",
    textColor: "black",
    choices: [
      { text: "Yes", next: 5 },
      { text: "lol im just kidding", next: 4 },
    ],
  },
  3: {
    text: "O w O ?",
    speed: 300,
    bgColor: "antiquewhite",
    textColor: "black",
    choices: [{ text: "huh?", next: 4 }],
  },
  4: {
    text: "55555555 ล้อเล่นจา 😁",
    speed: 30,
    bgColor: "antiquewhite",
    textColor: "black",
    choices: [{ text: "continue", next: 7 }],
  },
  5: {
    text: "If you're not Dell then WHO are you T^T",
    speed: 30,
    bgColor: "antiquewhite",
    textColor: "black",
    choices: [
      { text: "I wOn't Tell You", next: 6 },
      { text: "mY NaMe's TeMMie ", next: 6 },
    ],
  },
  6: {
    text: "Hmph! stop playing around! I can just force you to do this >:3",
    speed: 30,
    bgColor: "antiquewhite",
    textColor: "black",
    choices: [{ text: "Sorry, I'll listen to you now, sir. 😔🙏", next: 4 }],
  },
  7: {
    text: "Btw It's your birthday today owo 🫵",
    speed: 40,
    bgColor: "antiquewhite",
    textColor: "black",
    choices: [{ text: "continue", next: 8 }],
  },
  8: {
    text: "Happy birthday นะ! ขอให้ปีนี้เป็นปีที่ดี ปีที่ผ่านมาเดลเก่งมาก ๆ เลยนะที่ผ่านมาได้อีกปีแล้ว 😁",
    speed: 40,
    bgColor: "antiquewhite",
    textColor: "black",
    choices: [{ text: "continue", next: 9 }],
  },
  9: {
    text: "owo",
    speed: 50,
    bgColor: "antiquewhite",
    textColor: "black",
    choices: [{ text: "continue", next: 10 }],
  },
  10: {
    text: "owo ?",
    speed: 50,
    bgColor: "antiquewhite",
    textColor: "black",
    choices: [{ text: "continue", next: 11 }],
  },
  11: {
    text: ";w;",
    speed: 50,
    bgColor: "black",
    textColor: "antiquewhite",
    choices: [{ text: "continue", next: 12 }],
  },
  12: {
    text: "ที่เรามานั่งทำอะไรแบบนี้เพราะเรามีเรื่องที่อยากจะบอกเดลมาตั้งนานแล้วแหละ  😁",
    speed: 40,
    bgColor: "DeepSkyBlue",
    textColor: "White",
    choices: [{ text: "continue", next: 13 }],
  },
  13: {
    text: "ไม่รู้จะเริ่มเล่ายังไงเหมือนกัน แต่ก็อยากจะให้รออ่านตอนพร้อมนะ เพราะเราไม่รู้เดลจะรู้สึกยังไงกับสิ่งนี้",
    speed: 40,
    bgColor: "lightSkyBlue",
    textColor: "White",
    choices: [{ text: "continue", next: 14 }],
  },
  14: {
    text: "อีกเหตุผลนึงที่ทำแบบนี้ก็อาจจะเพราะเราไม่กล้าพอที่จะเล่าบางเรื่องละมั้ง",
    speed: 40,
    bgColor: "LightSteelBlue",
    textColor: "White",
    choices: [{ text: "continue", next: 15 }],
  },
  15: {
    text: "เรารู้จักกับเดลมานานมากๆเลยนะ ตั้งแต่เราอยู่ม.1-ม.2",
    speed: 40,
    bgColor: "LightSteelBlue",
    textColor: "White",
    choices: [{ text: "continue", next: 16 }],
  },
  16: {
    text: "เรามีปัญหากันตั้งหลายครั้ง ทั้งตอนที่ไม่ได้เป็นอะไรกัน และตอนที่เป็นแฟนกัน",
    speed: 40,
    bgColor: "LightSlateGray",
    textColor: "White",
    choices: [{ text: "continue", next: 17 }],
  },
  17: {
    text: "แน่นอนว่าต้นเหตุมาจากทั้งเราและเดล อีกทั้งปัจจัยอื่นๆที่เราไม่สามารถควบคุมได้",
    speed: 40,
    bgColor: "LightSlateGray",
    textColor: "White",
    choices: [{ text: "continue", next: 18 }],
  },
  18: {
    text: "ครั้งนั้นที่เราเลิกกัน เราคิดว่าเรากับเดลคงไปด้วยกันไม่ได้ (แน่นอนว่าเราไม่ได้โทษเดล แต่เราแค่คิดว่าเพราะปัจจัยหลายๆอย่าง ทั้งสิ่งแวดล้อม ระยะทาง และนิสัยของเรา)",
    speed: 40,
    bgColor: "SlateGray",
    textColor: "White",
    choices: [{ text: "continue", next: 19 }],
  },
  19: {
    text: "ตอนนั้นเราเสียใจมากๆ เพราะเราไม่ได้หมดรักเดล แต่เราแค่ไม่สามารถจัดการปัญหาตรงนั้นได้ และเลือกที่จะหนีปัญหาแทน และเราเสียใจที่สุดที่เราต้องทำให้เดลต้องเสียใจ",
    speed: 40,
    bgColor: "SlateGray",
    textColor: "White",
    choices: [{ text: "continue", next: 20 }],
  },
  20: {
    text: "และด้วยจิตใจเราที่กำลังสับสนและเสียใจ เราได้ไปชอบแฟนเก่าเรา ทุกอย่างเกิดขึ้นไวมาก สุดท้ายแล้ว 80% ของระยะเวลาที่อยู่กับเขาเราไม่ได้มีความสุขเลย",
    speed: 40,
    bgColor: "DarkSlateGray",
    textColor: "White",
    choices: [{ text: "continue", next: 21 }],
  },
  21: {
    text: "สุดท้ายก็เป็นเรา อีกครั้ง ที่ได้เป็นฝ่ายบอกเลิก เพราะตอนที่ตัดสินใจคบกับเขา เราแทบไม่ได้คิดอะไรเลย ไม่รู้จักเขาดีด้วยซ้ำ มีแค่ความรู้สึกในความสับสน และการปฏิเสธคนไม่เป็นของเรา",
    speed: 40,
    bgColor: "DarkSlateGray",
    textColor: "White",
    choices: [{ text: "continue", next: 22 }],
  },
  22: {
    text: "เรารู้สึกแย่และเคว้งคว้างไปหมด เราไม่รู้ว่าชีวิตห่วยๆของเรา ที่ตัดสินใจอะไรแย่ๆไปหลายครั้ง จัดการความรู้สึกและอารมณ์ตัวเองไม่ได้หลายหน จนเกิดผลกระทบมากมายกับชีวิตเรา เราไม่รู้ว่ามันจะดำเนินต่อไปยังไง",
    speed: 40,
    bgColor: "Black",
    textColor: "White",
    choices: [{ text: "continue", next: 23 }],
  },
  23: {
    text: "วันนั้นที่เราจับมือคาบิกอนบนเตียงแล้วร้องไห้ เรานึกถึงเดล และตัดสินใจทักไปโดยที่ไม่ยั้งคิด",
    speed: 40,
    bgColor: "Black",
    textColor: "White",
    choices: [{ text: "continue", next: 24 }],
  },
  24: {
    text: "หลังจากที่เราทักไป เรากลัวมาก เรากลัวว่าเดลจะเกลียดเราไปแล้ว หลังจากที่เราทำอะไรแย่ๆกับเดลไปมากมาย",
    speed: 40,
    bgColor: "Black",
    textColor: "White",
    choices: [{ text: "continue", next: 25 }],
  },
  25: {
    text: "เดลตอบเรากลับมา เราไม่รู้ทำไม เราไม่รู้เหตุผลอะไรเลย แต่เรารู้สึกสบายใจมากๆตอนที่ได้คุยกับเดลอีกครั้ง",
    speed: 40,
    bgColor: "DarkSlateGray",
    textColor: "White",
    choices: [{ text: "continue", next: 26 }],
  },
  26: {
    text: "วันนั้น ตอนที่เดลบอกว่าเดลรักเรา เราดีใจมากๆ เราดีใจมากๆจนร้องไห้ออกมา เป็นความอบอุ่นที่เราได้สัมผัสอีกครั้งหนึ่ง",
    speed: 40,
    bgColor: "LightSlateGray",
    textColor: "White",
    choices: [{ text: "continue", next: 27 }],
  },
  27: {
    text: "แต่จากประสบการณ์ สิ่งที่เราพบเจอ สิ่งที่เราเคยได้กระทำ และการตระหนักถึงนิสัยของตัวเอง ที่ยังไม่สามารถจัดการเรื่องความสัมพันธ์ได้ดี",
    speed: 40,
    bgColor: "LightSteelBlue",
    textColor: "White",
    choices: [{ text: "continue", next: 28 }],
  },
  28: {
    text: "เราตัดสินใจบอกเดลไปว่าเรายังคบกับเดลไม่ได้ เราขอพยายามใช้ชีวิตมหาลัยอย่างสุดความสามารถ และพยายามทำตัวเองให้ดีและพร้อมสำหรับความสัมพันธ์ก่อน",
    speed: 40,
    bgColor: "LightSteelBlue",
    textColor: "White",
    choices: [{ text: "continue", next: 29 }],
  },
  29: {
    text: "เพราะเราไม่อยากทำให้เดลเสียใจอีกแล้ว",
    speed: 40,
    bgColor: "lightSkyBlue",
    textColor: "White",
    choices: [{ text: "continue", next: 30 }],
  },
  30: {
    text: "เราขอบคุณเดลมากๆเลยนะ ที่เข้าใจเรา",
    speed: 40,
    bgColor: "SkyBlue",
    textColor: "White",
    choices: [{ text: "continue", next: 31 }],
  },
  31: {
    text: "ตลอดเวลาที่ผ่านมา ที่เราได้กลับมาคุยกับเดล เราขอบคุณเดลมากๆเลยนะ",
    speed: 40,
    bgColor: "SkyBlue",
    textColor: "White",
    choices: [{ text: "continue", next: 32 }],
  },
  32: {
    text: "เรามีความสุขมากๆเลย",
    speed: 50,
    bgColor: "SkyBlue",
    textColor: "White",
    choices: [{ text: "continue", next: 33 }],
  },
  33: {
    text: "เราเฝ้ารอวันที่เราจะได้เจอกันบ่อยๆ เพื่อที่จะรู้จักกันให้มากกว่านี้ ทำให้เดลมีความสุขได้มากกว่านี้ และได้เห็นรอยยิ้มของเดล",
    speed: 30,
    bgColor: "SkyBlue",
    textColor: "White",
    choices: [{ text: "continue", next: 34 }],
  },
  34: {
    text: "ถึงจะมีช่วงเวลาที่ยากลำบากระหว่างนี้ เราอาจจะไม่มีเวลาว่างเลย แต่เราจะสู้กับสิ่งที่เราต้องเจอ และเราก็จะเป็นกำลังใจให้เดลสู้กับสิ่งที่ต้องเจอนะ",
    speed: 30,
    bgColor: "SkyBlue",
    textColor: "White",
    choices: [{ text: "continue", next: 35 }],
  },
  35: {
    text: "สักวันนึงเราอยากไปเที่ยวกับเดล หลายๆที่เลยนะ เราอยากนั่งกินข้าวด้วยกัน เที่ยวสวนสัตว์ สวนสนุก หรือที่อื่นๆทุกๆที่เลย",
    speed: 50,
    bgColor: "SkyBlue",
    textColor: "White",
    choices: [{ text: "continue", next: 36 }],
  },
  36: {
    text: "แล้วก็อีกสิ่งที่เราอยากจะบอกเดล",
    speed: 150,
    bgColor: "SkyBlue",
    textColor: "White",
    choices: [{ text: "continue", next: 37 }],
  },
  37: {
    text: "เรารักเดลนะ owo",
    speed: 100,
    bgColor: "SkyBlue",
    textColor: "White",
    choices: [{ text: "continue", next: 38 }],
  },
  38: {
    text: "สุขสันต์วันเกิดนะ เราภาวนาให้เดลมีความสุขทุกวันเลยนะ owo",
    speed: 100,
    bgColor: "SkyBlue",
    textColor: "White",
    choices: [{ text: "continue", next: 39 }],
  },
  39: {
    text: "Thanks for always being here",
    speed: 100,
    bgColor: "SkyBlue",
    textColor: "White",
    choices: [],
  },
};

function typeWriter(text, typingSpeed, callback) {
  let i = 0;
  demo.innerHTML = "";
  isTyping = true; // Typing in progress
  disableChoices(true); // Disable choices during typing

  function type() {
    if (i < text.length) {
      demo.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, typingSpeed);
    } else {
      isTyping = false; // Typing finished
      disableChoices(false); // Enable choices
      if (callback) callback();
    }
  }
  type();
}

function displayChoices(choices) {
  choicesDiv.innerHTML = "";

  choices.forEach((choice) => {
    const button = document.createElement("button");
    button.innerText = choice.text;
    button.onclick = () => {
      if (!isTyping) showNextText(choice.next); // Prevent click if typing
    };
    choicesDiv.appendChild(button);
  });
}

function disableChoices(disable) {
  choicesDiv.querySelectorAll("button").forEach((button) => {
    button.disabled = disable;
  });
}

function showNextText(index) {
  const storyNode = story[index];
  if (storyNode) {
    const { text, speed, bgColor, textColor, choices } = storyNode;
    const demo = document.getElementById("demo");
    const bg = document.getElementById("bg");

    bg.style.backgroundColor = bgColor;
    demo.style.color = textColor;

    typeWriter(text, speed, () => displayChoices(choices));
  }
}

function startGame() {
  startBtn.classList.add("hidden"); // Hide start button
  choicesDiv.classList.remove("hidden"); // Show choices
  showNextText(0); // Start at the beginning of the story
}
