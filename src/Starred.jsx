import React from 'react'
import './Starred.css';
function StarRating({count, value, 
  inactiveColor='#ddd',
  size=24,
  activeColor='#f00', onChange, onToggle}) {

const stars = Array.from({length: count}, () => '🟊')

const handleChange = (value) => {
  onChange(value + 1);
}

return (
  <div>
    {stars.map((s, index) => {
      let style = inactiveColor;
      if (index < value) {
        style=activeColor;
      }
      return (
        <span className={"star"}  
          key={index}
          style={{color: style, width:size, height:size, fontSize: size,}}
          onClick={()=>handleChange(index)}>{s}</span>
      )
    })}
  </div>
)
}


function StarRatingDemo() {

const [rating, setRating] = React.useState(0);

const handleChange = (value) => {
  setRating(value);
}


return (
    <div className="container-starred">
    <StarRating 
      count={1}
      size={40}
      value={rating}
      activeColor ={'yellow'}
      inactiveColor={'#ddd'}
      onChange={handleChange}  />
    </div>
  )
}

export default StarRatingDemo;
