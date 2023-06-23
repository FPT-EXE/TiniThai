export type Course = {
	_id: string,
	title: string,
	alias: string,
	background: string,
	price: number,
	description: string,
	rating: number,
	degreeOfDifficulty: number,
};

export type MCourse = {
	id: number,
	title: string,
	progress: number,
	description: string,
	image: string,
}

export type CreateCourseForm = {
	title: string,
	background: string,
	price: number,
	alias: string,
	description: string,
	rating: number,
	degreeOfDifficulty: number,
};


export type Lesson = {
	id: number,
	courseId: number,
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
	lectures: Lecture[],
	type: string,
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

export type Lecture = {
	lectureNum: number,
	consonant: string,
	symbol: string,
	spelling: string,
	meaning: string,
};

export type LessonAnswer = {
	lessonId: number,
	quizNum: number,
	userChoice: string,
};

export type User = {
	_id: string,
	name: string,
	email: string,
	role: string,
	courses: string[],
	payments: string[],
	purchasedCourses: PurchasedCourse[] | [],
	__v: number,
}
  
export type Payment = {
	purchasedCourses: string[],
	_id: string,
	amount: number,
	date: string,
	content: string,
	bankCode: string,
	status: string,
	user: User,
	__v: number,
}

export type PurchasedCourse = {
	_id: string,
	course: Course,
	status: string,
	purchasedDate: string,
	expiredDate: string,
	__v: number,
}
