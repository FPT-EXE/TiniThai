import { initializeApp } from '@firebase/app';
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, OAuthProvider, signInWithPopup } from '@firebase/auth';

import firebaseConfig from '../configurations/firebaseConfig';


class FirebaseService {
	private _app;
	private _auth;

	constructor() {
		this._app = initializeApp(firebaseConfig);
		this._auth = getAuth(this._app);
		this._auth.languageCode = 'en';
	}

	public async signInWithGoogle(): Promise<string> {
		const provider = new GoogleAuthProvider();
		provider.addScope('email profile openid');

		const result = await signInWithPopup(this._auth, provider);
		return result.user.getIdToken();
	}

	public async signInWithFacebook(): Promise<string> {
		const provider = new FacebookAuthProvider();
		provider.setCustomParameters({
			display: 'popup'
		});
		provider.addScope('openid email');
		const result = await signInWithPopup(this._auth, provider);
		return result.user.getIdToken();
	}

	public async signInWithMicrosoft(): Promise<string> {
		const provider = new OAuthProvider('microsoft.com');
		provider.setCustomParameters({
			prompt: 'consent'
		});
		provider.addScope('openid email profile');

		const result = await signInWithPopup(this._auth, provider);
		return result.user.getIdToken();
	}

	public async getFirebaseToken(): Promise<string | undefined> {
		return this._auth.currentUser?.getIdToken(true);
	}

	public async getCurrentUser() {
		return this._auth.currentUser;
	}
}

export default new FirebaseService();
