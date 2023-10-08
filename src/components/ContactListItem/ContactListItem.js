import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { ContactsText, DeleteBtn } from './ContactListItem.styled';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ContactsText>{contact.name}</ContactsText>
      <ContactsText>{contact.number}</ContactsText>
      <DeleteBtn onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </DeleteBtn>
    </>
  );
};
