import styled from 'styled-components'
import { Menu } from './components/Menu'
import { Navbar } from './components/Navbar'


const Container = styled.div`
    display:flex
  `

const Main = styled.div`
    flex:7
  `

const Wrapper = styled.div`
  
  `





export default function App() {
  return (
    <Container>
      <Menu />
      <Main>
        <Navbar />
        <Wrapper>
          video cards
        </Wrapper>
      </Main>
    </Container>
  )
}
