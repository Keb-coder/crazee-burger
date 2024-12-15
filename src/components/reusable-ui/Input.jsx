import styled from "styled-components";

export default function Input({Icon,value, onChange,className,...restProps}) {
    return (
    <InputStyled className ={className} >
      {Icon && Icon}
     <input value={value} onChange={onChange} {...restProps}/>
    </InputStyled>
    );
}

const InputStyled = styled.div`
    .input-with-icon {
        background-color: #fff;
        border-radius: 5px;
        display: flex;
        align-items: center;
        padding: 18px 24px;
        margin: 18px 0;
    }

    input {
        border: none;
        font-size: 15px;
        color: #17161a;
        width: 100%;
    }

    &::placeholder {
        color: lightgrey;
        background: white;
    }

    .icon {
        color: grey;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        margin-left: 10px;
    }
`;
