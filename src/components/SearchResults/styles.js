import styled from 'styled-components';

const SearchResults = styled.div`
  max-width: 700px;
  margin: 40px auto 0;
`;

const SearchItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  
`;

const BtnDanger = styled.button`
  background-color: ${({ theme }) => theme.colors.danger};
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.dangerHover};
  }
`;

export { SearchResults, SearchItem, BtnDanger };