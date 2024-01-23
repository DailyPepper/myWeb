import styled from 'styled-components';
import img4 from '../../img/img4.jpg'

const PortfolioWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 100px;
`
const portfolio = () => {
    return ( 
        <>
        <img src={img4} alt="" />
        <PortfolioWrapper>
            
            <h1>
                Проекты
            </h1>
        </PortfolioWrapper>
        </>
     );
}
 
export default portfolio;