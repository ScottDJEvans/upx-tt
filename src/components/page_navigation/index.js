import PropTypes from 'prop-types'
import LayoutIcon from '../../assets/icons/layout-medium-tile-outline.svg'
import * as S from './styles'
import Button from "../common/button";

const PageNavigation = ({ currentPageTitle, currentHomePage }) => {
    const renderTitleSection = () => {
        return(
            <>
                <S.LayoutIconContainer>
                    <S.LayoutIcon src={LayoutIcon} alt='layout icon' />
                </S.LayoutIconContainer>
                <S.TitleContainer>
                    <S.HomePageTitle>{currentHomePage}</S.HomePageTitle>
                    <S.Seperator>/</S.Seperator>
                    <S.CurrentPageTitle>{currentPageTitle}</S.CurrentPageTitle>
                </S.TitleContainer>
            </>
        )
    }
    const renderFinalizeChangesSection = () => {
        return(
            <S.ButtonContainer>
                <Button size='large' color='tertiary' variant='text'>
                    Discard changes
                </Button>
                <Button size='small' color='secondary' variant='contained'>
                    Save changes
                </Button>
            </S.ButtonContainer>
        )
    }
    return (
        <S.Container>
            { renderTitleSection() }
            { renderFinalizeChangesSection() }
        </S.Container>
    )
}

export default PageNavigation

PageNavigation.defaultProps = {
    hasChanges: false
}

PageNavigation.propTypes = {
    currentPageTitle: PropTypes.string,
    currentHomePage: PropTypes.string,
    hasChanges: PropTypes.bool
}