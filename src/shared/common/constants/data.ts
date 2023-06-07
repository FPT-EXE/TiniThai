import { Lesson } from '../types';
import Lesson1 from '../../../assets/images/Lesson1.png';
import Lesson2 from '../../../assets/images/Lesson2.png';
import Lesson3 from '../../../assets/images/Lesson3.png';
import Hen from '../../../assets/images/hen.png';
import Mosquito from '../../../assets/images/mosquito.png';
import Shrimp from '../../../assets/images/shrimp.png';

import { QuestionTypeEnum } from '.';


export const lessons: Lesson[] = [
	{
		id:1,
		name: 'Perkenalan',
		image: Lesson1,
		time: {
			hour: 1,
			minute: 30,
		},
		level: 1,
		currentProgress: 9,
		totalProgress: 50,
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
				answers: ['Bạn có khỏe không?', 'Tên bạn là gì?', 'Bạn đến từ đâu?', 'Bạn bao nhiêu tuổi?'],
				correctAnswer: 'Tên bạn là gì?',
				quizNum: 4,
			},
			{
				questionTitle:
          'Nhìn vào mệnh đề dưới đây và chọn câu trả lời đúng: Câu giao tiếp',
				questionImage: '',
				questionProblem: 'ไม่เป็นไร',
				questionType: QuestionTypeEnum.TRANSLATE,
				answers: ['Cảm ơn bạn.', 'Không có gì.', 'Không sao.', 'Không có gì.'],
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
		id: 2,
		name: 'Tata Bahasa',
		image: Lesson2,
		time: {
			hour: 1,
			minute: 30,
		},
		level: 2,
		currentProgress: 5,
		totalProgress: 40,
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
				answers: ['Bạn có khỏe không?', 'Tên bạn là gì?', 'Bạn đến từ đâu?', 'Bạn bao nhiêu tuổi?'],
				correctAnswer: 'ยุง',
				quizNum: 4,
			},
			{
				questionTitle:
          'Nhìn vào mệnh đề dưới đây và chọn câu trả lời đúng: Câu giao tiếp',
				questionImage: '',
				questionProblem: 'ไม่เป็นไร',
				questionType: QuestionTypeEnum.TRANSLATE,
				answers: ['Cảm ơn bạn.', 'Không có gì.', 'Không sao.', 'Không có gì.'],
				correctAnswer: 'ยุง',
				quizNum: 5,
			},
			{
				questionTitle:
          'Nhìn vào mệnh đề dưới đây và chọn câu trả lời đúng: Câu giao tiếp',
				questionImage: '',
				questionProblem: 'ฉันไม่รู้',
				questionType: QuestionTypeEnum.TRANSLATE,
				answers: ['Coi chừng!', 'Tôi đói.', 'Tôi khát', 'Tôi không biết.'],
				correctAnswer: 'ยุง',
				quizNum: 6,
			},
		],
	},
	{
		id: 3,
		name: 'Cara Pengucapan',
		image: Lesson3,
		time: {
			hour: 1,
			minute: 30,
		},
		level: 3,
		currentProgress: 12,
		totalProgress: 50,
		quizzes: [],
	},
	{
		id: 4,
		name: 'Tata Pengucapan',
		image: Lesson3,
		time: {
			hour: 1,
			minute: 10,
		},
		level: 4,
		currentProgress: 5,
		totalProgress: 25,
		quizzes: [],
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
