'use client'
import Image from 'next/image'
import { useState, useRef } from 'react'

export default function Home() {

  const[partisionNum, setPartisionNum] = useState('');
  
  

  return (

		<form className="">
			<div className="isolate bg-white px-6 py-8 sm:py-8 lg:px-8">

				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Print Text</h2>
				</div>

				<div className="border-b border-gray-900/10 pb-12" style={{ paddingLeft: 50 }}>


					<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
						<div className="sm:col-span-2">
							<label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">Result Print Text</label>
							<div className="mt-2.5">
								<input type="text" id="partisionNum" name="partisionNum" value={partisionNum} onChange={e => setPartisionNum(e.target.value)} autoComplete="password" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
							</div>

							{
								partisionNum
								&&
								<h6 className="text-3ml tracking-tight text-gray-900 sm:text-4xl text-center mt-5">
									{
										partisionNum
									}
								</h6>
							}
						</div>
					</div>
				</div>
			</div>


		</form>
	)
}
