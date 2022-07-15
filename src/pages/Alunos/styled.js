import styled from 'styled-components';

export const AlunoContainer = styled.div`
margin-top: 20px;
div{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
}
div + div{
    border-top: 1px solid #eee;
}
`;
export const ProfilePicture = styled.div`
  img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;