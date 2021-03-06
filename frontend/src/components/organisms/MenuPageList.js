import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Heading from 'components/atoms/Heading';
import { REMOTE_HOST } from 'reduxFiles/configure';
import ButtonIcon from 'components/atoms/ButtonIcon';
import deleteIcon from 'assets/icons/delete.svg';
import { deleteObject as deleteObjectAction } from 'reduxFiles/actions/menuActions';
import CreateMenu from 'components/organisms/CreateMenu';
import CreateProduct from 'components/organisms/CreateProduct';
import CreateComponent from 'components/organisms/CreateComponent';

const StyledPrice = styled.div`
  margin: auto 10px;
  color: #787878;
`;

const StyledButtonDiv = styled.div`
  margin: auto 0 auto auto;
  display: flex;
  text-align: center;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  width: 40px;
  height: 40px;
  background-color: #f75e65;
  display: inline-block;
`;

const Img = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 10px;
  background-color: #e3e3e3;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Wrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledHeading = styled(Heading)`
  margin: 10px 0 0 10px;
`;

const StyledHeadingImg = styled(Heading)`
  font-size: 1.5rem;
  margin: auto 0;
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
  flex-direction: row;

  :nth-child(odd) {
    background-color: #fcfcfc;
  }
`;

const submitDelete = (id, centralId, title, deleteObject) => {
  confirmAlert({
    title: 'Delete?',
    message: `Are you sure to delete this object?`,
    buttons: [
      {
        label: 'Yes',
        onClick: () => deleteObject(id, centralId, title.toLocaleLowerCase()),
      },
      {
        label: 'No',
      },
    ],
  });
};

const MenuPageList = ({ data = [], title = '', deleteObject }) => {
  if (data.length < 1) {
    return (
      <Wrapper>
        <StyledHeading>{title}</StyledHeading>
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
      <StyledHeading>{title}</StyledHeading>
      <ColectionWrapper>
        {data.map(el => (
          <Item key={el.name + el.id}>
            {title === 'Products' ? <Img background={REMOTE_HOST + el.image_url} /> : null}
            <StyledHeadingImg>{el.name}</StyledHeadingImg>
            {title === 'Menus' && el.active ? <StyledPrice> (active)</StyledPrice> : null}
            {title === 'Products' && el.price ? <StyledPrice>({el.price} zł)</StyledPrice> : null}
            {title === 'Components' && el.cost ? <StyledPrice>({el.cost} zł)</StyledPrice> : null}
            <StyledButtonDiv>
              {title === 'Menus' ? <CreateMenu centralId={el.central_id} element={el} /> : null}
              {title === 'Products' ? (
                <CreateProduct centralId={el.central_id} element={el} />
              ) : null}
              {title === 'Components' ? (
                <CreateComponent centralId={el.central_id} element={el} />
              ) : null}
              <StyledButtonIcon
                icon={deleteIcon}
                onClick={() => submitDelete(el.id, el.central_id, title, deleteObject)}
              />
            </StyledButtonDiv>
          </Item>
        ))}
      </ColectionWrapper>
    </Wrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteObject: (objectId, centralId, type) =>
    dispatch(deleteObjectAction(objectId, centralId, type)),
});

export default connect(null, mapDispatchToProps)(MenuPageList);
