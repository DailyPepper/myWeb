import styled from 'styled-components';
import img2 from '../../img/img2.png'

const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 100px 100px 100px 100px;
    flex-direction: column;
`
const MainBlock = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 30px;
    padding-left: 75px;

    .img{
        /* height: 200px; */
        transform: rotate(8deg);
    }
`
const Block = styled.div`
    display: flex;
    flex-direction: column;
`
const main = () => {
    return ( 
        <>
        <MainWrapper>
        <MainBlock>
            <Block>
            <h1 className="">
                Кудинов Данил
            </h1>
            <p>
                Frontend and Backend developer
            </p>
            </Block>
            <img className='img' src={img2} alt="" />
        </MainBlock>
        
        </MainWrapper>
        </>
     );
}
 
export default main;
