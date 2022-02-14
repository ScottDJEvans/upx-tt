import * as S from './styles'
import PolygonIcon from '../../../assets/icons/Polygon.svg'

const Tooltip = ({ description }) => {
    if (!description) return null
    return(
        <S.TooltipContainer>
            <S.TooltipIcon>
                <img src={PolygonIcon} />
            </S.TooltipIcon>
             <S.TooltipDescription>
                 {description}
             </S.TooltipDescription>
        </S.TooltipContainer>
    )
}

export default Tooltip
