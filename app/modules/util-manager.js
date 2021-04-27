class UtilManager {
	constructor() {
		this._utilKey = `${UtilManager.randomString(10)}`;
	}

	/**
	 * @returns {UtilManager}
	 * @readonly
	 * @static
	 * @memberof UtilManager
	 */
	static get instance() {
		return this._instance = this._instance || new UtilManager();
	}

	/**
	 * @memberof UtilManager
	 */
	get clientUtils() {
		return window[this._utilKey];
	}

	/**
	 * @memberof UtilManager
	 */
	set clientUtils(value) {
		window[this._utilKey] = value;
	}

	/**
	 * @param {number} length length of the random string
	 * @param {string[]} validChars array of valid chars or sequences
	 * @returns {string} random string of specified length
	 */
	static randomString(length, validChars = [...'abcdefghijklmnopqrstuvwxyz1234567890']) {
		return Array(length)
			.fill(null)
			.map(() => validChars[Math.floor(Math.random()*validChars.length)])
			.join('');
	}
}

module.exports = UtilManager;