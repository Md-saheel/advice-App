const adviceIdElement = document.getElementById('advice-id');
const adviceElement = document.getElementById('advice');
const adviceBtn = document.getElementById('generate-btn');

async function getAdvice() {
  try {
    const res = await fetch(
      `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`
    );
    const adviceData = await res.json();
    const adviceId = adviceData.slip.id;
    const advice = adviceData.slip.advice;
    adviceElement.textContent = advice;
    adviceIdElement.textContent = adviceId;
  } catch (err) {
    console.log(err);
  }
}

getAdvice();

adviceBtn.addEventListener('click', getAdvice);
