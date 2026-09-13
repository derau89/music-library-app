import styled from 'styled-components';

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.headerBackground};
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.title};
`;

const SearchForm = styled.form`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
  }
    button {
      padding: 10px 20px;
      font-size: 1rem;
      border: none;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.title};
      color: white;
      cursor: pointer;
    }
`;

export { Header, Title, SearchForm };

