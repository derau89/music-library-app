import styled from 'styled-components';

const SongCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({  theme, $favorite }) => $favorite ? theme.colors.cardFavorite : theme.colors.card};

 border-left: 6px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 12px;

  padding: 20px;
  margin: 15px auto;

  box-shadow: 0 5px 15px rgba(0,0,0,.4);

  transition: .3s;

  &:hover {
    background-color: ${({ theme, $favorite }) => $favorite ? theme.colors.cardFavoriteHover : theme.colors.cardHover};
    transform: translateY(-3px);
  }


  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 576px) {
    padding: 15px;
  }
`;



const SongInfo = styled.div`
text-align: left;

h5 {
    color: ${({ theme }) => theme.colors.songTitle};
    font-size: 22px;
    margin: 0;
}

p {
    color: ${({ theme }) => theme.colors.textMuted};
    margin: 6px 0;
}

small {
color: ${({ theme }) => theme.colors.textSubtle};
}

@media (max-width: 576px) {
 font-size: 18px;
}
  @media (max-width: 768px) {
  width: 100%;
  }

`;

const Playbtn = styled.button`
width: 45px;
  height: 45px;
  border-radius: 50%;

  @media (max-width: 576px) {
    width: 38px;
    height: 38px;
  }
`; 


export { SongCard, SongInfo, Playbtn };


