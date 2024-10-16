import React from "react";
import MenuContainer from "../components/MenuContainer";
import Header from "../components/Header";
import CategoryItem from "../components/CategoryItem";
import data from "../../data.json";
const CategoriesPage = () => {
    return (
        <>
            <Header>
                <div className="flex justify-around px-2 pt-10 overflow-hidden">
                    <h1 className="text-[1.75rem] text-center pt-5 text-white font-bold w-[18rem] max-w-[60vw]">
                        Bienvenue Chez Sultan Alep
                    </h1>

                    <div
                        style={{
                            backgroundImage:
                                "url(/images/sultan_alep_logo.png)",
                        }}
                        className="h-28 w-28 bg-cover -translate-y-1/3"
                        alt=""
                    />
                </div>
            </Header>
            <MenuContainer>
                <div className="relative bg-white grid max-[370px]:grid-cols-1 grid-cols-2 gap-y-4 gap-x-4 max-w-fit mx-auto pt-4 md:grid-cols-3 lg:grid-cols-4">
                    {data.map(category=>(
                        <CategoryItem title={category.title} imgSrc={category.img} />
                    ))}
                </div>
            </MenuContainer>
        </>
    );
};

export default CategoriesPage;
