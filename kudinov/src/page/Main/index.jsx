import styled from 'styled-components';
import img2 from '../../img/img2.png'

const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 100px 110px 40px 110px;
    flex-direction: column;
    
    @media(max-width: 770px){
        display: flex;
        flex-wrap: wrap;
        width: 710px;
        padding: 0px 80px;
    }

`
const MainBlock = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 30px;
    padding-left: 75px;
    @media(max-width: 770px){
        display: flex;
        flex-wrap: nowrap;
    }
    .img{
        /* height: 200px; */    
        transform: rotate(8deg);

        @media(max-width: 770px){
        display: flex;
        justify-content: center;
        padding: 200px 110px 40px 110px;
        flex-direction: column;
        }
    }
`
const Block = styled.div`
    font-family: 'Roboto', sans-serif;

    @media(max-width: 770px ){
        font-family: 'Roboto',sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
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
    padding: 0px 175px;
    @media(max-width: 770px) {
        font-size: 30px;
        justify-content: center;
        padding: 0px;
    }
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
