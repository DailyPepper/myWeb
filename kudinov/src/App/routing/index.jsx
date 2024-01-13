import { Route, Routes } from 'react-router-dom';

const mainRouter = () => {
    return ( 
        <Routes>
            <Route path="about" element={<about/>}></Route>
            <Route path="contacts" element={<contacts/>}></Route>
            <Route path="main" element={<main/>}></Route>
            <Route path="portfolio" element={<portfolio/>}></Route>
        </Routes>
     );
}
 
export default mainRouter;