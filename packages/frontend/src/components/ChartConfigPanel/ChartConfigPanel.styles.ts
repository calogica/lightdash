import { FormGroup } from '@blueprintjs/core';
import styled from 'styled-components';

export const InputWrapper = styled(FormGroup)`
    & label.bp3-label {
        font-weight: 500;
        display: inline-flex;
        gap: 0.214em;
    }
`;

export const FieldRow = styled.div`
    display: flex;
    margin-bottom: 10px;
    align-items: flex-start;
`;

export const FieldRowInputs = styled.div`
    display: flex;
    flex: 1;
    gap: 10px;
`;

export const Wrapper = styled.div`
    max-width: 28.571em;
    min-width: 25em;
    padding: 1.429em;
`;

export const ColorButton = styled.button`
    height: 30px;
    width: 30px;
    cursor: pointer;
    border: none;
    background-color: transparent;

    box-sizing: border-box;
    box-shadow: 0 0 0 0 rgb(19 124 189 / 0%), 0 0 0 0 rgb(19 124 189 / 0%),
        inset 0 0 0 1px rgb(16 22 26 / 15%), inset 0 1px 1px rgb(16 22 26 / 20%);
    border-radius: 3px;
`;

export const FieldsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1.286em;
    align-items: center;
`;

export const GridLabel = styled.span`
    font-size: 14px;
    line-height: 1.286em;
    font-weight: 600;
`;

export const GridFieldLabel = styled.span`
    display: inline-flex;
    gap: 0.357em;

    & .bp3-icon {
        margin: 2px;
    }
`;
