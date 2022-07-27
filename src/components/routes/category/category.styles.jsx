import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 40px;
`;

export const CategoryTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
  text-transform: uppercase;
  text-align: center;
`;

// .category-container{
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     column-gap: 20px;
//     row-gap: 40px;
// }

// .category-title {
//     font-size: 28px;
//     margin-bottom: 25px;
//     text-transform: uppercase;
//     text-align: center;
//   }
