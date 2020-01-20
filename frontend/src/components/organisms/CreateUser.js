import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import Button from 'components/atoms/Button';
import inputCss from 'components/atoms/inputCss';
import Heading from 'components/atoms/Heading';
import ButtonIcon from 'components/atoms/ButtonIcon';
import { addCentralUser as addCentralUserAction } from 'reduxFiles/actions/centralActions';
import employeImg from 'assets/icons/employees.svg';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Field)`
  ${inputCss}
  margin: 0 0 20px 0;
  height: 40px;
  width: 300px;
`;

const StyledHeading = styled(Heading)`
  margin: 30px 0 20px 0;
`;

const StyledCloseButton = styled(Button)`
  background-color: #e6e6e6;
  width: 100px;
  height: 47px;
  margin: 10px 0 0 0;
`;

const StyledModal = styled(Modal)`
  width: 400px;
  height: ${({ central }) => (central ? '450px' : '510px')};
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.9);
`;

const overalyCss = {
  overlay: {
    backgroundColor: 'rgba(255, 216, 41, 0.85)',
  },
};

class CreateUser extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    Modal.setAppElement('body');
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render({ addCentralUser, centralId, storeId } = this.props) {
    return (
      <div>
        <ButtonIcon
          className={this.state.modalIsOpen ? 'active' : ''}
          onClick={this.openModal}
          icon={employeImg}
          alt="Add Central Employee icon"
        />
        <StyledModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={overalyCss}
          central={centralId}
        >
          <Formik
            initialValues={{ email: '', name: '', surname: '', phoneNumber: '', manager: '' }}
            onSubmit={({ email, name, surname, phoneNumber, manager }) => {
              addCentralUser(email, name, surname, phoneNumber, centralId, storeId, manager);
            }}
          >
            {({ isSubmitting }) => (
              <StyledForm>
                <StyledHeading>Add a {centralId ? 'central' : 'story'} employee</StyledHeading>
                <StyledInput type="email" name="email" placeholder="Email" />
                <StyledInput type="text" name="name" placeholder="Name" />
                <StyledInput type="text" name="surname" placeholder="Surname" />
                <StyledInput type="text" name="phoneNumber" placeholder="Phone Number" />
                {storeId ? (
                  <StyledInput component="select" id="manager" name="manager" multiple={false}>
                    <option value="false">Worker</option>
                    <option value="true">Manager</option>
                  </StyledInput>
                ) : null}

                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
                <StyledCloseButton onClick={this.closeModal}>close</StyledCloseButton>
              </StyledForm>
            )}
          </Formik>
        </StyledModal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addCentralUser: (email, name, surname, phoneNumber, centralId, storeId, manager) =>
    dispatch(addCentralUserAction(email, name, surname, phoneNumber, centralId, storeId, manager)),
});

export default connect(null, mapDispatchToProps)(CreateUser);
