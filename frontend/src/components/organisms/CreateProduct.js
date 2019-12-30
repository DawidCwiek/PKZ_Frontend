import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Select from 'react-select';
import styled from 'styled-components';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import Button from 'components/atoms/Button';
import inputCss from 'components/atoms/inputCss';
import Heading from 'components/atoms/Heading';
import ButtonIcon from 'components/atoms/ButtonIcon';
import FileUpload from 'components/atoms/FileUpload';
import { addProduct as addProductAction } from 'reduxFiles/actions/menuActions';
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

class CreateProduct extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      selectedOption: [],
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  render({ addProduct, centralId, components, selectedOption } = this.props) {
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
            initialValues={{ name: '', price: '', image: '' }}
            onSubmit={({ name, price, image }) => {
              const componentsId = this.state.selectedOption.map(e => e.value);
              addProduct(name, price, image, componentsId, centralId);
            }}
          >
            {({ isSubmitting }) => (
              <StyledForm>
                <StyledHeading>Add Product</StyledHeading>
                <StyledInput type="text" name="name" placeholder="Component Name" />
                <StyledInput type="number" step="0.01" name="price" placeholder="Price" />
                <Field name="image" component={FileUpload} />
                <Select
                  placeholder="Select Components"
                  styles={customStyles}
                  closeMenuOnSelect={false}
                  isMulti
                  value={selectedOption}
                  onChange={this.handleChange}
                  options={components.map(e => ({ value: e.id, label: e.name }))}
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
  const { components } = state.root;
  return { components };
};

const mapDispatchToProps = dispatch => ({
  addProduct: (name, price, image, componentsId, centralId) =>
    dispatch(addProductAction(name, price, image, componentsId, centralId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);
