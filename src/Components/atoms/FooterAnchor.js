import React from "react";
import styled from "styled-components";

const FooterAnchor = ({ item }) => (
  <Anchor borderRight={item.borderRight} href="#">
    {item.title}
  </Anchor>
);

export default FooterAnchor;

const Anchor = styled.a`
  color: rgb(76, 88, 97);
  padding: 0 15px;
  border-right: ${(props) => (props.borderRight ? "1px solid rgb(76, 88, 97)" : "")};
`;
