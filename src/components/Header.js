
import Button from './Button'
const Header = ({ title, onAdd, showAdd }) => {
  
 return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color ={showAdd ? 'red' : 'green'} text={showAdd ? 'x' : '+'} onClick={onAdd} />
        
    </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

// Header.propTypes = {
//     title: PropTypes.string.isRequired
// }


// CSS in JS
// const headingStyle = {
//     color: 'blue', 
//     backgroundColor: 'orange'
// }

export default Header