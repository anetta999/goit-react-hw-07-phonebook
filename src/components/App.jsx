import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { StyledSection, SectionTitle, ContactsTitle } from './Section.styled';
import { GlobalStyle } from './Globalstyle';
import { Container } from './Container';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <StyledSection>
        <Container>
          {isLoading && !error && <p>LOADING...</p>}
          {error && <p>Something went wrong, please try reloading the page</p>}
          <SectionTitle>Phonebook</SectionTitle>
          <ContactForm />
        </Container>
      </StyledSection>

      <StyledSection>
        <Container>
          <ContactsTitle>Contacts</ContactsTitle>
          <ContactFilter />
          <ContactList />
        </Container>
      </StyledSection>
      <GlobalStyle />
    </>
  );
};
