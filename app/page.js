'use client'
import Image from 'next/image'
import { useState, useRef } from 'react'
import Link from 'next/link';

export default function Home() {

	const [password, setPassword] = useState('');
	const [passwordHint, setPasswordHint] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [passwordFocus, setPasswordFocus] = useState(false);
	const [onload, setOnload] = useState(false);

	const passwordRef = useRef();

	const changePassword = (event) => {
		var password_value = event.target.value;
		setPassword(password_value);
		if (!onload) {
			setOnload(true);
		}
		if (password_value.length < 6) {
			setPasswordHint(Math.abs(password_value.length - 6) + ' Remaining ');
		} else {
			setPasswordHint('');
		}

		validatePassword(password_value);
	}

	const validatePassword = (passwordValue) => {
		var lowerExpression = /[a-z]/;
		var upperExpression = /[A-Z]/;
		var numberExpression = /[0-9]/;
		var sameCharacterExp = /(.)\1{2}/;

		if (passwordValue.length < 6) {
			setPasswordError("Pasasword must atleast contain 6 characters.");
		} else if (passwordValue.length > 20) {
			setPasswordError("Pasasword must atmost contain 20 characters.");
		} else if (!(lowerExpression.test(passwordValue)) || !(upperExpression.test(passwordValue)) || !(numberExpression.test(passwordValue))) {
			setPasswordError("Password must contain atleast one lower and upper case characters, also on number.");
		} else if (!(lowerExpression.test(passwordValue))) {
			setPasswordError("Password must contain atleast one lower case characters.");
		} else if (!(upperExpression.test(passwordValue))) {
			setPasswordError("Password must contain atleast one upper case characters.");
		} else if (!(numberExpression.test(passwordValue))) {
			setPasswordError("Password must contain atleast one number.");
		} else if ((sameCharacterExp.test(passwordValue))) {
			var textVal = passwordValue.match(sameCharacterExp);
			textVal = textVal.join("");
			setPasswordError("Cannot repeat three same character with sequence." + "[" + textVal.substring(0, 3) + "]");
		} else {
			setPasswordError("");
		}
	}

	return (

		<form className="">
			<div className="isolate bg-white px-6 py-8 sm:py-8 lg:px-8">

				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Password Task</h2>
				</div>

				<div className="border-b border-gray-900/10 pb-12" style={{ paddingLeft: 50 }}>


					<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
						<div className="sm:col-span-2">
							<label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">Password</label>
							<div className="mt-2.5">
								<input type="text" name="password" id="password" value={password} onChange={changePassword} ref={passwordRef} onFocus={e => setPasswordFocus(true)} onBlur={e => setPasswordFocus(false)} autoComplete="password" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
								<p className="mt-1 text-sm leading-8 text-red-600">
									{
										(onload
											&&
											passwordFocus)
										&&
										<>
											{passwordHint}
										</>
									}
								</p>
								<p className="mt-1 text-sm leading-8 text-red-600">
									{
										(onload
											&&
											!passwordFocus)
										&&
										<>
											{passwordError}
										</>
									}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>


		</form>
	)


}
