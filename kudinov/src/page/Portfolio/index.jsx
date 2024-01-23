import styled from 'styled-components';


const PortfolioWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 100px;
`
const portfolio = () => {
    return ( 
        <>
        <PortfolioWrapper>
            <h1>
                Проекты
            </h1>
        </PortfolioWrapper>
        </>
     );
}
 
export default portfolio;