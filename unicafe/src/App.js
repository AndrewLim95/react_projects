import { useState } from 'react'

const Statistics = ({total,positive,good,neutral,bad}) => {
  if (total === 0) {
    return (
      <div>
        <p>No reviews.</p>
      </div>
    )
  }
  return (
    <div>
      <p>Total Reviews: {total}</p>
      <p>Positive Reviews: {positive}%</p>
      <p>good: {good} </p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({good: 0, neutral: 0, bad: 0 })

  const handleGoodClick = () => {
    const newClicks = { 
      good: clicks.good + 1, 
      neutral: clicks.neutral,
      bad: clicks.bad
    }
    setClicks(newClicks)
  }
  const handleNeutralClick = () => {
    const newClicks = { 
      good: clicks.good, 
      neutral: clicks.neutral + 1,
      bad: clicks.bad
    }
    setClicks(newClicks)
  }
  const handleBadClick = () => {
    const newClicks = { 
      good: clicks.good, 
      neutral: clicks.neutral,
      bad: clicks.bad + 1
    }
    setClicks(newClicks)
  }
  const totalClicks = clicks.good + clicks.neutral + clicks.bad
  const positiveClicks = (clicks.good/totalClicks)*100

  return (
    <div>
      <p> Kindly give us a rating! </p>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <Statistics total={totalClicks}
      positive={positiveClicks}
      good={clicks.good}
      neutral={clicks.neutral}
      bad={clicks.bad}/>
    </div>

  )
}

export default App