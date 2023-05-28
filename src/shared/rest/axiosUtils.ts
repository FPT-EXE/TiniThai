import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import config from '../configurations/config';


const AUTHORIZATION = 'Authorization';
const CONTENT_TYPE = 'Content-Type';
const CONTENT_TYPE_JSON = 'application/json';

export type AxiosInitOptions = {
	header?: Record<string, string>,
	options?: AxiosRequestConfig,
}

export const initializeAxios = ({header, options}: AxiosInitOptions): AxiosInstance => {
	const axiosInstance = axios.create({
		timeout: config.REST_TIMEOUT,
		headers: prepareHeader(header),
		...options
	});
	axiosInstance.interceptors.request.use(requestInterceptor);
	return axiosInstance;
};

function prepareHeader(additionalHeaders?: Record<string, string>):Record<string, string> {
	const header: Record<string, string> = {};
	header[CONTENT_TYPE] = CONTENT_TYPE_JSON;
	return {...header, ...additionalHeaders};
}

async function requestInterceptor(request: AxiosRequestConfig) {
	request.headers = request.headers ?? {};
	request.headers[AUTHORIZATION] = `Bearer ${await getToken()}`;
	request.headers[CONTENT_TYPE] = CONTENT_TYPE_JSON;
	return request;
}

async function getToken() {
	return Promise.resolve('mock token');
}

