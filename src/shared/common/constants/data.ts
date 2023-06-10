import { Lesson, MCourse } from '../types';
import Lesson1 from '../../../../public/images/Lesson1.png';
import Lesson2 from '../../../../public/images/Lesson2.png';
import Lesson3 from '../../../../public/images/Lesson3.png';
import Course1 from '../../../../public/images/course1.jpg';
import Course2 from '../../../../public/images/course2.jpg';
import Course3 from '../../../../public/images/course3.png';
import CourseDetail1 from '../../../../public/images/coursedetail1.png';
import Hen from '../../../../public/images/hen.png';
import Mosquito from '../../../../public/images/mosquito.png';
import Shrimp from '../../../../public/images/shrimp.png';

import { QuestionTypeEnum } from '.';


export const lessons: Lesson[] = [
	{
		id: 1,
		courseId: 1,
		type: 'lecture',
		name: 'Words',
		image: Lesson2,
		time: {
			hour: 1,
			minute: 30,
		},
		level: 2,
		currentProgress: 20,
		totalProgress: 40,
		lectures: [
			{
				lectureNum: 1,
				consonant: 'ก',
				symbol: 'ก ไก่',
				spelling: 'ko kày',
				meaning: 'con gà'			
			},
			{
				lectureNum: 2,
				consonant: 'ข',
				symbol: 'ข ไข่',
				spelling: 'khỏ khày',
				meaning: 'quả trứng'			
			},
			{
				lectureNum: 3,
				consonant: 'ฃ',
				symbol: 'ฃ ขวด',
				spelling: 'khỏ khuột',
				meaning: 'cái chai, lọ'			
			},
			{
				lectureNum: 4,
				consonant: 'ค',
				symbol: 'ค ควาย',
				spelling: 'kho khoai',
				meaning: 'con trâu'			
			},
		],
		quizzes: []
	},
	{
		id: 2,
		courseId: 1,
		type: 'quiz',
		name: 'Image quiz',
		image: CourseDetail1,
		time: {
			hour: 1,
			minute: 30,
		},
		level: 1,
		currentProgress: 10,
		totalProgress: 50,
		lectures: [],
		quizzes: [
			{
				questionTitle:
          'Nhìn vào bức tranh dưới đây và chọn câu trả lời đúng: Đây là con vật gì?',
				questionImage: Hen,
				questionProblem: '',
				questionType: QuestionTypeEnum.IMAGETOWORD,
				answers: ['หมา', 'แมว', 'หมู', 'ไก่'],
				correctAnswer: 'ไก่',
				quizNum: 1,
			},
			{
				questionTitle:
          'Nhìn vào bức tranh dưới đây và chọn câu trả lời đúng: Đây là con vật gì?',
				questionImage: Mosquito,
				questionProblem: '',
				questionType: QuestionTypeEnum.IMAGETOWORD,
				answers: ['ควาย', 'กุ้ง', 'หมา', 'ปลา'],
				correctAnswer: 'กุ้ง',
				quizNum: 2,
			},
			{
				questionTitle:
          'Nhìn vào bức tranh dưới đây và chọn câu trả lời đúng: Đây là con vật gì?',
				questionImage: Shrimp,
				questionProblem: '',
				questionType: QuestionTypeEnum.IMAGETOWORD,
				answers: ['ยุง', 'นก', 'ม้า', 'งู'],
				correctAnswer: 'ยุง',
				quizNum: 3,
			},
			{
				questionTitle:
          'Nhìn vào mệnh đề dưới đây và chọn câu trả lời đúng: Câu giao tiếp',
				questionImage: '',
				questionProblem: 'คุณชื่ออะไร?',
				questionType: QuestionTypeEnum.TRANSLATE,
				answers: [
					'Bạn có khỏe không?',
					'Tên bạn là gì?',
					'Bạn đến từ đâu?',
					'Bạn bao nhiêu tuổi?',
				],
				correctAnswer: 'Tên bạn là gì?',
				quizNum: 4,
			},
			{
				questionTitle:
          'Nhìn vào mệnh đề dưới đây và chọn câu trả lời đúng: Câu giao tiếp',
				questionImage: '',
				questionProblem: 'ไม่เป็นไร',
				questionType: QuestionTypeEnum.TRANSLATE,
				answers: ['Cảm ơn bạn.', 'Không có gì.', 'Không sao.', 'Không có chi.'],
				correctAnswer: 'Không sao.',
				quizNum: 5,
			},
			{
				questionTitle:
          'Nhìn vào mệnh đề dưới đây và chọn câu trả lời đúng: Câu giao tiếp',
				questionImage: '',
				questionProblem: 'ฉันไม่รู้',
				questionType: QuestionTypeEnum.TRANSLATE,
				answers: ['Coi chừng!', 'Tôi đói.', 'Tôi khát', 'Tôi không biết.'],
				correctAnswer: 'Tôi không biết.',
				quizNum: 6,
			},
		],
	},
	{
		id: 3,
		courseId: 1,
		type: 'quiz',
		name: 'Comunication',
		image: Lesson1,
		time: {
			hour: 1,
			minute: 30,
		},
		level: 3,
		currentProgress: 5,
		totalProgress: 50,
		lectures: [],
		quizzes: [],
	},
	{
		id: 4,
		courseId: 1,
		type: 'lecture',
		name: 'Grammar',
		image: Lesson3,
		time: {
			hour: 1,
			minute: 10,
		},
		level: 4,
		currentProgress: 0,
		totalProgress: 25,
		lectures: [],
		quizzes: [],
	},
];

export const courses : MCourse[] = [
	{
		id: 1,
		title: 'Start with the letter',
		progress: 80,
		image: Course1,
		description:'Every language starts with the simplest things, let\'s start with the alphabet and some basic vocabulary selected by Tiny Thai!'
	},
	{
		id: 2,
		title: 'Get creative with vocabulary and grammar',
		progress: 50,
		image: Course2,
		description: 'In this course, students will be introduced to vocabulary words and how to use them in different communication situations. In addition, the course also focuses on improving the ability to use simple grammar to convey ideas and information clearly and accurately.'
	},
	{
		id: 3,
		title: 'Fluent with vocabulary and grammar',
		progress: 10,
		image: Course3,
		description: 'This course will help students improve their ability to use the Thai language and better understand the grammatical structure of the Thai language. At the same time, students will also be introduced to new vocabulary and how to use them in different communication situations.'
	},
];

export const lessonColors = [
	{
		level: 1,
		bgColor: '#8BC34A',
		progressColor: 'linear-gradient(270deg, #8BC34A -36.71%, #11998E 167.09%)',
	},
	{
		level: 2,
		bgColor: '#FBB237',
		progressColor: 'linear-gradient(270deg, #FFA000 -36.71%, #BB6414 167.09%)',
	},
	{
		level: 3,
		bgColor: '#FF4B4C',
		progressColor: 'linear-gradient(270deg, #D72714 -36.71%, #9D1515 167.09%)',
	},
];
