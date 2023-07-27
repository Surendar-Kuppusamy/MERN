'use client'
import Image from 'next/image'
import { useState, useRef } from 'react'

export default function Home() {

  const[partisionNum, setPartisionNum] = useState('');
  const[partisionArr, setPartisionArr] = useState([]);
  const[partisionRes, setPartisionRes] = useState('');

  const rewritePartision = (event) => {
    setPartisionNum(event.target.value);
    partisionNumber(event.target.value);

  }

  function partisionNumber(value) {
    if(parseInt(value) > 0) {
      value = value.toString();
      const partArr = value.split("");
      const numArr = partArr.map(p => parseInt(p));
      console.log(numArr);
      setPartisionRes('The output value is '+findPartisionResult(numArr, numArr.length));
    } else {
      setPartisionRes("The output value is 0");
    }
  }

  function onlyNumberKey(evt) {
    console.log(evt.keyCode);
    var key = evt.key;

    if (!/[0-9]/.test(evt.key) && (evt.keyCode != 8)) {
      evt.preventDefault();
    }

    
  }

  function calculate(arr, i, calculatedVal, arrSum) {
		if(i == 0) {
			return Math.abs((arrSum-calculatedVal) - calculatedVal);
		}
		return Math.min(calculate(arr, i - 1, calculatedVal + arr[i-1], arrSum), calculate(arr, i-1, calculatedVal, arrSum));
	}
	function findPartisionResult(arr, n) {
		let arrSum = 0;
		for (let i = 0; i < n; i++) {
			arrSum += arr[i];
		}
		return calculate(arr, n, 0, arrSum);
	}
  

  return (

		<form className="">
			<div className="isolate bg-white px-6 py-8 sm:py-8 lg:px-8">

				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Partision Task</h2>
				</div>

				<div className="border-b border-gray-900/10 pb-12" style={{ paddingLeft: 50 }}>


					<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
						<div className="sm:col-span-2">
							<label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">Enter array numbers(only number)</label>
							<div className="mt-2.5">
								<input type="text" id="partisionNum" name="partisionNum" value={partisionNum} onKeyDown={onlyNumberKey} onChange={rewritePartision} autoComplete="password" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
								<p className="mt-1 text-sm leading-8 text-green-600">
									{
										partisionRes
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
