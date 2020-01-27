import React from 'react';
import styled from 'styled-components';
import { confirmAlert } from 'react-confirm-alert';
import Heading from 'components/atoms/Heading';
import ButtonIcon from 'components/atoms/ButtonIcon';
import deleteIcon from 'assets/icons/delete.svg';
import { connect } from 'react-redux';
import { deleteEmployee as deleteEmployeeAction } from 'reduxFiles/actions/userActions';

const Wrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  width: 40px;
  height: 40px;
  background-color: #f75e65;
  display: inline-block;
`;

const StyledTitle = styled(Heading)`
  margin: 15px auto;
`;

const StyledHeading = styled(Heading)`
  font-size: 1.5rem;
  text-transform: uppercase;
  flex: 20%;
`;

const StyledEmailAndPhoneNumber = styled.div`
  padding: 0 100px;
  margin: auto 10px;
  color: #787878;
  flex: 50%;
`;

const ColectionWrapper = styled.div`
  margin: 5px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`;

const Item = styled.div`
  background-color: #fff;
  line-height: 1.5rem;
  padding: 10px 20px;
  margin: 0;
  border-bottom: 1px solid #e0e0e0;
  display: flex;

  :nth-child(odd) {
    background-color: #fcfcfc;
  }
`;

const submitDelete = (deleteEmployee, id, storeId, centralId) => {
  confirmAlert({
    title: 'Delete?',
    message: `Are you sure to delete this Employee?`,
    buttons: [
      {
        label: 'Yes',
        onClick: () => deleteEmployee(id, storeId, centralId),
      },
      {
        label: 'No',
      },
    ],
  });
};

const EmployeesList = ({ data = [], title = '', deleteEmployee, storeId, centralId }) => {
  if (data.length < 1) {
    return (
      <Wrapper>
        <StyledTitle>{title} Employees</StyledTitle>
        <ColectionWrapper>
          <Item>
            <h3>Nothing to display</h3>
          </Item>
        </ColectionWrapper>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <StyledTitle>{title} Employees</StyledTitle>
      <ColectionWrapper>
        {data.map(el => (
          <Item key={el.name + el.id}>
            <StyledHeading>
              {el.name} {el.surname}
            </StyledHeading>
            <StyledEmailAndPhoneNumber>email: {el.email}</StyledEmailAndPhoneNumber>
            <StyledEmailAndPhoneNumber>phone number: {el.phone_number}</StyledEmailAndPhoneNumber>
            <StyledButtonIcon
              icon={deleteIcon}
              onClick={() => submitDelete(deleteEmployee, el.id, storeId, centralId)}
            />
          </Item>
        ))}
      </ColectionWrapper>
    </Wrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteEmployee: (userId, storeId, centralId) =>
    dispatch(deleteEmployeeAction(userId, storeId, centralId)),
});

export default connect(null, mapDispatchToProps)(EmployeesList);
