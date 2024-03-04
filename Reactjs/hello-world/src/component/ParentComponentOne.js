import React, { useState, useCallback } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

// useCallback Hook - https://www.youtube.com/watch?v=IL82CzlaCys 
/*
    useCallback is a hook that will return a memoized version of the callback function that only changes
    if one of the dependencies has changed.

    It is useful when passing callbacks to optimized child components that rely on reference equality
    to prevent unnecessary re-renders.
*/
//Please check also Count.js,Button.js,Title.js


function ParentComponentOne() {
	const [age, setAge] = useState(25)
	const [salary, setSalary] = useState(50000)

	const incrementAge = useCallback(() => {
		setAge(age + 1)
	}, [age])

	const incrementSalary = useCallback(() => {
		setSalary(salary + 1000)
	}, [salary])

	return (
		<div>
			<Title />
			<Count text="Age" count={age} />
			<Button handleClick={incrementAge}>Increment Age</Button>
			<Count text="Salary" count={salary} />
			<Button handleClick={incrementSalary}>Increment Salary</Button>
		</div>
	)
}

export default ParentComponentOne