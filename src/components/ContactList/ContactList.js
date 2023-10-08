import { ContactListItem } from 'components/ContactListItem/ContactListItem';
// import { StyledNotification } from 'components/Notification.styled';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { ContactsList, ContactsListItem } from './ContactList.styled';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <>
      {filteredContacts.length > 0 && (
        <ContactsList>
          {filteredContacts.map(contact => (
            <ContactsListItem key={contact.id}>
              <ContactListItem contact={contact} />
            </ContactsListItem>
          ))}
        </ContactsList>
      )}
    </>
  );
};
