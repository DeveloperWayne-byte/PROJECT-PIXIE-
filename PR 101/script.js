const questions = {
    "q1": { text: "Do you enjoy working with technology?", next: "q2" },
    "q2": { text: "Do you like solving complex problems?", next: "q3" },
    "q3": { text: "Are you interested in coding?", next: "q4" },
    "q4": { text: "Do you enjoy mathematics?", next: "q5" },
    "q5": { text: "Do you like working on hardware and circuits?", next: "q6" },
    "q6": { text: "Are you interested in software development?", next: "q7" },
    "q7": { text: "Do you prefer practical hands-on projects?", next: "q8" },
    "q8": { text: "Do you enjoy working in teams?", next: "q9" },
    "q9": { text: "Are you interested in artificial intelligence?", next: "q10" },
    "q10": { text: "Do you like designing and building websites?", next: "q11" },
    "q11": { text: "Do you prefer back-end development?", next: "q12" },
    "q12": { text: "Do you want to specialize in cybersecurity?", next: "q13" },
    "q13": { text: "Are you interested in cloud computing?", next: "q14" },
    "q14": { text: "Do you enjoy managing IT systems?", next: "q15" },
    "q15": { text: "Do you like database management?", next: "q16" },
    "q16": { text: "Do you enjoy troubleshooting and fixing tech issues?", next: "q17" },
    "q17": { text: "Do you prefer working with networking and infrastructure?", next: "q18" },
    "q18": { text: "Are you interested in data analysis?", next: "q19" },
    "q19": { text: "Do you like software testing?", next: "q20" },
    "q20": { text: "Do you enjoy working with emerging technologies?", next: "end" }
};

let answers = {};
let currentQuestionId = "q1";

function showQuestion(questionId) {
    const form = document.getElementById("questionnaire");
    form.innerHTML = "";

    if (questionId === "end") {
        
        const resultBox = document.getElementById("resultBox");
        const resultText = document.getElementById("resultText");

        
        let courseRecommendation = "Information Technology"; 
        
        if (answers.q10 === "Yes" || answers.q11 === "Yes") {
            courseRecommendation = "Web Developer";
        } else if (answers.q6 === "Yes" || answers.q13 === "Yes") {
            courseRecommendation = "Computer Engineering";
        } else if (answers.q9 === "Yes" || answers.q18 === "Yes") {
            courseRecommendation = "Computer Science";
        }

        resultText.innerText = `Based on your answers, the recommended course for you is: ${courseRecommendation}`;
        resultBox.style.display = "block";
        return;
    }

    const question = questions[questionId];
    const div = document.createElement("div");
    div.classList.add("question");

    div.innerHTML = `
        <p>${question.text}</p>
        <label>
            <input type="radio" name="question" value="Yes" onclick="nextQuestion('${questionId}', 'Yes', '${question.next}')"> Yes
        </label>
        <label>
            <input type="radio" name="question" value="No" onclick="nextQuestion('${questionId}', 'No', '${question.next}')"> No
        </label>
    `;

    form.appendChild(div);
}

function nextQuestion(questionId, answer, nextId) {
    answers[questionId] = answer;
    showQuestion(nextId);
}

window.onload = function () {
    showQuestion(currentQuestionId);
};

function goBack() {
    window.location.href = "index.html";
}
