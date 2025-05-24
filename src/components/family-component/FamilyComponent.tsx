import {simpsons} from "../../data/array";
import CharacterComponent from "../character-component/CharacterComponent";

const FamilyComponent = () => {
    return (
        <div className='flex flex-col gap-8 border-2 border-slate-600 w-2/3 mx-auto p-6 rounded-2xl bg-white'>
            {
                simpsons.map((item, index) => (
                    <CharacterComponent key={index} character={item}>
                        {item.info}
                    </CharacterComponent>
                ))
            }
        </div>
    );
};

export default FamilyComponent;