import PropTypes from 'prop-types'
import * as S from './styles'

const Subtitle = ({ text }) => {
    return(
        <S.Subtitle className='subheading'>{text}</S.Subtitle>
    )
}

export default Subtitle

Subtitle.propTypes = {
    text: PropTypes.string.isRequired
}
