import React, { ReactNode, ReactElement } from 'react';

type WrapperProps = {
    children: ReactNode;
};

const Wrapper = (props: WrapperProps) => {
    return props.children;
};

export default Wrapper;
