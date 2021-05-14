import './styles.css'

export const Button = ({text, Click, disabled}) => 
(
    <button 
    className='button'
    onClick={Click}
    disabled={disabled}
    >
      {text}
    </button>
   
)