import React from 'react'

function Result({ result, openPopup }) {
	return (
		<div className="result" onClick={() => openPopup(result.openpopup_url)}>
			<h1>Result</h1>
			<img src={result.Poster} />
			<h3>{result.Title}</h3>
		</div>
	)
}

export default Result
