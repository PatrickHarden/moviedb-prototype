import React, { useState } from "react";
import {
    Input,
    InputGroup,
    InputLeftElement,
    InputRightAddon
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

export const SearchBar = ({ setSearchTerm }) => {
    const [input, setInput] = useState('')
    const { push } = useRouter();

    const onInputChange = (e) => {
        setInput(e.target.value)
    }

    const onKeyDown = (e) => {
        if (e.keyCode === 13 && input !== '') {
            setSearchTerm(input);
            push('/search')
        }
    }

    return (
        <div style={{ width: '300px' }}>
            <InputGroup borderRadius={5} size="sm">
                <InputLeftElement
                    pointerEvents="none"
                    children={<Search2Icon color="gray.600" />}
                />
                <Input type="text" placeholder="Search..." onChange={(e) => onInputChange(e)} onKeyDown={onKeyDown} border="1px solid #949494" />
                <InputRightAddon
                    p={0}
                    border="none"
                >
                </InputRightAddon>
            </InputGroup>
        </div>
    );
};
