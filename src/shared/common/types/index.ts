export type Course = {
	title: string,
	alias: string,
	img: string,
	price: number,
	description: string,
	rating: number,
	degreeOfDifficulty: number,
};

export type Lesson = {
	id: number,
	time: {
		hour: number,
		minute: number,
	},
	name: string,
	level: number,
	image: string,
	currentProgress: number,
	totalProgress: number,
	quizzes: Quiz[],
};

export type Quiz = {
	quizNum: number,
	questionTitle: string,
	questionProblem: string,
	questionImage: string,
	questionType: number,
	answers: string[],
	correctAnswer: string,
};

// export type LessonAnswer = {
// 	lessonId: number,
// 	quizAnswers: {
// 		quizNum: number,
// 		userChoice: string,
// 	}[],
// };

export type LessonAnswer = {
	lessonId: number,
	quizNum: number,
	userChoice: string,
};
