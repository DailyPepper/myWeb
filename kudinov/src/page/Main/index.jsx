import styled from 'styled-components';
import img2 from '../../img/img2.png'

const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 100px 110px 40px 110px;
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
    font-family: 'Roboto', sans-serif;
`
const Head = styled.h1`
    font-family: 'Roboto';
    font-size: 65px;
    font-style: normal;
    font-kerning: none;
    color: #ff8437;
`
const Text = styled.p`
    font-size: 35px;
    display: flex;
    padding: 0px 180px;
`
const Prof = styled.p`
    font-size: xx-large;
    /* font-family: 'Roboto'; */
`
const main = () => {
    return ( 
        <>
        <MainWrapper>
        <MainBlock>
            <Block>
            <Head>
                Кудинов Данил
            </Head>
            <Prof>
                Full-stack developer
            </Prof>
            </Block>
            <div>
                <img className='img' src={img2} alt="" />   
            </div>
        </MainBlock>
            <Text>
                Всем Привет! Я занимаюсь разработкой веб приложений
            </Text>  
        </MainWrapper>
        </>
     );
}
 
export default main;
