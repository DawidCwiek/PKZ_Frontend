import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Heading from 'components/atoms/Heading';
import { REMOTE_HOST } from 'reduxFiles/configure';
import ButtonIcon from 'components/atoms/ButtonIcon';
import deleteIcon from 'assets/icons/delete.svg';
import { deleteObject as deleteObjectAction } from 'reduxFiles/actions/menuActions';

const StyledButtonIcon = styled(ButtonIcon)`
  width: 40px;
  height: 40px;
  background-color: #f75e65;
  margin: auto 0 auto auto;
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
            <StyledButtonIcon
              icon={deleteIcon}
              onClick={() => deleteObject(el.id, el.central_id, title.toLocaleLowerCase())}
            />
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
