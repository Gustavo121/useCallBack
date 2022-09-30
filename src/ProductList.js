import { useEffect } from 'react';

export function ProductList({ list, listModifier }) {
    const modifiedList = listModifier(list);

    useEffect(() => {
        console.log('Criou a Função do Zero');
    }, [listModifier]);

    return (
        <ul>
            {modifiedList.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}