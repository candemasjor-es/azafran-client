import { useEffect, useState } from "react";
import { Flex, Layout, Typography, Menu } from "antd";
import { Ingredient } from "../../components/Ingredient/Ingredient";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const Dashboard = () => {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        fetch("http://localhost:8080/ingredients", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: accessToken,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setIngredients(data);
            });
    }, []);

    return (
        <>
            <Layout style={{ minHeight: "100vh", width: "100vw" }}>
                <Header
                    style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100vw",
                    }}
                ></Header>
                <Layout>
                    <Flex vertical gap={"5px"}>
                        <Title>Dashboard</Title>
                        {ingredients.map((ingredient, index) => {
                            return (
                                <Ingredient
                                    name={ingredient.name}
                                    key={index}
                                />
                            );
                        })}
                    </Flex>
                </Layout>
            </Layout>
        </>
    );
};

export { Dashboard };
