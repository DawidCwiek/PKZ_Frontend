import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Select from 'react-select';
import styled from 'styled-components';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import Button from 'components/atoms/Button';
import inputCss from 'components/atoms/inputCss';
import Heading from 'components/atoms/Heading';
import editIcon from 'assets/icons/edit.svg';
import { addMenu as addMenuAction } from 'reduxFiles/actions/menuActions';

const StyledButton = styled(Button)`
  width: 80px;
  height: 80px;
  font-weight: 300;
  font-size: 4rem;
  &.active {
    color: transparent;
    width: 40px;
    height: 40px;
    display: inline-block;
    margin-right: 10px;
    background-image: url(${editIcon});
    background-repeat: no-repeat;
    background-color: #3cd67c;
    background-position: 50% 50%;
    background-size: 50% 50%;
  }
`;

const StyledLabel = styled.label`
  margin: auto;
  height: 40px;
  width: 280px;
`;

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
  margin: 10px;
`;

const StyledModal = styled(Modal)`
  width: 400px;
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

const customStyles = {
  control: () => ({
    width: 300,
  }),
};

class CreateMenu extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      selectedOption: [],
      options: [],
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.updateState();
    }
  }

  updateState = () => {
    if (typeof this.props.element !== 'undefined') {
      this.setState({
        selectedOption: this.props.element.products.map(e => ({ value: e.id, label: e.name })),
      });
    }
    this.setState({
      options: this.props.products.map(e => ({ value: e.id, label: e.name })),
    });
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  render({ addMenu, centralId, element } = this.props) {
    return (
      <div>
        <StyledButton onClick={this.openModal} className={element ? 'active' : null}>
          M
        </StyledButton>
        <StyledModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={overalyCss}
          central={centralId}
        >
          <Formik
            initialValues={{
              id: element ? element.id : '',
              name: element ? element.name : '',
              active: element ? element.active : false,
            }}
            onSubmit={({ id, name, active }) => {
              let productsId = [];
              if (this.state.selectedOption !== null) {
                productsId = this.state.selectedOption.map(e => e.value);
              }
              addMenu(id, name, active, productsId, centralId);
            }}
          >
            {({ isSubmitting }) => (
              <StyledForm>
                <StyledHeading>Add Menu</StyledHeading>
                <StyledInput type="text" name="name" placeholder="Menu Name" />
                <StyledLabel>
                  active
                  <Field type="checkbox" name="active" />
                </StyledLabel>
                <Select
                  placeholder="Select Products"
                  styles={customStyles}
                  closeMenuOnSelect={false}
                  isMulti
                  value={this.state.selectedOption}
                  onChange={this.handleChange}
                  options={this.state.options}
                />
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

const mapStateToProps = state => {
  const { products } = state.root;
  return { products };
};

const mapDispatchToProps = dispatch => ({
  addMenu: (id, name, active, productsId, centralId) =>
    dispatch(addMenuAction(id, name, active, productsId, centralId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateMenu);
