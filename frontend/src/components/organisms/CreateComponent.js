import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import Button from 'components/atoms/Button';
import inputCss from 'components/atoms/inputCss';
import Heading from 'components/atoms/Heading';
import ButtonIcon from 'components/atoms/ButtonIcon';
import { addComponent as addComponentAction } from 'reduxFiles/actions/menuActions';
import shopImg from 'assets/icons/shop.svg';

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
  height: 330px;
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

class CreateComponents extends Component {
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

  render({ addComponent, centralId } = this.props) {
    return (
      <div>
        <ButtonIcon
          className={this.state.modalIsOpen ? 'active' : ''}
          onClick={this.openModal}
          icon={shopImg}
          alt="Add Central Employee icon"
        />
        <StyledModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={overalyCss}
          central={centralId}
        >
          <Formik
            initialValues={{ name: '', cost: '' }}
            onSubmit={({ name, cost }) => {
              addComponent(name, cost, centralId);
            }}
          >
            {({ isSubmitting }) => (
              <StyledForm>
                <StyledHeading>Add Component</StyledHeading>
                <StyledInput type="text" name="name" placeholder="Component Name" />
                <StyledInput type="number" step="0.01" name="cost" placeholder="Cost" />
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
  addComponent: (name, cost, centralId) => dispatch(addComponentAction(name, cost, centralId)),
});

export default connect(null, mapDispatchToProps)(CreateComponents);
