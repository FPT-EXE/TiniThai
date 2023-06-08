import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { getCookie } from '../utils';


export type AxiosInitOptions = {
	header?: Record<string, string>,
	options?: AxiosRequestConfig,
};

const AUTHORIZATION     = 'Authorization';
const CONTENT_TYPE      = 'Content-Type';
const CONTENT_TYPE_JSON = 'application/json';
const ACCESS_TOKEN      = 'access_token';
const NGROK_IGNORE      = 'ngrok-skip-browser-warning';

class RestService {
	private readonly _axiosInstance: AxiosInstance;
	private _token?: string;

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
		header[NGROK_IGNORE] = 'true';
		return { ...header, ...additionalHeaders };
	}
  
	private _createAuthInterceptor(token: string) {
		return (request: AxiosRequestConfig) => {
			request.headers = request.headers ?? {};
			request.headers[AUTHORIZATION] = `Bearer ${token}`;
			return request;
		};
	}

	public setAuthorizationHeader(token: string) {
		this._token = token;
		this._axiosInstance.interceptors.request.use(this._createAuthInterceptor(token));
	}

	private _setAuthorizationHeader() {
		if (this._token) {
			return;
		}
		this._token = getCookie(ACCESS_TOKEN);
		if (!this._token) {
			console.error('null token');
			return;
		}
		this._axiosInstance.interceptors.request.use(this._createAuthInterceptor(this._token));
	}

	public async get<TQuery = object>(
		url: string,
		payload?: TQuery
	): Promise<AxiosResponse> {
		this._setAuthorizationHeader();
		return this._axiosInstance.get(url, {
			params: { isAuthenticationRequired: true, ...payload },
			withCredentials: true
		});
	}

	public async post<TBody = object>(
		url: string,
		payload?: TBody
	): Promise<AxiosResponse> {
		this._setAuthorizationHeader();
		return this._axiosInstance.post(url, payload, {
			params: { isAuthenticationRequired: true },
		});
	}

	public async put<TBody = object>(
		url: string,
		payload?: TBody
	): Promise<AxiosResponse> {
		this._setAuthorizationHeader();
		return this._axiosInstance.put(url, payload, {
			params: { isAuthenticationRequired: true,  },
		});
	}

	public async delete<TQuery = object>(
		url: string,
		payload?: TQuery
	): Promise<AxiosResponse> {
		this._setAuthorizationHeader();
		return this._axiosInstance.delete(url, {
			params: { isAuthenticationRequired: true, ...payload },
		});
	}
}

export default new RestService();
