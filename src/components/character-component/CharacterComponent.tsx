import type {FC, ReactNode} from 'react';
import type {ISimpsonModel} from "../../models/SimpsonModel.ts";

type SimpsonPropsType = {
    character: ISimpsonModel;
    children: ReactNode;
}

const CharacterComponent: FC<SimpsonPropsType> = ({character, children}) => {
    return (
        <div className='w-full p-4 border border-gray-200 rounded-lg shadow-sm'>
            <h3 className='text-3xl font-bold mb-2'>{character.name} {character.surname}</h3>
            <p className='text-gray-600 mb-2'>Age: {character.age} years</p>
            <p className='mb-4'>{children}</p>
            <img src={character.photo} alt={character.name} className='w-48 h-48 object-contain'/>
        </div>
    );
};

export default CharacterComponent;