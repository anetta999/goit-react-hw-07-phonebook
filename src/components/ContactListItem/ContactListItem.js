import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ContactsText, DeleteBtn } from './ContactListItem.styled';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ContactsText>{contact.name}</ContactsText>
      <ContactsText>{contact.phone}</ContactsText>
      <DeleteBtn onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </DeleteBtn>
    </>
  );
};
