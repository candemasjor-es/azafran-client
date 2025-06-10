import { useEffect, useState } from "react";
import { Flex, Typography } from "antd";
import { useNavigate } from "react-router";
const { Title, Paragraph } = Typography;

const Dashboard = () => {
    const [ingredients, setIngredients] = useState([]);
    const navigate = useNavigate();

    if (!localStorage.getItem("accessToken")) {
        navigate("/login");
    }

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
                console.log(data);
            });
    }, []);

    return (
        <Flex vertical gap={"5px"}>
            <Title>Dashboard</Title>
            {ingredients.map((ingredient, index) => {
                return (
                    <Flex
                        justify="center"
                        align="center"
                        key={index}
                        style={{
                            border: "1px solid black",
                            borderRadius: "8px",
                            padding: "5px",
                        }}
                    >
                        <Paragraph style={{ margin: 0 }}>
                            {ingredient.name}
                        </Paragraph>
                    </Flex>
                );
            })}
        </Flex>
    );
};

export { Dashboard };
