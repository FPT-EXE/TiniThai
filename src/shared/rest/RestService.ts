import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { getCookie } from '../utils';


export type AxiosInitOptions = {
	header?: Record<string, string>,
	options?: AxiosRequestConfig,
};

const AUTHORIZATION = 'Authorization';
const CONTENT_TYPE = 'Content-Type';
const CONTENT_TYPE_JSON = 'application/json';
const ACCESS_TOKEN = 'access_token';

class RestService {
	private readonly _axiosInstance: AxiosInstance;

	constructor() {
		this._axiosInstance = this._initializeAxios({});
	}

	private _initializeAxios(initOptions: AxiosInitOptions): AxiosInstance {
		const { header, options } = initOptions;
		const axiosInstance = axios.create({
			timeout: 60000,
			headers: this._prepareHeader(header),
			...options,
		});
		return axiosInstance;
	}

	private _prepareHeader(
		additionalHeaders?: Record<string, string>
	): Record<string, string> {
		const header: Record<string, string> = {};
		header[CONTENT_TYPE] = CONTENT_TYPE_JSON;
		return { ...header, ...additionalHeaders };
	}
  
	private _createAuthInterceptor(token: string) {
		return (request: AxiosRequestConfig) => {
			request.headers = request.headers ?? {};
			request.headers[AUTHORIZATION] = `Bearer ${token}`;
			request.headers[CONTENT_TYPE] = CONTENT_TYPE_JSON;
			return request;
		};
	}

	private _setAuth() {
		const token = getCookie(ACCESS_TOKEN) || '';
		this._axiosInstance.interceptors.request.use(this._createAuthInterceptor(token));
	}

	public async get<TQuery = object>(
		url: string,
		payload: TQuery
	): Promise<AxiosResponse> {
		this._setAuth();
		return this._axiosInstance.get(url, {
			params: { isAuthenticationRequired: true, ...payload },
		});
	}

	public async post<TBody = object>(
		url: string,
		payload: TBody
	): Promise<AxiosResponse> {
		this._setAuth();
		return this._axiosInstance.post(url, payload, {
			params: { isAuthenticationRequired: true },
		});
	}

	public async put<TBody = object>(
		url: string,
		payload: TBody
	): Promise<AxiosResponse> {
		this._setAuth();
		return this._axiosInstance.put(url, payload, {
			params: { isAuthenticationRequired: true },
		});
	}

	public async Delete<TQuery = object>(
		url: string,
		payload: TQuery
	): Promise<AxiosResponse> {
		this._setAuth();
		return this._axiosInstance.delete(url, {
			params: { isAuthenticationRequired: true, ...payload },
		});
	}
}

export default new RestService();
