import styled from 'styled-components';
import img4 from '../../img/img4.png'

const PortfolioWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
`
const Img = styled.img`
    width: 250px;
    height: 195px;
`
const portfolio = () => {
    return ( 
        <>
        
        <PortfolioWrapper>
            <Img src={img4} alt="" />    
                {/* <h1>
                    Проекты
                </h1> */}

        </PortfolioWrapper>
        </>
     );
}
 
export default portfolio;