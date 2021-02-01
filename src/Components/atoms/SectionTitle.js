import React from "react";
import styled from "styled-components";

const SectionTitle = ({ title }) => <Title>{title}</Title>;

export default SectionTitle;

const Title = styled.h2`
  font-weight: 500;
  line-height: 1.3;
  margin-top: 3px;
`;
