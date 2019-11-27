import styled from 'styled-components';

export const Content = styled.div`
  max-width: 800px;
  margin-top: 20px;
  border-radius: 8px;
  background: white;
  padding: 20px;
  color: #3e3e3e;
  line-height: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`
export const Container = styled.div`
  background: #f2f2f2;
  padding: 0 30;
  font-size:14px;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
 
  img {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  section{
    text-align:left;
    padding-left:10%;
    padding-right:10%;
    font-size:20px;

    border-radius: 20px;
    background: #eeeeee;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 15px;
  }

  a {
    font-size:30px;
  }

  p {
    margin-top:10px;
    margin-bottom:10px;
  }
`;

