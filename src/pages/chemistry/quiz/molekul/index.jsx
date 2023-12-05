import { useState, useEffect } from "react";
import questions from "./question";
import "./../style.css";
import Back from "../../../../components/Back";

function shuffle(array) {
	const shuffledArray = [...array];
	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffledArray[i], shuffledArray[j]] = [
			shuffledArray[j],
			shuffledArray[i],
		];
	}
	return shuffledArray;
}

export default function Atom() {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [questionText, setQuestionText] = useState("");
	const [choices, setChoices] = useState([]);
	const [correctAnswer, setCorrectAnswer] = useState(null);
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [showNextButton, setShowNextButton] = useState(false);

	const startQuiz = () => {
		setCurrentQuestionIndex(0);
		setScore(0);
		setShowNextButton(false);
		showQuestion(0);
	};

	const showQuestion = (index) => {
		resetState();
		let currentQuestion = questions[index];
		let questionNumber = index + 1;
		setQuestionText(`${questionNumber}. ${currentQuestion.question}`);
		const shuffledChoices = shuffle(currentQuestion.choices);
		setChoices(shuffledChoices);
		setCorrectAnswer(
			currentQuestion.choices.findIndex(
				(choice) => choice.answer === true
			)
		);
	};

	const resetState = () => {
		setChoices([]);
		setCorrectAnswer(null);
		setSelectedAnswer(null);
	};

	const selectChoice = (isCorrect, index) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		setSelectedAnswer(index);
		setShowNextButton(true);
	};

	const handleNextButton = () => {
		setShowNextButton(false);
		setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

		if (currentQuestionIndex < questions.length - 1) {
			showQuestion(currentQuestionIndex + 1);
		} else {
			// If it's the last question, show the score
			showScore();
		}
	};

	const showScore = () => {
		resetState();
		setQuestionText(`Kamu mendapat skor ${score} dari ${questions.length}!😯`);
	};

	useEffect(() => {
		startQuiz();
	}, []);

	return (
		<div className="flex flex-col items-center justify-center min-h-[80vh]" >
			<Back/>
			<h1 className="font-medium text-4xl">Quiz Atom</h1>
			<div className="quiz">
				<h2 id="question">{questionText}</h2>
				<div id="answer-buttons">
					{choices.map((choice, index) => (
						<button
							key={index}
							className={`btn ${
								selectedAnswer === index
									? choice.answer
										? "correct"
										: "incorrect"
									: ""
							}`}
							onClick={() => selectChoice(choice.answer, index)}
							aria-label={choice.text}
							disabled={selectedAnswer !== null}>
							{choice.text}
						</button>
					))}
				</div>
				{showNextButton && (
					<button id="next-button" onClick={handleNextButton}>
						Next
					</button>
				)}
			</div>
		</div>
	);
}
