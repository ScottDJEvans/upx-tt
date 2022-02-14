import PropTypes from 'prop-types'
import * as S from './styles'

const Title = ({ text }) => {
    return(
        <S.Title className='Title'>{text}</S.Title>
    )
}

export default Title

Title.propTypes = {
    text: PropTypes.string.isRequired
}
