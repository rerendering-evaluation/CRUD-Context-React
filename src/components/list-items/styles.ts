import { memo } from "react";
import styled from "styled-components";
const Container = memo(styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    > button {
        margin-left: auto;
        margin-bottom: 15px;
    }
`);
export const Styles = {
  Container
};