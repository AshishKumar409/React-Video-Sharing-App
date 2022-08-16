import styled from "styled-components"
import MyLogo from '../img/Logo.png'
import {IconsAndNames1,IconsAndNames2,IconsAndNames3,IconsAndNames4} from '../icons/icons.jsx'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Container = styled.div`
    flex:1;
    background-color:#202020;
    height:100vh;
    color:white;
    font-size:14px;
/*     overflow:hidden;

   :hover{
     overflow:auto;
   } */
   
  `

const Wrapper = styled.div`
    padding:18px 26px;
    
  `

const Logo = styled.div`
   display:flex;
   align-items:center;
   gap:5px;
  font-weight:bold;
  margin-bottom:25px;
  `

const Img = styled.img` 
  height:25px;
  `

const Item = styled.div`
   display:flex;
   align-items:center;
  gap:20px;
  cursor:pointer;
  padding:7.5px 0px
  
  `

const Hr = styled.hr`
  margin:15px 0px;
  border:0.5px solid #373737;
  `

const Login = styled.div``
const Button = styled.button`
  display:flex;
  align-items:center;
  gap:2px;
  padding:5px 15px;
  background-color:transparent;
  border:1px solid #3ea6ff;
  color:#3ea6ff;
  border-radius:3px;
  font-weight:500;
  margin-top:10px;
  cursor:pointer;
  `

export const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={MyLogo} />
          YouTube
        </Logo>

        {
          IconsAndNames1.map((obj)=>{
            return <Item key={obj.name}>
              {obj.icon}
              {obj.name}
            </Item>
          })
        }
        <Hr/>
        {
          IconsAndNames2.map((obj)=>{
            return <Item key={obj.name}>
              {obj.icon}
              {obj.name}
            </Item>
          })
        }
        <Hr/>
        <Login>
           Sign in to like videos, comment, and subscribe
          <Button> <AccountCircleOutlinedIcon/>SIGN IN</Button>
        </Login>
        <Hr/>
        {
          IconsAndNames3.map((obj)=>{
            return <Item key={obj.name}>
              {obj.icon}
              {obj.name}
            </Item>
          })
        }
        <Hr/>
        {
          IconsAndNames4.map((obj)=>{
            return <Item key={obj.name}>
              {obj.icon}
              {obj.name}
            </Item>
          })
        }

        
      </Wrapper>
    </Container>)
}