import { AxiosInstance, AxiosResponse } from 'axios';


export async function get<TQuery = object>(
	instance: AxiosInstance,
	url: string,
	payload: TQuery
): Promise<AxiosResponse> {
	return instance.get(url, { params: { isAuthenticationRequired: false, ...payload } });
}

export async function post<TBody = object>(
	instance: AxiosInstance,
	url: string,
	payload: TBody
): Promise<AxiosResponse> {
	return instance.post(url, payload, { params: { isAuthenticationRequired: false } });
}

export async function put<TBody = object>(
	instance: AxiosInstance,
	url: string,
	payload: TBody
): Promise<AxiosResponse> {
	return instance.put(url, payload, { params: { isAuthenticationRequired: false } });
}

export async function Delete<TQuery = object>(
	instance: AxiosInstance,
	url: string,
	payload: TQuery
): Promise<AxiosResponse> {
	return instance.delete(url, { params: { isAuthenticationRequired: false, ...payload } });
}

