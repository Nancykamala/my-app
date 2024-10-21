import { Link } from "@tanstack/react-router";
import styled from "styled-components";

export const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
`;

export const Nav = styled.nav`
  background-color: #f8f9fa;
  padding: 1rem;
`;

export const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

export const NavItem = styled.li`
  margin-right: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 18px;

  &.active {
    font-weight: bold;
    color: blue;
  }

  &:hover {
    color: darkblue;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProductName = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  color: #666;
`;

export const ProductLink = styled(Link)`
  text-decoration: none;
  color: #333;
  display: block;
  padding: 10px;
  font-weight: bold;

  &:hover {
    background-color: #f0f0f0;
  }
`;
